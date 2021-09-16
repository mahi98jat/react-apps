import { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./TodoList";
export default function Todo() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [warn, setWarn] = useState(false);

  const handleAdd = async () => {
    const data = {
      title: text,
      status: false,
    };
    if (data.title === "") {
      setWarn(true);
      return null;
    }
    await axios.post("http://localhost:3004/todos", data);
    getUser();
  };
  useEffect(() => {
    getUser();
  }, [page]);
  async function getUser() {
    let res = await axios.get("http://localhost:3004/todos", {
      params: {
        _limit: 5,
        _page: page,
      },
    });
    setList(res.data);
    console.log(list.length);
  }
  return (
    <>
      <input
        type="text"
        valur={text}
        placeholder="add todo here"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button className="btn-add" onClick={handleAdd}>
        ADD
      </button>
      <div disabled={!warn}>Please add some data</div>
      <div>
        <TodoList list={list} />
      </div>
      <button
        className="btn-prev"
        disabled={page <= 0}
        onClick={() => setPage(page - 1)}
      >
        PREV
      </button>
      <button
        className="btn-next"
        disabled={list.length < 5}
        onClick={() => setPage(page + 1)}
      >
        NEXT
      </button>
    </>
  );
}

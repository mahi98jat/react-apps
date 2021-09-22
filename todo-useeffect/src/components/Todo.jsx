import { useEffect, useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  useEffect(() => {
    getTodos();
  }, [page]);
  function getTodos() {
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`)
      .then((data) => data.json())
      .then((data) => {
        console.log("json data", data);
        setList(data);
        setLoading(false);
      });
  }
  return loading ? (
    "loading...."
  ) : (
    <>
      <input
        value={text}
        type="text"
        placeholder="Add to-do here"
        onChange={handleChange}
      ></input>
      <button
        onClick={() => {
          const data = {
            title: text,
            status: false,
          };
          fetch("http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(() => {
            getTodos();
            setText("");
          });
        }}
      >
        ADD
      </button>

      {list.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
      <div>Current page = {page}</div>
    </>
  );
}

import { useState } from "react";
import { fetchUsers } from "./fetchUsers";
const Github = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  const handleSearch = () => {
    setLoading(true);
    setIsError(false);
    fetUsersData();
  };
  const fetUsersData = () => {
    fetchUsers(query)
      .then((res) => {
        setUsers(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <h1>Github</h1>
      <div>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          type="text"
          placeholder="search"
        ></input>
        <button
          value={loading ? "loading..." : "Search"}
          onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>
      {isError ? "please fill in text" : null}
      <div className="item-container">
        {users?.map((items) => (
          <div key={items.id} className="items">
            {items.login}
          </div>
        ))}
      </div>
    </>
  );
};
export default Github;

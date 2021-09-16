export default function TodoList({ list }) {
  return (
    <div className="list-container">
      {list.map((e) => (
        <>
          <div className="list-item" key={e.id}>
            {e.title}
          </div>
         
        </>
      ))}
    </div>
  );
}

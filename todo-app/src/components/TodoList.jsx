export default function TodoList({ data, markDone, removeTask }) {
  let id = data.id;
  let title = data.title;
  let status = data.status;

  return (
    <>
      <div className={status ? "not-completed" : "completed"} key={id}>
        Task is : {title} {status ? "done" : "not done"}
      </div>
      <button onClick={() => markDone(id)}>Mark Complete</button>
      <button onClick={() => removeTask(id)}>REMOVE</button>
    </>
  );
}

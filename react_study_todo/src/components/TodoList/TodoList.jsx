import styles from './TodoList.module.css';

function TodoList({ todoList, deleteList, toggleList }) {
  console.log('출력할 값 : ', todoList);
  return (
    <div>
      <h1>리스트 출력</h1>
      {todoList.length === 0 ? (
        <p>할 일이 없네요...</p>
      ) : (
        <ul>
          {todoList.map(
            (list) => (
              console.log(list.id, list.text),
              console.log(list.isDone),
              (
                <li key={list.id}>
                  <span
                    className={`${styles.todoList} ${list.isDone ? styles.finish : ''}`}
                    onClick={() => toggleList(list.id)}
                  >
                    {list.text}
                  </span>
                  <button type="button" onClick={() => deleteList(list.id)}>
                    X
                  </button>
                </li>
              )
            ),
          )}
        </ul>
      )}
    </div>
  );
}

export default TodoList;

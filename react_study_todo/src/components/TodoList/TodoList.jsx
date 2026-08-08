function TodoList({ todoList, deleteList }) {
  console.log('출력할 값 : ', todoList);
  return (
    <div>
      <h1>리스트 출력</h1>
      <ul>
        {todoList.map(
          (list) => (
            console.log(list.id, list.text),
            console.log(list.isDone),
            (
              <li key={list.id}>
                {list.text}
                <button type="button" onClick={() => deleteList(list.id)}>
                  삭제
                </button>
              </li>
            )
          ),
        )}
      </ul>
    </div>
  );
}

export default TodoList;

import { useState } from 'react';
import { Nav } from './components/Navigation';
import { InputList } from './components/InputList';
import { TodoList } from './components/TodoList';
import { nanoid } from 'nanoid';

function App() {
  const name = '정호영';
  const [todoList, setTodoList] = useState([
    { id: '123ab', text: '고양이 츄르주기', isDone: false },
    { id: '123ac', text: '강아지랑 공놀이하기', isDone: false },
  ]);
  function AddList(text) {
    const newTodoList = {
      id: nanoid(),
      text: text,
      inDone: false,
    };
    setTodoList([...todoList, newTodoList]);
  }
  function DeletList(targetId) {
    setTodoList(todoList.filter((list) => list.id !== targetId));
  }
  function ToggleList(targetId) {
    const togglList = todoList.map((list) =>
      list.id === targetId ? {...list, isDone : !list.isDone} : list
    );
    setTodoList(togglList);
  }
  console.log('출력할 리스트: ', todoList);
  return (
    <>
      <Nav name={name} />
      <InputList addList={AddList} />
      <TodoList
        todoList={todoList}
        deleteList={DeletList}
        toggleList={ToggleList}
      />
    </>
  );
}

export default App;

import { useState } from 'react';
import styles from './InputList.module.css';

function InputList({ addList }) {
  const [input, setInput] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if(input.trim === '') return
    addList(input);
    setInput('');
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="새로운 할 일을 입력하세요!"
        onChange={handleInputChange}
        value={input}
        onKeyDown={(event) => event.key === 'Enter' ? event.preventDefault() : event}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default InputList;

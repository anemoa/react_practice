import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState<number>(0);


  return (
	<div>
		<h1>카운터</h1>
		<p>현재 숫자: {count}</p>
		<button onClick={() => setCount(count + 1)}>+1</button>
		<button onClick={() => setCount(count - 1)}>-1</button>
	</div>
  )
}

export default Counter
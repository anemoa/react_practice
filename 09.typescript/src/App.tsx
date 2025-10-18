import './App.css';

interface Person{
	name: string,
	age: number
}

function App() {
    const name: string = 'yves';
    const age: number = 22;

	const fruits: string[] = ['딸기', '사과', '샤인머스켓']; 

	const person: Person = {name: '조조', age: 999}

    return (
        <>
            <h1>헬로 월드</h1>
			<p> 이름: {name} </p>
			<p> 나이: {age}살 </p>
			
			<ul>
				{fruits.map((fr, idx) => (
					<li key={idx}>
						{fr}
					</li>
				))}
			</ul>

			<div>
				<h2>person 정보</h2>
				<p>이름: {person.name}</p>
				<p>나이: {person.age}살</p>
			</div>
        </>
    );
}

export default App;

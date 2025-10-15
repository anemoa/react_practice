import './App.css';

function App() {
    const name: string = 'yves';
    const age: number = 22;

	const fruits: string[] = ['딸기', '사과', '샤인머스켓']; 

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
        </>
    );
}

export default App;

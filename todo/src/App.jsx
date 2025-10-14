import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {

	const [data, setData] = useState([]);

	const readApi = () => {
		axios.get('https://mryvklwuokgolewanijs.supabase.co/rest/v1/challenges?select=*').then((res) => {
			console.log(res);
			setData(res.data);
		})

	}

    return (
        <>
            <h1>Todo - REST API</h1>

            <h2>todo list</h2>
			<p>
				{readApi}
			</p>
        </>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes, NavLink, useParams} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      home..
    </div>
  );
}

let contents = [
  {id: 1, title: 'html', des: 'html is'},
  {id: 2, title: 'js', des: 'js is'},
  {id: 3, title: 'react', des: 'react is'},
];

function Topic(){
  let params = useParams();
  let topic_id = params.topic_id;
  let selected_topic = {
    title: 'sorry',
    des: 'not found'
  };
  for(let i = 0; i < contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }
  console.log(params);
  return(
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.des}
    </div>
  );
}

function Topics() {
  let lis = [];
  for(let i = 0; i < contents.length; i++ ){
    lis.push(
      <li key={contents[i].id}> <NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink> </li>
    )
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><NavLink to="/topics/1">html</NavLink></li>
        <li><NavLink to="/topics/2">js</NavLink></li>
        <li><NavLink to="/topics/3">react</NavLink></li>
      </ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic />} />
      </Routes>
      
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>hello react router dom</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={'Not Found'} />
      </Routes>
      
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

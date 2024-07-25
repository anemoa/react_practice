import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props){
  console.log('props', props.title);
  return (
    <div>
      <header>
        <h1>
          <a href="/" onClick = {(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}>{props.title}</a>
        </h1>
      </header>
    </div>
  );
}

function Nav(props){
  // const lis = [
  //   <li><a href="/read/1">html2</a></li>,
  //   <li><a href="/read/2">css2</a></li>,
  //   <li><a href="/read/3">js2</a></li>
  // ];

  const lis = [];
  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick = {event => {
        event.preventDefault();
        props.onChangeMode2(Number(event.target.id));
      }}>{t.title}</a>
      </li>);
  }

  return(
    <div>
      <nav>
        <ol>
          {lis}
        </ol>
      </nav>
    </div>
  );
}

function Article(props){
  return(
    <div>
      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
    </div>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id: 1, title: 'html', body: 'html is...'},
    {id: 2, title: 'css', body: 'css is...'},
    {id: 3, title: 'js', body: 'js is...'},
  ];

  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title = "Welcome" body = "Hello, Web???"></Article>
  } else if(mode === 'READ'){
    let title, body = null;
    for(let i = 0; i < topics.length; i++){
      console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title = {title} body = {body}></Article>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode = {() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode2 = {(_id) => {
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}

    </div>
  );
}

export default App;

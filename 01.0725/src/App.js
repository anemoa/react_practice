import logo from './logo.svg';
import './App.css';

function Header(props){
  console.log('props', props.title);
  return (
    <div>
      <header>
        <h1><a href="/">{props.title}</a></h1>
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
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
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
  const topics = [
    {id: 1, title: 'html', body: 'html is...'},
    {id: 2, title: 'css', body: 'css is...'},
    {id: 3, title: 'js', body: 'js is...'},
  ];

  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcom" body="Hello, Web"></Article>

    </div>
  );
}

export default App;

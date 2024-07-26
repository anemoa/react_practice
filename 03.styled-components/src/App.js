import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const SimpleBtn = styled.button`
  color: red;
  background-color: green;
`;

const LargeBtn = styled(SimpleBtn)`
  font-size: 50px;
`;

const ReactBtn = (props) => {
  console.log(props);
  return <button className={props.className}>{props.children}</button>
}

const ReactBtnLarge = styled(ReactBtn)`
  font-size: 70px;
`;

const PrimaryBtn = styled.button`
  color: ${ props => props.primary ? 'white' : 'black' };
  background-color: ${ props => props.primary ? 'red' : 'yellow' };
`;


export default function App(){
  return(
    <div>
      <SimpleBtn>simple</SimpleBtn>
      <LargeBtn>Large</LargeBtn>
      <ReactBtn>React222</ReactBtn>
      <ReactBtnLarge>LargeReact</ReactBtnLarge>
      <PrimaryBtn>normal</PrimaryBtn>
      <PrimaryBtn primary>primary</PrimaryBtn>
    </div>
  )
}

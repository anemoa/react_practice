interface GreetingProps {
    name: string;
    age: number;
}

function Greeting({ name, age }: GreetingProps) {
    return (
        <div>
            <h3>안녕하세요, {name}님!</h3>
            <p>나이: {age}살</p>
        </div>
    );
}

export default Greeting;
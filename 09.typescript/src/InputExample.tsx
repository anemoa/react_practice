import { useState } from 'react';

function InputExample() {
    const [text, setText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <div>
            <h3>입력 예제</h3>
            <input 
                type="text" 
                value={text}
                onChange={handleChange}
                placeholder="여기에 입력하세요"
            />
            <p>입력한 내용: {text}</p>
        </div>
    );
}

export default InputExample;
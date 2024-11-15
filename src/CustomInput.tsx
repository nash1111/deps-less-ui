import React, { useState } from 'react';

export const CustomInput: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [isCodeHighlight, setIsCodeHighlight] = useState(false);
    const [emptyLineCount, setEmptyLineCount] = useState(0);
    const emptyLineThreshold = 3;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setInputValue(value);

        if (value.endsWith('```')) {
            setIsCodeHighlight(!isCodeHighlight);
            setEmptyLineCount(0);
        }

        if (value.endsWith('\n')) {
            setEmptyLineCount(emptyLineCount + 1);
        } else {
            setEmptyLineCount(0);
        }

        if (emptyLineCount >= emptyLineThreshold) {
            setIsCodeHighlight(false);
        }
    };

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={handleChange}
                rows={10}
                cols={50}
                placeholder="Type here..."
            />
            <div>
                {isCodeHighlight ? (
                    <pre>
                        <code>{inputValue}</code>
                    </pre>
                ) : (
                    <p>{inputValue}</p>
                )}
            </div>
        </div>
    );
};

export default CustomInput;
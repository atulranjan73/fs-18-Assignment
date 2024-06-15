import React, { useRef, useState } from 'react';
import "./Quize.css";
import { data } from '../assets/data';

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const Option1 = useRef(null);
    const Option2 = useRef(null);
    const Option3 = useRef(null);
    const Option4 = useRef(null);

    const Option_arr = [Option1, Option2, Option3, Option4];

    const handleNext = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
            } else {
                setIndex(prevIndex => prevIndex + 1);
                setQuestion(data[index + 1]);
                resetOptionStyles();
                setLock(false);
            }
        }
    };

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("Correct");
                setScore(prevScore => prevScore + 1);
            } else {
                e.target.classList.add("Wrong");
                Option_arr[question.ans - 1].current.classList.add("Correct");
            }
            setLock(true);
        }
    };

    const resetOptionStyles = () => {
        Option_arr.forEach(option => {
            option.current.classList.remove("Correct");
            option.current.classList.remove("Wrong");
        });
    };

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            {result ? (
                <div>
                    <h2>Quiz Completed</h2>
                    <p>Your score is: {score} out of {data.length}</p>
                </div>
            ) : (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={Option1} onClick={(e) => { checkAns(e, 1); }}>{question.Option1}</li>
                        <li ref={Option2} onClick={(e) => { checkAns(e, 2); }}>{question.Option2}</li>
                        <li ref={Option3} onClick={(e) => { checkAns(e, 3); }}>{question.Option3}</li>
                        <li ref={Option4} onClick={(e) => { checkAns(e, 4); }}>{question.Option4}</li>
                    </ul>
                    <button onClick={handleNext}>Next</button>
                    <div className="index">Question {index + 1} of {data.length}</div>
                </>
            )}
        </div>
    );
};

export default Quiz;

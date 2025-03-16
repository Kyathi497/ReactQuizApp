import { useState, useCallback, useRef } from "react"
import Questions from '../questions';

import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {

    
    const [userAnswers, setUserAnswers] = useState([]);
    
    const activeQuestionIndex = userAnswers.length;



    const quizComplete = activeQuestionIndex === Questions.length;


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer]
        });

        }, []);

    

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);


    if (quizComplete) {
        return (
            <Summary userAnswers={userAnswers}/>
        )
    }
  
    

    return (
        <div id="quiz">
            <Question
            key={activeQuestionIndex} 
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}
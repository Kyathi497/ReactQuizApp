import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout, mode}){
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer)
        }
    }, [timeout, onTimeout]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prev => prev-100)
        }, 100);
        
        return () => {
            clearInterval(interval)
        }
    }, []);

            // useEffect(() => {
            //     const timer = setTimeout(onTimeout, timeout);
            //     const interval = setInterval(() => {
            //         setRemainingTime(prev => prev - 100);
            //     }, 100);

            //     return () => {
            //         clearTimeout(timer);
            //         clearInterval(interval);
            //     };
            // }, [timeout, onTimeout]);

    return(
        <progress className={mode} max={timeout} value={remainingTime} id="question-time"/>
    );
} 
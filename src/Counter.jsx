import React, { useState, useEffect, useRef } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialVal, incrementAmount }) {
    const directionRef = useRef(null);

    const [counter, setCounter] = useState(initialVal);

    const handleIncrement = () => {
        setCounter((prevCounter) => {
            directionRef.current = prevCounter < counter ? "down" : "up";
            return prevCounter + incrementAmount;
        });
    };

    const handleDecrement = () => {
        setCounter((prevCounter) => {
            directionRef.current = prevCounter > counter ? "up" : "down";
            return prevCounter - incrementAmount;
        });
    };

    const handleReset = () => {
        setCounter(initialVal);
    };

    useEffect(() => {
        console.log("Current counter value:", counter);
    }, [counter]);

    useEffect(() => {
        if (directionRef.current !== null) {
            console.log("Direction of change:", directionRef.current);
        }
    }, [directionRef.current]);

    return (
        <div>
            <CounterDisplay counter={counter} />
            <button
                onClick={handleIncrement}
                style={{
                    backgroundColor: "#F2545B",
                    color: "#F3F7F0",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Increment Value
            </button>
            <button
                onClick={handleDecrement}
                style={{
                    backgroundColor: "#F2545B",
                    color: "#F3F7F0",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Decrement Value
            </button>
            <button
                onClick={handleReset}
                style={{
                    backgroundColor: "#F2545B",
                    color: "#F3F7F0",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Reset Value
            </button>
        </div>
    );
}

export default Counter;

import React, { useState, useEffect } from "react";
import "./Clock.scss";

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const updateClock = () => {
            setCurrentTime(new Date());
        };

        const intervalId = setInterval(updateClock, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="clock">
            {" "}
            <div className="clock__time">
                Current Time: {currentTime.toLocaleTimeString()}
            </div>
        </div>
    );
}

export default Clock;

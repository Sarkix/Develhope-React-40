// Clock.jsx
import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "./LanguageContext";
import "./Clock.scss";

function Clock() {
    const language = useContext(LanguageContext);
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
            <div className="clock__time">
                {language === "en" ? "Current Time:" : "Hora Actual:"}{" "}
                {currentTime.toLocaleTimeString()}
            </div>
        </div>
    );
}

export default Clock;

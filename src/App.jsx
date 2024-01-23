import React, { StrictMode } from "react";
import FocusableInput from "./FocusableInput";
import MountMessage from "./MountMessage";
import Counter from "./Counter";
import Colors from "./Colors";
import TodoList from "./TodoList";
import InteractiveWelcome from "./InteractiveWelcome";
import Clock from "./Clock";
import UncontrolledLogin from "./UncontrolledLogin";

function App() {
    const colorArray = [
        { id: 1, name: "Red" },
        { id: 2, name: "Blue" },
        { id: 3, name: "Green" },
    ];

    return (
        <div>
            <h1>My React App</h1>
            <FocusableInput />
            <StrictMode>
                <MountMessage />
            </StrictMode>
            <Counter initialVal={0} incrementAmount={1} />
            <h2>Color List:</h2>
            <Colors ColorArray={colorArray} />
            <h2>Todo List:</h2>
            <TodoList />
            <InteractiveWelcome />
            <Clock />
            <UncontrolledLogin />
        </div>
    );
}

export default App;

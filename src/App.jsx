import React from "react";
import FocusableInput from "./FocusableInput";
import MountMessage from "./MountMessage";
import Counter from "./Counter";
import Colors from "./Colors";
import TodoList from "./TodoList";
import InteractiveWelcome from "./InteractiveWelcome";
import Clock from "./Clock";
import UncontrolledLogin from "./UncontrolledLogin";
import Container from "./Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const colorArray = [
        { id: 1, name: "Red" },
        { id: 2, name: "Blue" },
        { id: 3, name: "Green" },
    ];

    return (
        <div>
            <Container title="Focusable Input">
                <FocusableInput />
            </Container>

            <Container title="Mount Message">
                <MountMessage />
            </Container>

            <Container title="Counter">
                <Counter initialVal={0} incrementAmount={1} />
            </Container>

            <Container title="Color List">
                <Colors ColorArray={colorArray} />
            </Container>

            <Container title="Todo List">
                <TodoList />
            </Container>

            <Container title="Interactive Welcome">
                <InteractiveWelcome />
            </Container>

            <Container title="Clock">
                <Clock />
            </Container>

            <Container title="Uncontrolled Login">
                <UncontrolledLogin />
            </Container>
        </div>
    );
}

export default App;

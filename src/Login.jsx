import React, { useState } from "react";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRememberChange = (event) => {
        setRemember(event.target.checked);
    };

    const handleLoginClick = () => {
        onLogin({ username, password, remember });
    };

    const handleResetClick = () => {
        setUsername("");
        setPassword("");
        setRemember(false);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario (la recarga de la página).
        handleLoginClick(); // Llama a la función de manejo del inicio de sesión
    };

    const isButtonDisabled = !username || !password;

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </label>

            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </label>

            <label>
                Remember me:
                <input
                    type="checkbox"
                    checked={remember} //cambiar de value a checked para que funcione el Reset.
                    onChange={handleRememberChange}
                />
            </label>

            <button type="submit" disabled={isButtonDisabled}>
                {" "}
                {/*Cambiamos el onClick={handleLoginClick} por el type "submit" porque ya hemos añadido el atributo onSubmit en la etiqueta form, al que le pasamos la función handleFormSubmit que ya ejecuta a su vez la función handleLoginClick y además el event.preventDefault()*/}
                Click to Login!
            </button>

            <button onClick={handleResetClick} type="button">
                Reset
            </button>
        </form>
    );
}

export default Login;

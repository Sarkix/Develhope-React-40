import React from "react";

function FormDataLogin({ onLogin }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Utilizando la API de FormData para acceder a los valores del formulario
        const formData = new FormData(event.target);
        const username = formData.get("username");
        const password = formData.get("password");
        const remember = formData.get("remember") === "on"; // "on" si está marcado

        // Llamar a la función de manejo del inicio de sesión onLogin que espera username, password y remember.
        onLogin({ username, password, remember });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <label>
                Remember me:
                <input type="checkbox" name="remember" />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}

export default FormDataLogin;

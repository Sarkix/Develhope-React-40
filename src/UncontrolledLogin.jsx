import React from "react";

function UncontrolledLogin({ onLogin }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Acceder a los valores utilizando la API del DOM, coincidirán con los valores del atributo name de los inputs del formulario.
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        // Llamar a la función de manejo del inicio de sesión, onLogin, que espera username, password y remember.
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
            {/* No se necesita el botón de Reset ya que estamos utilizando componentes no controlados */}
        </form>
    );
}

export default UncontrolledLogin;

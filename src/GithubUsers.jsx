import React, { useState, useEffect } from "react";
import GithubUser from "./GithubUser";

// Nueva constante para la URL base de la API de Github
const GITHUB_API_BASE_URL = "https://api.github.com/users/";

const GithubUsers = () => {
    // Estado para manejar la entrada de texto del formulario
    const [searchInput, setSearchInput] = useState("");
    // Estado para almacenar la lista de usuarios encontrados
    const [userList, setUserList] = useState([]);

    // Función para manejar cambios en la entrada de texto
    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Función para manejar el envío del formulario
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            // Realizamos una solicitud a la API de Github con el nombre de usuario proporcionado
            const response = await fetch(
                `${GITHUB_API_BASE_URL}${searchInput}`
            );
            if (response.ok) {
                const userData = await response.json();
                // Actualizamos la lista de usuarios con el nuevo usuario encontrado
                setUserList([...userList, userData]);
            } else {
                console.error("Error fetching user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }

        // Limpiamos el campo de texto después de la búsqueda
        setSearchInput("");
    };

    return (
        <div>
            <h2>Github User Search</h2>
            {/* Formulario para buscar usuarios de Github */}
            <form onSubmit={handleFormSubmit}>
                <label>
                    Enter Github Username:
                    <input
                        style={{ color: "black" }}
                        type="text"
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Search</button>
            </form>

            {/* Lista de usuarios */}
            <ul>
                {userList.map((user) => (
                    // Cada elemento de la lista es un componente GithubUser
                    <li key={user.id}>
                        <GithubUser username={user.login} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GithubUsers;

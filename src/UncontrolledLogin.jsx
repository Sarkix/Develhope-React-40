// UncontrolledLogin.jsx

import React from "react";

function UncontrolledLogin({ onLogin }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        onLogin({ username, password, remember });
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="max-w-xs mx-auto mt-10 p-6 bg-white rounded shadow-md"
        >
            <div className="mb-4">
                <label
                    className="block text-grey-700 text-sm font-bold mb-2"
                    htmlFor="username"
                >
                    Username:
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Password:
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="remember"
                >
                    Remember me:
                </label>
                <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="mr-2 leading-tight"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Login
            </button>
        </form>
    );
}

export default UncontrolledLogin;

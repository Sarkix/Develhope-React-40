import { useState } from "react";

// Definimos y exportamos el hook useCounter
export const useCounter = (initialValue = 0) => {
    // Estado del contador
    const [count, setCount] = useState(initialValue);

    // Función para incrementar el contador
    const increment = () => {
        setCount(count + 1);
    };

    // Función para decrementar el contador
    const decrement = () => {
        setCount(count - 1);
    };

    // Función para reiniciar el contador
    const reset = () => {
        setCount(initialValue);
    };

    // Devolvemos el valor actual del contador y las funciones asociadas
    return { count, increment, decrement, reset };
};

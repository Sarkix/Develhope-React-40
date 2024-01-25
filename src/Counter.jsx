import React from "react";
import { useCounter } from "./useCounter"; // Asegúrate de ajustar la ruta correcta
import CounterDisplay from "./CounterDisplay";

function Counter({ initialVal, incrementAmount }) {
    // Utilizamos el hook useCounter para manejar el estado del contador y obtener funciones asociadas
    const { count, increment, decrement, reset } = useCounter(initialVal);

    return (
        <div>
            <CounterDisplay counter={count} />
            {/* Botones para interactuar con el contador, ahora utilizando las funciones del hook */}
            <button
                onClick={increment}
                style={{
                    backgroundColor: "#F2545B",
                    color: "#F3F7F0",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Increment Value
            </button>
            <button
                onClick={decrement}
                style={{
                    backgroundColor: "#F2545B",
                    color: "#F3F7F0",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Decrement Value
            </button>
            <button
                onClick={reset}
                style={{
                    backgroundColor: "#F2545B",
                    color: "#F3F7F0",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Reset Value
            </button>
        </div>
    );
}

export default Counter;

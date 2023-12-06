import React, { useEffect, useRef } from "react";

function FocusableInput() {
    // Utilizamos useRef para obtener una referencia a la etiqueta input
    const inputRef = useRef(null);

    // Utilizamos useEffect para enfocar la etiqueta input cuando el componente se monte
    useEffect(() => {
        // Enfocar la etiqueta input al montar el componente
        inputRef.current.focus();
    }, []); // El segundo argumento de useEffect es un array de dependencias, [] significa que solo se ejecutará al montar el componente

    return (
        <div>
            {/* Utilizamos la propiedad ref de React para asignar la referencia a la etiqueta input */}
            <input type="text" ref={inputRef} />
        </div>
    );
}

export default FocusableInput;

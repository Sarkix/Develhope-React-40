import React, { useEffect, useRef } from "react";

function MountMessage() {
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            console.log("Componente montado por primera vez");
            isMounted.current = true;
        }
    }, []);

    return <div>Componente con mensaje de montaje</div>;
}

export default MountMessage;

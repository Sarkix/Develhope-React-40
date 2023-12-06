import React from "react";
import Color from "./Color";

function Colors({ ColorArray }) {
    return (
        <ul>
            {ColorArray.map((color) => (
                <Color key={color.id} color={color} />
            ))}
        </ul>
    );
}

export default Colors;

import React, { useState } from "react";

function Container({ title, children }) {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            style={{
                backgroundColor: "#19323C",
                color: "#fff",
                border: "2px solid #A93F55",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
            }}
        >
            <h2
                onClick={handleToggleCollapse}
                className="mb-2"
                style={{
                    cursor: "pointer",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                }}
            >
                {title}
            </h2>
            {!collapsed && children}
        </div>
    );
}

export default Container;

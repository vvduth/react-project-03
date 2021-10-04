import React from "react";

const Section = (props) => {
    return (
        <div style = { {margin: "50px", background: "#f57f17", 
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
                        color: 'white', borderRadius: '12px'
                        }}>
            {props.children}
        </div>
    )
};

export default Section;
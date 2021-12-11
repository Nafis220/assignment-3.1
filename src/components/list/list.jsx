import React from "react";
const List = (props) => {
    return (
        <li  style={{listStyleType:'none', color: 'white', fontSize:'1rem', fontFamily:'Helvetica', padding:'0.5rem' }}>{props.name}</li>
    )
}
export default List
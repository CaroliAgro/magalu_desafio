import React from 'react';

const Input = (props) => {
    return (
        <div className="form-group">
            <label for={props.id}>{props.label}</label>
            <input type={props.type} class="form-control" id={props.id} placeholder={props.placeholder}/>
        </div>
    );
}

export default Input;

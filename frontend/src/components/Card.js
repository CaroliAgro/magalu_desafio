import React from 'react';

const Card = (props) => {
    return (
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">{props.number}</h3>
    <p class="card-text">{props.text}</p>
            </div>
        </div>
    );
}

export default Card;

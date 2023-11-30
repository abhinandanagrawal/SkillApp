import React from 'react';

function Greeting(props){
    return(
        <div>
            <p>Welcome to my website {props.name}</p>
            <p>{props.message}</p>
        </div>
    );

}

export default Greeting;
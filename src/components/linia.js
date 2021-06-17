import React from 'react';


const Linia = (props) => {
    const contador = props.cont;
    const linias = props.count;
  if (contador == linias) {
    return <h1 style={{
        backgroundColor: 'blue'}}>{props.value}</h1>;
  }
  return <p>{props.value}</p>;
}


  export default Linia;


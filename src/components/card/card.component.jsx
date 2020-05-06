import React from 'react';

// function Card(props) {
//     return (
//     <div>
//         <h1> { props.monster.name } </h1>
//     </div>
//     );
// }

// export default Card;

function Card(props) {
    return <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
      </div>
  
    
  };
  
export default Card;
  
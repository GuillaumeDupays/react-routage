import React from 'react';

const TodoDetails = ({match}) => {
    return (
      <div>Détail todo dont l'id est : {match.params.id}</div>
    )
}
 
export default TodoDetails;
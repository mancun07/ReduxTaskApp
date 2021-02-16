import React, {useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const ButtonSet = () => {

    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
      })  

    return (
<div className="fixed-action-btn">
  <a href="#modal1" className="btn-floating btn-large red modal-trigger">
    <i className="large material-icons">add</i>
  </a>
  <ul>
    <li><a href="#techModal" className="btn-floating blue modal-trigger"><i className="material-icons">person</i></a></li>
    <li><a href="#addTechModal" className="btn-floating green modal-trigger"><i className="material-icons">person_add</i></a></li>
  </ul>
</div>
    )
}

export default ButtonSet

import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {searchLogs} from '../actions/LogActions';
import {connect} from 'react-redux';


const Navbar = ({searchLogs}) => {
    return (
        <nav>
        <div className="nav-wrapper indigo">
          <form>
            <div className="input-field">
              <input id="search" type="search" onChange={(e) => searchLogs(e.target.value.trim())} placeholder="Поиск по задачам & сотрудникам"/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
}

export default connect(null, {searchLogs})(Navbar)

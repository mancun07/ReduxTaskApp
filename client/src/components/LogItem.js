import React from 'react';
import Moment from 'react-moment';
import { deleteLog, setCurrent } from '../actions/LogActions';
import {connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({log, deleteLog, setCurrent}) => {


    return (
    <li className="collection-item">
        <div>
            <a href="#editModal" onClick={() => setCurrent(log)} className={`modal-trigger ${log.attention ? 'red-text' : ''}`}>{log.message}</a>
            <br/>
            <span>#{log.id} <span className="grey-text">последнее обновление сделано{' '}</span>{log.tech}, 
            <span className="grey-text">{' '} {' '}
            <Moment format='MMMM Do YYYY, h:mm a'>{log.date}</Moment></span>
            </span>
            <a href="#!" className="secondary-content" onClick={() => {
            deleteLog(log._id)
            M.toast({ html: 'Задача удалена!' });
            }}><i className="material-icons">delete</i></a>


        </div>

     
       
                     {/* <div>Alvin<a href="#!" class="secondary-content">
                <i class="material-icons">send</i></a> */}
            {/* </div> */}
             
    </li>

    
    )
}

export default connect(null, {deleteLog, setCurrent})(LogItem)

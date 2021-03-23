import React from 'react';
import Moment from 'react-moment';
import { deleteTask, setCurrent } from '../actions/TaskActions';
import {connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const TaskItem = ({task, deleteTask, setCurrent}) => {


    return (
    <li className="collection-item">
        <div>
            <a href="#editModal" onClick={() => setCurrent(task)} className={`modal-trigger ${task.attention ? 'red-text' : ''}`}>{task.message}</a>
            <br/>
            <span> #<span className="grey-text">последнее обновление сделано{' '}</span>{task.tech}, 
            <span className="grey-text">{' '} {' '}
            <Moment format='MMMM Do YYYY, h:mm a'>{log.date}</Moment></span>
            </span>
            <a href="#!" className="secondary-content" onClick={() => {
            deleteTask(task._id)
            M.toast({ html: 'Задача удалена!' });
            }}><i className="material-icons">delete</i></a>


        </div>

     
       
                     {/* <div>Alvin<a href="#!" class="secondary-content">
                <i class="material-icons">send</i></a> */}
            {/* </div> */}
             
    </li>

    
    )
}

export default connect(null, {deleteTask, setCurrent})(TaskItem)

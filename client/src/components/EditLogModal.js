import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {updateLog, setCurrent} from '../actions/LogActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({current, updateLog, setCurrent, techs}) => {
    const [message, setMessage] = useState('')
    const [tech, setTech] = useState('')
    const [attention, setAttention] = useState(false)

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setTech(current.tech);
            setAttention(current.attention);
        }
      }, [current])  


    const onSubmit = (e) => {
        e.preventDefault();
        if (message === '' || tech === '') {
            M.toast({ html: 'Первые два поля должны быть заполнены! Попробуйте еще раз!'});
        } else {
            updateLog({
                message, 
                tech,
                attention,
                // date: new Date(),
                _id: current._id
            })
            setMessage('');
            setTech('');
            setAttention(false);
            M.toast({ html: 'Задача успешно обновлена!'});
        }

    }


    return (
    <div id="editModal" className="modal">
        <form onSubmit={onSubmit}>
        <div className="modal-content">
            <h4 className="center-align">Внести изменение</h4>
            <div className="input-field col s6">
                <input id="log" type="text" value={message} className="validate" onChange={e => setMessage(e.target.value)}/>
            </div>

            <select value={tech} onChange={e => setTech(e.target.value)}>
            <option value="" disabled>Выберите сотрудника</option>
                {techs !== null && techs.map(t => {
                     return <option key={t._id} >{t.firstName} {t.lastName}</option>
                    })}
            </select>

            <p>
                <label>
                    <input type="checkbox" checked={attention} onChange={e => setAttention(!attention)}/>
                    <span>Требует проверки</span>
                </label>
            </p>

        </div>
 

        <div className="modal-footer">
            <input type="submit" className="modal-close btn btn-flat green white-text" value="Обновить"/>
        </div>
        </form>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        current: state.log.current,
        techs: state.tech.techs
    }
}

export default connect(mapStateToProps, {updateLog, setCurrent})(EditLogModal)

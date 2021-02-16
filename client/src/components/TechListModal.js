import React, {useEffect} from 'react';
import {deleteTech, getTechs} from '../actions/TechActions';
import { connect } from 'react-redux';

const TechListModal = ({getTechs, deleteTech, techs}) => {

    useEffect(() => {
        getTechs();
    }, [getTechs])

    return (
        <div id="techModal" className="modal">
            <div className="modal-content">
                <h4 className="center">Сотрудники Отдела</h4>
                <ul className="collection">
                    {techs && techs.map(tech => {
                        return <li key={tech._id} className="collection-item">{tech.firstName}{' '}{tech.lastName}
                        <a href="#!" className="secondary-content"
                        onClick={() => deleteTech(tech._id)}
                        ><i className="material-icons">delete</i></a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        techs: state.tech.techs
    }
}

export default connect(mapStateToProps, {getTechs, deleteTech} )(TechListModal)

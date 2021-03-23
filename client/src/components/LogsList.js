import React, {useEffect} from 'react';
import LogItem from './LogItem';
import 'materialize-css/dist/css/materialize.min.css';
import { connect } from 'react-redux';
import { getLogs, setLoading } from '../actions/LogActions';
import Preloader from './Preloader';

const LogsList = ({logs, getLogs, loading}) => {

    useEffect(() => {
        getLogs()
        // eslint-disable-next-line
    }, [])
   

 
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header center-align"><h4>Выполненные задачи</h4></li>
                {loading && <Preloader/>}
                {!loading && logs.length === 0 ? (
                    <p>На текущий момент нет выполненных задач...</p>
                ) : logs.map(log => {
                        return <LogItem key={log._id} log={log}/>
                    })
                 } 
        
            </ul>
        </div>

    )
}



const mapStateToProps = (state) => {
    return {
        logs: state.log.logs,
        loading: state.log.loading
    }

}

export default connect(mapStateToProps, {getLogs})(LogsList)

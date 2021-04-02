import React, { useEffect } from "react";
import TaskItem from "./TaskItem";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import { getTasks } from "../actions/TaskActions";
import Preloader from "./Preloader";
import PropTypes from "prop-types";

const TasksList = ({ tasks, getTasks, loading }) => {
  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header center-align">
          <h4>Выполненные задачи</h4>
        </li>
        {loading && <Preloader />}
        {!loading && tasks.length ? (
          tasks.map((task) => {
            return <TaskItem key={task._id} task={task} />;
          })
        ) : (
          <p style={{ textAlign: "center" }}>
            На текущий момент нет выполненных задач...
          </p>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks,
    loading: state.task.loading,
  };
};

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  getTasks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getTasks })(TasksList);

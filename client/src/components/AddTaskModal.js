import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/TaskActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTaskModal = ({ addTask, techs }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "" || tech === "") {
      M.toast({ html: "Первые два поля должны быть заполнены!" });
    } else {
      addTask({ message, tech, attention });
      setMessage("");
      setTech("");
      setAttention(false);
      M.toast({ html: "Задача успешно добавлена" });
    }
  };

  return (
    <div id="modal1" className="modal">
      <form onSubmit={onSubmit}>
        <div className="modal-content">
          <h4 className="center-align">Выполненная задача</h4>
          <div className="input-field col s6">
            <input
              id="log"
              type="text"
              value={message}
              className="validate"
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="log">Внесите задачу</label>
          </div>

          <select
            className="browser-default"
            name="tech"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          >
            <option value="" disabled>
              Выберите сотрудника
            </option>
            {techs !== null &&
              techs.map((t) => {
                return (
                  <option key={t._id}>
                    {t.firstName} {t.lastName}
                  </option>
                );
              })}
          </select>

          <p>
            <label>
              <input
                type="checkbox"
                checked={attention}
                onChange={(e) => setAttention(!attention)}
              />
              <span>Требует проверки</span>
            </label>
          </p>
        </div>

        <div className="modal-footer">
          <input
            type="submit"
            className="modal-close btn btn-flat green white-text"
            value="Добавить"
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    techs: state.tech.techs,
  };
};

AddTaskModal.propTypes = {
  addTask: PropTypes.func.isRequired,
  techs: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { addTask })(AddTaskModal);

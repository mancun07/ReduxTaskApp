import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { addTech } from "../actions/TechActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Первые два поля должны быть заполнены!" });
    } else {
      addTech({ firstName, lastName });
      setFirstName("");
      setLastName("");
      M.toast({ html: "Сотрудник успешно добавлен!" });
    }
  };

  return (
    <div id="addTechModal" className="modal">
      <form onSubmit={onSubmit}>
        <div className="modal-content">
          <div className="input-field">
            <input
              id="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value.trim())}
              type="text"
            />
            <label htmlFor="first_name">Имя</label>
          </div>
          <div className="input-field">
            <input
              id="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value.trim())}
              type="text"
            />
            <label htmlFor="last_name">Фамилия</label>
          </div>
        </div>
        <div className="modal-footer">
          <input
            type="submit"
            className="modal-close btn btn-flat green white-text"
            value="Добавить сотрудника"
          />
        </div>
      </form>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);

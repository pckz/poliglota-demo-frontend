import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUser } from '../actions/userActions';

const UserForm = ({ addUser }) => {

	return (
		<div>
			<div className="form-group text-left">
	          <label htmlFor="name">Nombre</label>
	          <input type="text" className="form-control mb-3" id="name" name="name" />
	        </div>
	        <div className="form-group text-left">
	          <label htmlFor="city">Ciudad</label>
	          <input type="text" className="form-control mb-3" id="city" name="city" />
	        </div>
	        <button type="submit" className="btn btn-primary">Submit</button>
	    </div>
        )
}
UserForm.propTypes = {
	addUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
	addUser: data => dispatch(addUser(data))
})

export default connect(null, mapDispatchToProps)(UserForm);
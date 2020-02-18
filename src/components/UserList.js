import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from '../actions/userActions';

const UserList = ({ getUsers, users }) => {
	useEffect(() => {
		getUsers()
	}, [])

	if (users.length <= 0) 
		return <div className="text-muted">No hay usuarios</div>

	return (
		<div>
			<h1>Usuarios: {users.length}</h1>
			{
	          users.map(data=>(
	            <div key={data.id} style={{ 'border': '1px solid #eee' }}>
	              <h4>{data.name}</h4>
	              <p>{data.city}</p>
	            </div>
	          ))
	        }
	    </div>
	)
}

UserList.propTypes = {
	users: PropTypes.array.isRequired,
	getUsers: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
	getUsers: () => dispatch(getUsers())
})

const mapStateToProps = state => ({
	users: state.user.users,
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

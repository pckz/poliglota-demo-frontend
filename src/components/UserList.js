import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from '../actions/userActions';

const UserList = ({ getUsers }) => {
	useEffect(() => {
		getUsers()
	}, [])
	return <h1>Hola</h1>;
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

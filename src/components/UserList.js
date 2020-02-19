import React, {useEffect} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from '../actions/userActions';

const UserList = ({ getUsers, users, loading }) => {
	useEffect(() => {
		getUsers()
	}, [])

	if (loading)
		return (<div className="text-muted">Cargando usuarios</div>)

	if (users.length == 0) 
		return <div className="text-muted">No hay usuarios</div>

	return (
		<div>
			<div className="text-muted mb-2">Usuarios: {users.length}</div>
			{
	          users.map((data)=>(
	            <div className="pt-3" key={data.id} style={{ 'border': '1px solid #eee' }}>
	              <h4 title={data.attributes.email}>#{data.id} {data.attributes.name}</h4>
	              <p>{data.attributes.city}</p>
	            </div>
	          ))
	        }
	    </div>
	)
}

UserList.propTypes = {
	users: PropTypes.array.isRequired,
	getUsers: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
}

const mapDispatchToProps = dispatch => ({
	getUsers: () => dispatch(getUsers())
})

const mapStateToProps = state => ({
	users: state.user.users,
	loading: state.user.loading,
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

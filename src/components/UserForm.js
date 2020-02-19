
import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers, addUser, getLocations } from '../actions/userActions';
import Autosuggest from 'react-autosuggest';

const locations_suggest = []



const UserForm = ({ addUser, getLocations, loading, locations, getUsers, users }) => {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [value, setValue] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	
	useEffect(() => {
		getLocations()
	}, [])



	if (loading){
		getLocations()
		return (<div className="text-muted">Cargando ciudades</div>)
	}
	
	const escapeRegexCharacters = (str) => {
	  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	const getSuggestions = (value) => {
	  const escapedValue = escapeRegexCharacters(value.trim());
	  
	  if (escapedValue === '') {
	    return [];
	  }

	  const regex = new RegExp('^' + escapedValue, 'i');

	  return locations.filter(language => regex.test(language.name));
	}

	const getSuggestionValue = (suggestion) => {
	  return suggestion.name;
	}

	const renderSuggestion = (suggestion) => {
	  return (
	    <span>{suggestion.name}</span>
	  );
	}


	const onSubmit = () => {

		if (name === "" || email === "" ||  value === "") {
			alert('Debes completar todos los datos')
		} else {
			console.log(name)
			console.log(email)
			console.log(value)
			
			addUser({ name, email, city: value });

			// Clean Fields
			setName("");
			setEmail("");
			setValue("");

			// We update current data
			getLocations();
			//getUsers();

		}
	};

	const onChange = (event, { newValue, method }) => {
		setValue(newValue)
	};

	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value))
	};

	const onSuggestionsClearRequested = () => {
		setSuggestions([])
	};

	const inputProps = {
      placeholder: "Escribe 's'",
      value,
      onChange: onChange
    };

	return (
		<div>
			<div className="form-group text-left">
	          <label htmlFor="name">Nombre</label>
	          <input type="text" className="form-control mb-3" id="name" name="name" onChange={e => setName(e.target.value)}/>
	        </div>
	        <div className="form-group text-left">
	          <label htmlFor="name">Email</label>
	          <input type="email" className="form-control mb-3" id="email" name="email" onChange={e => setEmail(e.target.value)}/>
	        </div>
	        <div className="form-group text-left">
	          <label htmlFor="city">Ciudad</label>
	          {/*<input type="text" className="form-control mb-3" id="city" name="city" onChange={e => setCity(e.target.value)}/>*/}
	          <Autosuggest 
		        suggestions={suggestions}
		        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
		        onSuggestionsClearRequested={onSuggestionsClearRequested}
		        getSuggestionValue={getSuggestionValue}
		        renderSuggestion={renderSuggestion}
		        inputProps={inputProps} />
	        </div>
	        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
	    </div>
        )
}

UserForm.propTypes = {
	addUser: PropTypes.func.isRequired,
	getLocations: PropTypes.func.isRequired,
	locations: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	getUsers: PropTypes.func.isRequired,
	users: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => ({
	addUser: data => dispatch(addUser(data)),
	getLocations: () => dispatch(getLocations()),
	getUsers: () => dispatch(getUsers())
})

const mapStateToProps = state => ({
	locations: state.user.locations,
	loading: state.user.loading,
	users: state.user.users,
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';


const App = () => {

  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-md-6 container pt-5">
            <h3 className="text-left">Listado</h3>
            <UserList />
          </div>
          <div className="col-md-6 container pt-5 mt-5">
            <div className="card form-group mt-4">
              <div className="card-body">
                <h3>Formulario</h3>
                <UserForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

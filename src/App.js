import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';

const dataList = [
  {'id': 1, 'name': 'Poliglotón', 'city': 'Santiago'},
  {'id': 2, 'name': 'Carlos', 'city': 'Santiago'},
  {'id': 3, 'name': 'Nicolás', 'city': 'Lima'},
  {'id': 4, 'name': 'José', 'city': 'Ciudad de México'}
];

const App = () => {

  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-md-6 container pt-5">
            <h3 className="text-left">Listado</h3>
            <UserList />
          </div>
          <div className="col-md-6 container pt-5">
            <div className="card form-group">
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

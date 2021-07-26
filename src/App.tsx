import React from 'react';
import './App.css';
import CustomerPage from './pages/CustomerPage/Customer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="listContent">
          <CustomerPage />
        </div>
      </header>
    </div>
  );
}

export default App;

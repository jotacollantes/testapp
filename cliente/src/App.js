// import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
    {/* <h1>CRUD</h1> */}
    
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <div className="container-fluid"> */}
        <div className="container">
          <a className="navbar-brand" href="#">
          <img className="img-fluid" width="50%" height="100"src="https://assets.website-files.com/5d9df710f28632786a98f21a/5dd837010422d34e2b071e31_Digital-Resource-logo.png" alt=""></img>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Add User</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    
    
    
    
    
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ListaUsuarios/>} exact></Route>
    <Route path="/agregarusuario" element={<AgregarUsuario/>} exact></Route>
    <Route path="/editarusuario/:idusuario" element={<EditarUsuario/>} exact></Route>
    </Routes>
    </BrowserRouter>
</div>

  );
}
export default App;

import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Formacion from './pages/Formacion';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';
import Acceder from './pages/Acceder';
function App() {
  return (
    <Router>
      {/* El switch muestra la primera coincidencia con la url que se le especifica */}
      <Switch>
        <Route path="/inicio">
          <Inicio/>
        </Route>
        <Route path="/formacion">
          <Formacion/>
        </Route>
        <Route path="/sobrenosotros">
          <SobreNosotros/>
        </Route>
        <Route path="/contacto">
          <Contacto/>
        </Route>
        <Route path="/acceder">
          <Acceder/>
        </Route>
        <Redirect to="/inicio"/>
      </Switch> 
    </Router>
  );
}

export default App;

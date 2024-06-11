// App.js
import { Routes, Route, NavLink } from 'react-router-dom';
import Index from './routes/Index';
import Python from './routes/Python';
import HTML from './routes/HTML';
import JavaScript from './routes/JavaScript';
import CSS from './routes/CSS';
import Php from './routes/Php';
import Kotlin from './routes/Kotlin';
import Java from './routes/Java';
import Dart from './routes/Dart';
import './styles.css'; // Importa la hoja de estilo

const App = () => {
  return (
    <div className="">
      <nav>
        <NavLink to="/" activeClassName="active"> 🤵🏻 Mi perfil </NavLink>
        <br />
        <br />
        <br />
        <NavLink to="/python" activeClassName="active">👨🏻‍💻 Python</NavLink>
        <NavLink to="/html" activeClassName="active">👨🏻‍💻 HTML</NavLink>
        <NavLink to="/javascript" activeClassName="active">👨🏻‍💻 JavaScript</NavLink>
        <NavLink to="/php" activeClassName="active">👨🏻‍💻 PHP</NavLink>
        <NavLink to="/kotlin" activeClassName="active">👨🏻‍💻 Kotlin</NavLink>
        <NavLink to="/java" activeClassName="active">👨🏻‍💻 Java</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/python" element={<Python />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/php" element={<Php />} />
        <Route path="/kotlin" element={<Kotlin />} />
        <Route path="/java" element={<Java />} />
        <Route path="/dart" element={<Dart />} />
      </Routes>
    </div>
  );
};

export default App;

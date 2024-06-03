import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Regform from '../Register/register';
import './Header.css'
import Info from '../Info/Info';
import Home from '../Home/Home';


function Header(props){
    console.log(props.det);
    function insertform(form) {
        console.log(form);
        props.insertToDb(form)
    }
    function getFormID(id){
      // deleting form in Db
      props.getFormID(id)
    }
return (
  <BrowserRouter>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/registration'>Register</Link></li>
        <li><Link to='/info'>Info</Link></li>
    </ul>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/info' element={<Info det={props.det} getFormID={getFormID}/>}></Route>
        <Route exact path='/registration' element={<Regform  insertform={props.insertform} setforms={insertform}/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default Header;

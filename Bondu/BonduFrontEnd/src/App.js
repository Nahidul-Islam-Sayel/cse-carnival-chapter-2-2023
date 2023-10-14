import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import './App.css';
import AcademyClass from "./Component/AcademyClass/AcademyClass";
import MathBooks from "./Component/Books/MathBooks";
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Book from "./Component/MozarSateSikho/Book";
import MozarSateSikho from './Component/MozarSateSikho/MozarSateSikho.jsx';
import Nevbar from './Component/Nevbar/Nevbar';
import ShohezeShikeBook from "./Component/ShohozeShikhe/ShohezeShikeBook";
import ShohozeShike from "./Component/ShohozeShikhe/ShohozeShike";
import SingUp from "./Component/SingUp/SingUp.jsx"
import LoginSection from "./Component/SingUp/Login";
export const userContext = createContext();
function App() {
  const [login, setLogin] = useState(false);
  return (
    <userContext.Provider
      value={[
        login,
        setLogin
      ]}
    >
    <BrowserRouter>
     <Nevbar/>
    <Routes>
     <Route path="/MozarSateSikho" element={<MozarSateSikho/> }/>
     <Route path="/book" element={<Book/>}/>
     <Route path="/oneMathBook" element={<MathBooks/>}/>
     <Route path="/ShohozeShikhe" element={<ShohozeShike/>}/>
     <Route path="/ShohozeShikheBook" element={<ShohezeShikeBook/>}/>
     <Route path="/AcademyClass" element={<AcademyClass/> }/>
     <Route path="/Login" element={<LoginSection/> }/>
     <Route path="/SingUp" element={<SingUp/> }/>
    <Route path="/" element={<Home />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;

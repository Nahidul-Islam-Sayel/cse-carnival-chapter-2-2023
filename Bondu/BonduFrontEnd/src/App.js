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
import StudentsProfile from "./Component/StudentsProfile/StudentsProfile";
import Payment from "./Component/Payment/Payment";
import BanglaBook from "./Component/Books/BanglaBook";
import BanglaClass from "./Component/AcademyClass/BanglaClass";
import Quiz2 from "./Component/Quiz/Quiz2";
import Game from "./Component/Game/Game";
import Quiz from "./Component/Quiz/Quiz2";
import MathQuiz from "./Component/Quiz/Quiz1";
import Support from "./Component/Support/Support";
export const userContext = createContext();
function App() {
  const [login, setLogin] = useState(false);
  const[payment,setPayment]=useState(false)
  return (
    <userContext.Provider
      value={[
        login,
        setLogin,
        payment,setPayment
      ]}
    >
    <BrowserRouter>
     <Nevbar/>
    <Routes>
     <Route path="/MozarSateSikho" element={<MozarSateSikho/> }/>
     <Route path="/book" element={<Book/>}/>
     <Route path="/Quiz" element={<Game/>}/>
     <Route path="/BanglaQuiz" element={<Quiz/>}/>
     <Route path="/MathQuiz" element={<MathQuiz/>}/>
     <Route path="/oneMathBook" element={<MathBooks/>}/>
     <Route path="/oneBanglaBook" element={<BanglaBook/>}/>
     <Route path="/ShohozeShikhe" element={<ShohozeShike/>}/>
     <Route path="/ShohozeShikheBook" element={<ShohezeShikeBook/>}/>
     <Route path="/AcademyClass" element={<AcademyClass/> }/>
     <Route path="/BanglaClass" element={<BanglaClass/> }/>
   
     <Route path="/Login" element={<LoginSection/> }/>
     <Route path="/SingUp" element={<SingUp/> }/>
     <Route path="/Payment" element={<Payment/> }/>
     <Route path="/StudentsProfile" element={<StudentsProfile/> }/>
     <Route path="/Support" element={<Support/> }/>
         <Route path="/" element={<Home />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;

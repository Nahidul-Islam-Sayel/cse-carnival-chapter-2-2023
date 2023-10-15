
import siubd from '../Image/Bondu.jpg';

import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import './SingUp.css'
const LoginSection = () => {  
    const [login, setLogin,payment,setPayment] = useContext(userContext);
 
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);
    const[loninStudnets,setLoginStudents]= useState(true);
    const[loginAdmin,setloginAdmin]= useState(false);
    const [newStudent, setNewStudent] = useState({
        username: "",
        password_1: ""
    });
    const[studentsPro,setstudentsPro]=useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
      
        setNewStudent({
            ...newStudent,
            [name]: value,
        })
    }
    const userSubmit = (e) => {
        e.preventDefault();
        const { username, password_1 } = newStudent;

        if (username && password_1) {
            axios.post('http://localhost:5000/StudentsHanler/login', newStudent)
                .then(res => {
                    if (res.data.error) {

                        setVisibleR(true);


                    }
                    else {
                        sessionStorage.setItem('StudentsName', username);
                        sessionStorage.setItem('StudentLogin', true);
                        sessionStorage.setItem('Token', res.data.access_token);

                        setstudentsPro(true)

                      
                        setVisible(true);

                    }
                });
        }

    }
    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(() => {
                setVisible(false);
            }, 1000);

            return () => clearTimeout(timeout);
        }

    }, [visible]);
    useEffect(() => {
        if (visibleR) {
            const timeout = setTimeout(() => {
                setVisibleR(false);

            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [visibleR]);
    let navigate = useNavigate();
    useEffect(() => {

        setTimeout(() => {
            studentsPro && navigate("/StudentsProfile", { replace: true });
            studentsPro && setLogin(true);

        }, 1500);
    }, [studentsPro, navigate])
    return (
       
        <div class="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
             <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? '' : 'hidden'
                    }`}
            >
                <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Login Successful


                </div>
            </div>
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleR ? '' : 'hidden'
                    }`}
            >
                <div className="max-w-xl w-full bg-red-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Someing Is Wrong Please Try Again


                </div>
            </div>
            <div
                class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
            >
                <div
                    class="p-4 py-6   flex items-center justify-center text-white bg-sky-600 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                >
                    

                    <img src={siubd} className='h-30 w-60' alt="" srcset=""  />

                </div>
      {loninStudnets && <div class="p-5 bg-white md:flex-1">
                    <h3 class="my-4 text-2xl font-semibold text-gray-700">Students Login</h3>
                    <form action="#" class="flex flex-col space-y-5">
                        <div class="flex flex-col space-y-1">
                            <label for="email" class="text-sm font-semibold text-gray-500">User Name</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                autofocus
                                value={newStudent.username}
                                onChange={handleChange}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <div class="flex items-center justify-between">
                                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                                <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                id="password_1"
                                name="password_1"
                                value={newStudent.password_1}
                                onChange={handleChange}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-sky-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                onClick={userSubmit}
                            >
                                Log in
                            </button>
                        </div>
                        <div class="flex flex-col space-y-5">
                            <span class="flex items-center justify-center space-x-2">
                                <span class="h-px bg-gray-400 w-14"></span>
                                <span class="font-normal text-gray-500">or login as a</span>
                                <span class="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div class="flex flex-col space-y-4">
                           
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    onClick=""
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white"   onClick={() => {
                                           setLoginStudents(false)
                                           setloginAdmin(true)
                                        }}>login as a admin</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>}
                {loginAdmin && <div class="p-5 bg-white md:flex-1">
                    <h3 class="my-4 text-2xl font-semibold text-gray-700">Admin Login</h3>
                    <form action="#" class="flex flex-col space-y-5">
                        <div class="flex flex-col space-y-1">
                            <label for="email" class="text-sm font-semibold text-gray-500">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autofocus
                                value=""
                                onChange=""
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <div class="flex items-center justify-between">
                                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                                <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value=""
                                onChange=""
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-sky-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                onClick=""
                            >
                                Log in
                            </button>
                        </div>
                        <div class="flex flex-col space-y-5">
                            <span class="flex items-center justify-center space-x-2">
                                <span class="h-px bg-gray-400 w-14"></span>
                                <span class="font-normal text-gray-500">or login as a</span>
                                <span class="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div class="flex flex-col space-y-4">
                           
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    onClick=""
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white"   onClick={() => {
                                           setLoginStudents(true)
                                           setloginAdmin(false)
                                        }}>login as a students</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>}
</div>
</div>
    );
};


export default LoginSection;
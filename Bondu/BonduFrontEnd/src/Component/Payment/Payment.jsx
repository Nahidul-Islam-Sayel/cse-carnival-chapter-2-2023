
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import axios from 'axios';
const Payment = () => {
    const [login, setLogin,payment,setPayment] = useContext(userContext);
    const[studentsPro,setstudentsPro]=useState(false)
    const[userr,setUserProfiler]= useState([])
    useEffect(() => {
        const username = sessionStorage.getItem('StudentsName');
        fetch(`http://localhost:5000/StudentsHanler/Profile?username=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res => setUserProfiler(res))
    }, []);
    const [loginpage, setLoginpage] = useState(false);
    const [user, setUser] = useState(true);
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);
    const [newUser, setNewUser] = useState({
      name: sessionStorage.getItem('StudentsName'),
      method:"",
      taka:""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });

    };
    const userSubmit = (e) => {
        e.preventDefault();
        const {
            
      method,
      taka
        } = newUser;
console.log(method,taka)
        if (
           method , taka
        ) {
            axios
                .post(
                    "http://localhost:5000/StudentsHanler/Payment",
                    newUser,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                        },
                    }
                )
                .then((res) => {
                    if (res.data.message === "Signup was successful!") {
                        setVisible(true);
                        window.location.reload();
                        setstudentsPro(true)
                    
                 
                    } else {

                        setVisibleR(true);
                    }
                });
        } else setVisibleR(true);
       
    };
    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(() => {
                setVisible(false);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [visible]);
    let navigate = useNavigate();
    useEffect(() => {

        setTimeout(() => {
            studentsPro && navigate("/StudentsProfile", { replace: true });
           

        }, 1500);
    }, [studentsPro, navigate])
    useEffect(() => {
        if (visibleR) {
            const timeout = setTimeout(() => {
                setVisibleR(false);

            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [visibleR]);
    return (
        <div class="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
        <div
          className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? "" : "hidden"
              }`}
      >
          <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
              Payment Successful
          </div>
      </div>
      <div
          className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleR ? "" : "hidden"
              }`}
      >
          <div className="max-w-xl w-full bg-red-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
              Someing Is Wrong Please Try Again
          </div>
      </div>
    <div class=" overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
    <div class="p-5 bg-white md:flex-1">
                      <h3 class="my-4 text-2xl font-semibold text-gray-700">
                         Payment  Only 150 Taka
                      </h3>
                      <form action="#" class="flex flex-col space-y-5" method="POST">
                      <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Payment method
                                    </label>

                                    <select
                                        type="text"
                                        name="method"
                                        placeholder="Current Semister"
                                        value={newUser.method}
                                        onChange={handleChange}

                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    >
                                        <option value=""></option>
                                        <option value="Bikash">Bikash</option>
                                        <option value="Nogod">Nogod</option>
                                        <option value="Rocket">Rocket</option>
                                       
                                    </select>
                                </div>
                
                      

                         
            
                          <div class="flex flex-col space-y-1">
                              <label
                                  for="email"
                                  class="text-sm font-semibold text-gray-500"
                              >
                                 Taka
                              </label>
                              <select
                                        type="number"
                                        name="taka"
                                        placeholder="taka"
                                        value={newUser.taka}
                                        onChange={handleChange}

                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    >
                                        <option value=""></option>
                                   
                                        <option value="150">150</option>
                                      
                                       
                                    </select>
                          </div>
                          <div>
                              <button
                                  type="submit"
                                  class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-sky-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                  onClick={userSubmit}
                              >
                                 Payment
                              </button>
                          </div>
                         
                      </form>
                  </div>
    </div>
  </div>
    );
};

export default Payment;
import React, { useEffect, useState } from "react";
import PieChart from 'react-pie-graph-chart'
import { Line } from 'rc-progress';
import dp from '../Image/Students.jpeg'
const StudentsProfile = () => {
    const[user,setUserProfile]= useState([])
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
            .then(res => setUserProfile(res))
    }, []);
    return (
        <div className="container mt-5 mb-10">

        <div className="row">

           <div class="col-md-4 mb-3 xyz">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex flex-column align-items-center text-center">
                            <img src={dp} alt="Admin" class="rounded-circle" width="100" />
                            <div class="mt-3">
                                <h4 className='text-2xl font-serif'>{user.length>0 && user[0].name}</h4>
                                <h4 className='text-xl font-serif'>Stuents</h4>
                                <h4 className='text-xl font-serif'>{user.length>0&& user[0].email}</h4>
                                <p class="text-3xl font-serif"></p>
                            </div>
                        </div>
                    </div>
                </div>

              

            </div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card text-white bg-info" >
                            <div class="card-header">Progress Bar</div>
                            <div class="card-body">
                                <h5 class="card-title">{ }</h5>
                                <p class="card-text"><img src="https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_960_720.png" alt="" /></p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card text-white  bg-secondary" >
                            <div class="card-header">Performamce</div>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text"><img src="https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_960_720.png" alt="" /></p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className="col-md-7">
                        <h5>This weak</h5>
                        <Line percent="" strokeWidth={2} strokeColor="#E97D30" />
                        <h5>Month</h5>
                        <Line percent="" strokeWidth={2} strokeColor="#62B170" />

                    </div>
                    <div className="col-md-5">
                        <PieChart data={[
                            {
                                type: "performance",
                                value: 10,
                                color: "#E97D30"
                            },
                            {
                                type: "progress",
                                value: 10,
                                color: "#62B170"
                            }
                        ]} />
                    </div>
                </div>



            </div>
        </div>
      
    </div>
    );
};

export default StudentsProfile;
import React from 'react';
import { NavLink } from "react-router-dom";
import className from '../Data/classInfo';
import './MozarSatheSikho.css';
const MozarSateSikho = () => {


    return (
        <div className="mozarsatesikho">
            <div className="container">

                <br /> <br /> <br />

                <h1> <span className="mozar">Mojar </span>
                    <span className='sate'>Sate </span>  <span className='shikbo'>
                        Sikho</span>   <br />  for students of class 1st to 12th !</h1>
                <p>We Are Stand With You</p>
                <div className="row">
                    {className.map(data => <div className="col-md-4  classcard">
                        <div class="card" >
                            <img class="card-img-top" src={data.Picture} />
                            <div class="card-body">
                                <h5 class="card-title">{data.className}</h5>
                                <h6 class="card-text">{data.Dea}</h6>
                                <NavLink to="/book" exact className="nav-link">
                                    <a href="#" class="btn btn-primary">Read Book</a> </NavLink>
                            </div>
                        </div>
                    </div>)}


                </div>
            </div>
            <br /> <br /> <br />
        </div>
    );
};

export default MozarSateSikho;
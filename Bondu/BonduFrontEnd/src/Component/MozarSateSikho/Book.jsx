import React, { useContext, useState , useEffect} from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { userContext } from '../../App';
import bangla from '../Image/Bangla.jpg';
import eng from '../Image/Englist.jpg';
import math from '../Image/Math.jpg';
import './Book.css';
const Book = () => {
    const[profile,setProfile]=useState([]);
    useEffect(() => {
        const username = sessionStorage.getItem('StudentsName');
        fetch(`http://localhost:5000/StudentsHanler/PaymentShow?username=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res =>setProfile(res) )
    }, []);
    const [login, setLogin, payment,setPayment] = useContext(userContext);
    console.log(payment)
    return (
        <div className='bookbg'>
            <div className="container">
                <br /><br /><br />
                <h2> <span className='mozar text-4xl'>Academic</span>

                    <span className='sate text-4xl'> books</span>  <BsFillArrowRightCircleFill className='shikbo' /></h2>
                <div className="row">
                    <div className="col-md-4 cd">
                        <div class="card">
                            <img class="card-img-top" src={math} alt="Card image cap" />
                            <div class="card-body">
                                <NavLink to="/oneMathBook" exact > <a href="#" class="btn btn-primary">Read Now</a></NavLink>
                          <span className='ml-10'> বিনামূল্যে</span> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 cd">
    <div className="card">
        <img className="card-img-top" src={bangla} alt="Card image cap" />
        <div className="card-body">
            {((login === true || sessionStorage.getItem('StudentsName')) && profile.length===0) ? (
                <>
                 <Link to="/Payment"><a href="#" className="btn btn-primary">Read Now</a></Link>   
                    <span className="ml-10">প্রিমিয়াম</span>
                </>
            ) : ((login === true || sessionStorage.getItem('StudentsName')) && (payment===true || profile.length>0)) ? (
              <><Link to="/oneBanglaBook"><a href="#" className="btn btn-primary">Read Now</a></Link> </> 
            ) : (
                <>
                    <Link to="/Login">
                        <a href="#" className="btn btn-primary">Please Log In</a>
                    </Link>
                    <span className="ml-10">প্রিমিয়াম</span>
                </>
            )}
        </div>
    </div>
</div>

                    <div className="col-md-4 cd">
                        <div class="card">
                            <img class="card-img-top" src={eng} alt="Card image cap" />
                            <div className="card-body">
            {((login === true || sessionStorage.getItem('StudentsName')) && profile.length===0) ? (
                <>
                    <a href="#" className="btn btn-primary">Read Now</a>
                    <span className="ml-10">প্রিমিয়াম</span>
                </>
            ) : ((login === true || sessionStorage.getItem('StudentsName')) && (payment===true || profile.length>0)) ? (
                <a href="#" className="btn btn-primary">Read Now</a>
            ) : (
                <>
                    <Link to="/Login">
                        <a href="#" className="btn btn-primary">Please Log In</a>
                    </Link>
                    <span className="ml-10">প্রিমিয়াম</span>
                </>
            )}
        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Book;
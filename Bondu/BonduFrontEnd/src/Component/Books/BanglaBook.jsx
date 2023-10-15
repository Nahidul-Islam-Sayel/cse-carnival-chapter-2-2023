import React from 'react';
import './MathBooks.css'
import Ban1 from '../Image/Ban1.jpeg'
import Ban2 from '../Image/Ban2.jpeg'
import Ban3 from '../Image/Ban3.jpeg'
const BanglaBook = () => {
    return (
        <div class="card">
        <div class="card-body mathbook">
            <h1 className='blod text-center text-4xl font-blod'>বাংলা বর্নমালা</h1>
          <img src={Ban1} className='bookimg1'  alt="" srcset="" />
          <img src={Ban2} className='bookimg1'  alt="" srcset="" />
          <img src={Ban3}className='bookimg1'  alt="" srcset="" />
        </div>
        </div>
    );
};

export default BanglaBook;
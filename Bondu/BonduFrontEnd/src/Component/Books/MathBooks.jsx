import React from 'react';
import num1 from '../Image/number1.jpeg';
import num2 from '../Image/number2.jpeg';
import num3 from '../Image/number3.jpeg';
import add from '../Image/number5.jpeg';
import { default as sub1, default as sub2, default as sub3 } from '../Image/sub1.jpeg';
import './MathBooks.css';
const MathBooks = () => {
    return (
        <div>
            <div class="card">
                <div class="card-body mathbook">
                    <h1 className='blod'>সংখ্যা নিয়ে খেলি</h1>
                    <p><span className="blod">যোগ </span>
                        দুইটি সংখা একসাথেযুক্ত করাকে আমার যোগ বলি। ধর তোমরা দুইজন বন্ধু এক জায়গাতে বেড়াতে
                        গেলে এখন আছো তোমরা দুইজন এখানে আরেকজন বন্ধু এসে উপস্থিত হলে হয়ে যাবে তিনজন <br /> <br />
                        <img src={add} alt="" className='bookimg' /> <br /> <br />
                        <img src={num1} alt="" srcset="" className='bookimg' /> <br /> <br />
                        এখনো যদি আমরা  কিছু ফুল বৃদ্ধি করি তাহলে কি হবে একটু যদি দেখি <br /> <br />
                        <img src={num2} alt="" srcset="" className='bookimg' /> <br /> <br />
                        <img src={num3} alt="" className='bookimg' /><br /> <br />
                        <span className="blod">বিয়োগ </span> এখনো ধর একজন বন্ধু চলে গে তাহলে একজন কমে যাবে এটাকে বিয়োগ বলে
                        <img src={sub1} alt="" className='bookimg' /><br /> <br />
                        <img src={sub2} alt="" className='bookimg' /><br /> <br />
                        <img src={sub3} alt="" className='bookimg' /><br /> <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MathBooks;
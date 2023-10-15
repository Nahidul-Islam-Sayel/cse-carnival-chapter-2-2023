import React, { useState } from 'react';
import './AcademyClass.css';
const BanglaClass = () => {
    const [changemanu, setChangeManu] = useState("one");
    return (
        <div className='container academyBg'>
    <br /> <br /> <br />
    <div className="row">
        <div className="col-md-8">
            {changemanu === 'one' && <iframe src="https://www.youtube.com/embed/h6cSa-iR_Xw?si=Wc42V5IW4uw4UZO2"></iframe>}
            {changemanu === 'two' && <iframe src="https://www.youtube.com/embed/IJfWQ9jtg1k?si=kkQt5kB69i2uSua1"></iframe>}
            {changemanu === 'three' && <iframe src="https://www.youtube.com/embed/9BayKCtGHSY"></iframe>}
        </div>
        <div className="col-md-4">
            <div className="card academycard">
                <div className="card-body" onClick={() => setChangeManu('one')}>
                    বাংলা স্বরবর্ণ
                </div>
            </div>
            <div className="card academycard">
                <div className="card-body" onClick={() => setChangeManu('two')}>
                    বাংলা ব্যঞ্জনবর্ণ
                </div>
            </div>
            <div className="card academycard">
                <div className="card-body" onClick={() => setChangeManu('three')}>
                    বাংলা ছড়া
                </div>
            </div>
        </div>
    </div>
    <br /> <br /> <br /> <br />
</div>
    );
};

export default BanglaClass;
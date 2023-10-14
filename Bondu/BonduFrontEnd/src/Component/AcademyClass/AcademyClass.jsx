import React, { useState } from 'react';
import './AcademyClass.css';
const AcademyClass = () => {
    const [changemanu, setChangeManu] = useState("one");
    return (
        <div className='container academyBg'>
            <br /> <br /> <br />
            <div className="row">
                <div className="col-md-8">
                    {changemanu === 'one' && <iframe src="https://youtube.com/embed/s8zj-NBX84k">  </iframe>
                    }
                    {changemanu === 'two' && <iframe src="https://youtube.com/embed/ttogyYM_5aw">
                    </iframe>}
                    {changemanu === 'three' && <iframe src="https://youtube.com/embed/GD8-hYAukt0">
                    </iframe>}
                </div>
                <div className="col-md-4">
                    <div class="card academycard">
                        <div class="card-body" onClick={() => setChangeManu('one')}>
                            সংখ্যা নিয়ে খেলি
                        </div>

                    </div>
                    <div class="card academycard">
                        <div class="card-body" onClick={() => setChangeManu('two')}>
                            যোগ করি
                        </div>

                    </div>
                    <div class="card academycard">
                        <div class="card-body" onClick={() => setChangeManu('three')}>
                            বিয়োগ করি
                        </div>

                    </div>
                    <div class="card academycard">
                        <div class="card-body">
                            গুন করি
                        </div>

                    </div>
                    <div class="card academycard">
                        <div class="card-body">
                            ভাগ করি
                        </div>

                    </div>
                </div>
            </div>

            <br /> <br /> <br /> <br />
        </div>
    );
};

export default AcademyClass;
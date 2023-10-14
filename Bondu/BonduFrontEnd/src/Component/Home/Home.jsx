import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
    BsFacebook, BsLinkedin
} from "react-icons/bs";
import {
    FcAssistant,
    FcDocument, FcKindle, FcManager, FcPuzzle,
    FcReading,
    FcReadingEbook, FcReddit, FcViewDetails
} from "react-icons/fc";
import {
    FiMail
} from "react-icons/fi";
import rajibsir from '../Image/Abdullah Rajib SIr.jpeg';
import Asifsir from '../Image/Asif Sir.jpeg';
import cources from '../Image/Cources 1.jpg';
import jahangirsir from '../Image/Jahangir Sir.jpeg';
import rajsee from '../Image/Rajosree Sir.jpeg';
import bg2 from '../Image/background 2.jpg';
import bg1 from '../Image/background1.jpg';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Carousel fade >
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={bg1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="carouselCaption">Perfect Learned <br /> For Your Child</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={bg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="carouselCaption">Learn With Fun <br /> And Enjoy Every Moment</h1>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="row ml-10 mr-10">
                <div className="col-md-3 box1">
                    <div className="deatext">
                        <div className="circle"> <FcKindle className='icon ml-3' /></div>
                        <h5>Special Education</h5>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </p>
                    </div>
                </div>
                <div className="col-md-3 box2">
                    <div className="deatext">
                        <div className="circle"> <FcViewDetails className='icon ml-3' /></div>
                        <h5>Book & Library</h5>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </p>
                    </div>
                </div>
                <div className="col-md-3 box3">
                    <div className="deatext">
                        <div className="circle"> <FcDocument className='icon ml-3' /></div>
                        <h5>Certification</h5>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </p>
                    </div>
                </div>
                <div className="col-md-3 box4">
                    <div className="deatext">
                        <div className="circle"> <FcManager className='icon ml-3' /></div>
                        <h5>Certified Teachers</h5>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container offer mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <h2>What We Offer</h2>
                        <p className="mt-3">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word</p>

                        <div className="row">
                            <div className="col-md-6">
                            <div class="circle11 ">< FcReadingEbook className='icon ml-3' /></div>
                                <h4>Mozar Sate Shiko</h4>
                                <p>Our website has a module named Mozar Sate Shiko. Which is completely different from normal
                                    books. Here students can learn fun we will specially design the book. Here we are teaching students
                                    every topic of their book through funny stories, images, animation</p>
                            </div>
                            <div className="col-md-6">
                                <div className="circle11 ml-3"> <FcPuzzle className='icon ml-3' /></div>
                                <h4>Khelbo Ebong Shikhbo</h4>
                                <p>Khelbo Ebong Shikhbo is an educational enjoyable game like a quiz, puzzle, or mind game.
                                    Students can check their improvement on every topic. The result will show in ranking. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="circle11 text-center "> <FcReddit className='icon ml-3' /></div>
                                <h4>Ami sera</h4>
                                <p>We will make a contest name Ami sera every month here students will play some educational game
                                    and we will give 10 ten students the special gift
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="circle11"> <FcReading className='icon ml-3' /></div>
                                <h4>Sohoze Sikhi</h4>
                                <p>We will provide students a course name sohoze Sikhi. here we take some live classes with
                                    animation to teach every topic
                                </p>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-6">
                                <div className="circle11"> <FcManager className='icon ml-3' /></div>
                                <h4>Certified Teachers</h4>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                            </div>
                            <div className="col-md-6">
                                <div className="circle11"> <FcAssistant className='icon ml-3' /></div>
                                <h4>24/7 Support</h4>
                                <p>“Chat”-Students can share their problems and unclear topic with instructor through the chat.</p>
                            </div>
                        </div>
                    </div>
                    . <div className="col-md-4 secondpart">
                        <h2>Welcome to <span className='bondu'>Bondu</span>  Learning School</h2>
                        <h5>Learn With Fun</h5>
                        <p>Education opens the door of opportunities for an individual to choose. In today’s world is all at hand. And
                            Education is very important in the competitive age. Every technology are updating with time also people.
                            Education encourages your passion and help to creation. Every country has their education system which
                            is not easy for everyone. Every student of the class is not equal. Many of them could not understand the
                            class also afraid to ask question. Also there is a huge gap between teachers and students .For that students
                            suffer from high rate of stress. They lose their focus on study. As a result, fear of education is created in
                            student’s mind. According to student report there is no effective platforms that make education easy for
                            students. And the other fact is that, students are studying just to pass the exam. They don’t cross the barrier
                            of the text book which is not inspire them to explore and think innovative. World is growing up with latest
                            technology where education system is still in its traditional method in Bangladesh. Which has a huge impact
                            on social development in Bangladesh.</p>
                    </div>
                </div>
            </div>
            <div className="bg-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <br /><br /> <br /> <br /> <br />
                            <h2>Teaching Our Child Some Good Manners</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora quibusdam accusantium veritatis dignissimos nam ratione labore praesentium consequatur ex.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title mt-5">
            <h1 className='text-4xl'> <span className='part1'>Certified </span> <span className='part2'> Teachers</span></h1>
                <p>We have high skills and high quality teachers.So A student learn easily with us </p>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div class="card teachers">
                                <img src={rajsee} class="card-img-top" alt="..." />
                                <div class="card-body teacherinfo">
                                    <h5>Mr. Rajarshi Roy Chowdhury</h5>
                                    <p>Senior Lecturer</p>

                                </div>
                                <div className="row social mb-5">
                                    <div className="col-md-4">
                                        <BsFacebook className='icon11 ml-3' />
                                    </div>
                                    <div className="col-md-4">
                                        <BsLinkedin className='icon11 ml-3' />
                                    </div>
                                    <div className="col-md-4">
                                        <FiMail className='icon11 ml-3' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card teachers">
                                <img src={Asifsir} class="card-img-top" alt="..." />
                                <div class="card-body teacherinfo">
                                    <h5>Mr.Abdullah Rajib</h5>
                                    <p>Lecturer</p>

                                </div>
                                <div className="row social mb-5">
                                    <div className="col-md-4">
                                        <BsFacebook className='icon11 ml-3' />
                                    </div>
                                    <div className="col-md-4">
                                        <BsLinkedin className='icon11 ml-3' />
                                    </div>
                                    <div className="col-md-4">
                                        <FiMail className='icon11 ml-3' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card teachers">
                                <img src={jahangirsir} class="card-img-top" alt="..." />
                                <div class="card-body teacherinfo">
                                    <h5>Md. Umor Faruk Jahangir</h5>
                                    <p>Lecturer</p>

                                </div>
                                <div className="row social mb-5">
                                    <div className="col-md-4">
                                        <BsFacebook className='icon11 ml-3' />
                                    </div>
                                    <div className="col-md-4">
                                        <BsLinkedin className='icon11 ml-3' />
                                    </div>
                                    <div className="col-md-4">
                                        <FiMail className='icon11 ml-3' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card teachers">
                                <img src={rajibsir} class="card-img-top" alt="..." />
                                <div class="card-body teacherinfo ">
                                    <h5>M.A.G. Asif</h5>
                                    <p>Head & Assistant Professo</p>

                                </div>
                                <div className="row social mb-5">
                                    <div className="col-md-4">
                                        <BsFacebook className='icon11 ml-3' />
                                    </div>
                                    <div className="col-md-4">
                                        <BsLinkedin className='icon11 ml-3' />
                                    </div>
                                    <div className="col-md-4">
                                        <FiMail className='icon11 ml-3' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title mt-5 text-left ">
                <h1 className='text-4xl'> <span className='part1'>Our </span> <span className='part2'>Courses</span></h1>
                <p>Learn With us easily. We help you learn evryting with fun and enjoy.</p>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={cources} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8 text-center">
                                        <div class="card-body">
                                            <h5 class="card-title">Academy Courses</h5>
                                            <p class="">We help class 1 to class 12 students to understand there academy courses </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={cources} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8 text-center">
                                        <div class="card-body">
                                            <h5 class="card-title">Computer Courses</h5>
                                            <p class="card-text">anyone can learn basic computer and graphics design and software development </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br /><br /><br />
            <div className="contract container mt-5">
                <div className="row">
                    <div className="col-md-6 contractimg">

                    </div>
                    <div className="col-md-6 contractform">
                        <h3>Request A Quote</h3>
                        <form class="contact-form row">
                            <div class="form-field col-lg-6">
                                <input id="name" class="input-text js-input" type="text" required />
                                <label class="label" for="name">Name</label>
                            </div>
                            <div class="form-field col-lg-6 ">
                                <input id="email" class="input-text js-input" type="email" required />
                                <label class="label" for="email">E-mail</label>
                            </div>
                            <div class="form-field col-lg-6 ">
                                <input id="company" class="input-text js-input" type="text" required />
                                <label class="label" for="company">Intitution Name</label>
                            </div>
                            <div class="form-field col-lg-6 ">
                                <input id="phone" class="input-text js-input" type="text" required />
                                <label class="label" for="phone">Contact Number</label>
                            </div>
                            <div class="form-field col-lg-12">
                                <input id="message" class="input-text js-input" type="text" required />
                                <label class="label" for="message">Message</label>
                            </div>
                            <div class="form-field col-lg-12">
                                <input class="submit-btn" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br /> <br /> <br />
            <div className="row mt-5 ml-10 mr-10">
                <div className="col-md-3 img1"></div>
                <div className="col-md-3 img2"></div>
                <div className="col-md-3 img3"></div>
                <div className="col-md-3 img4"></div>
            </div>
        </div>

    );
};
export default Home;
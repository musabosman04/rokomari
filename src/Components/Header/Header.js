import React from 'react';
import './Header.css';
import '../css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav';
const Header = () => {
    return (
        <div>
            <div className="first-header container">
                <div className="row">
                    <div className="logo col-md-2">
                        <a href="/home">
                            <img src="https://blog.rokomari.com/wp-content/uploads/2019/11/Rokomari-blog-Logo.png" alt="" />
                        </a>
                    </div>
                    <div className="search col-md-5">
                        <input type="text" placeholder="খুজুন..." /><button><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                    <div className=" button-area col-md-5">
                        <a href="https://www.rokomari.com/" target="blenk" className="btn">ববই কিনুন</a>
                        <button className="btn btn-warning mr-4 ">ব্লগ লিখুন</button>
                        <button className="btn btn-warning ">সাবস্ক্রাইব করুন</button>
                    </div>
                </div>
            </div>
            <div className="secount-header ">
                <Navbar bg="light" expand="lg">
                    <div className="container">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className="nav" href="/home">প্রথম পাতা</Nav.Link>
                                <Nav.Link className="nav" href="/potkast">পডকাস্ট</Nav.Link>
                                <Nav.Link className="nav" href="/islam">ইসলাম</Nav.Link>
                                <Nav.Link className="nav" href="/history">ইতিহাস</Nav.Link>
                                <Nav.Link className="nav" href="/blogbook">বইব্লগ</Nav.Link>
                                <Nav.Link className="nav" href="/literature">সাহিত্য</Nav.Link>
                                <Nav.Link className="nav" href="/economy">অর্থনীতি</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;
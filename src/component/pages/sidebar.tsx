import './dashboard.css';
import logoone from '../assets/img/product x1-2.png';
import avaterone from '../assets/img/download.png';
import { FaSearch } from "react-icons/fa";
import { Col, FormGroup, Input, InputGroup, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBoxOpen, faChartLine, faChartPie, faChartSimple, faChevronDown, faDollarSign, faGear, faMailBulk, faMoneyBillWave, faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { callApi } from "../../utils/api";


export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleOpenon() {
        setIsOpen(!isOpen);
        console.log(0);
    }
    return (
        <><div>

            <nav>
                <ul>

                    <li>
                        <img style={{
                            width: "125px",
                            height: "105px"
                        }} src={logoone} />
                    </li>
                    <li>
                        <FormGroup>

                            <InputGroup >
                                <div>
                                    <FaSearch style={{ marginLeft: "180px", cursor: 'pointer' }} />
                                    <Input type="text" placeholder="Search order history" style={{ marginTop: "-27px", marginLeft: "12px" }} />
                                </div>
                            </InputGroup>

                        </FormGroup>
                    </li>
                    <li>
                        <a href="/dashboard">
                            <span className="icon">   <FontAwesomeIcon icon={faChartLine} /></span>
                            <span className="title">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">  <FontAwesomeIcon icon={faDollarSign} /></span>
                            <span className="title">Carrier Funds</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">   <FontAwesomeIcon icon={faMoneyBillWave} /></span>
                            <span className="title">Shipping</span>
                        </a>
                    </li>
                    <li>
                        <a href="/supplies">
                            <span className="icon">  <FontAwesomeIcon icon={faMailBulk} /></span>
                            <span className="title">Supplies</span>
                        </a>
                    </li>
                    <li>
                        <a href="/tracking">
                            <span className="icon"> <FontAwesomeIcon icon={faShippingFast} /></span>
                            <span className="title">Tracking</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"> <FontAwesomeIcon icon={faBoxOpen} /></span>
                            <span className="title">Products</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">  <FontAwesomeIcon icon={faChartSimple} /></span>
                            <span className="title">Marketing</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">  <FontAwesomeIcon icon={faChartPie} /></span>
                            <span className="title">Reports</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><FontAwesomeIcon icon={faGear} /></span>
                            <span className="title">Settings</span>
                        </a>
                    </li>
                    <footer>
                        <Row className="rowone" style={{ marginTop: "40px" }}>
                            <Col xs={4} md={4}>
                                <div className="avatar-card">
                                </div>
                            </Col>
                            <Col xs={6} md={6}  >
                                <div className="profile-card" >
                                    <div style={{ display: "flex" }} >
                                        <h5 onClick={toggleOpenon}>yourname</h5>
                                        <div onClick={toggleOpenon}>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                        <div style={{ paddingLeft: "15px" }}>
                                            <FontAwesomeIcon icon={faBell} />
                                        </div>
                                    </div>
                                    {isOpen && (
                                        <div className="profile-card-content">
                                            <div><label> <a href="/profile"> Profile </a></label></div>
                                            <div><label> Referal program</label></div>
                                            <div><label> <a href="/"> Logout</a></label></div>
                                        </div>
                                    )}
                                </div>

                            </Col>
                            <Col xs={2} md={2}>

                            </Col>
                        </Row>
                    </footer>
                </ul>
            </nav>
        </div>
        </>
    )
}
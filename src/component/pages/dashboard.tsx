import './dashboard.css';
import logoone from '../assets/img/product x1-2.png';
import avaterone from '../assets/img/download.png';
import { FaSearch } from "react-icons/fa";
import { Col, FormGroup, Input, InputGroup, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBoxOpen, faChartLine, faChartPie, faChartSimple, faChevronDown, faDollarSign, faGear, faMoneyBillWave, faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from './sidebar';



export default function Dashboard(Props: any) {

    // const [isOpen, setIsOpen] = useState(false);

    // function toggleOpenon() {
    //     setIsOpen(!isOpen);
    //     console.log(0);
    // }

    // const { avatar } = Props;

    // if (!avaterone) {
    //     return <div>No avatar selected</div>;
    // }

    return (
        <>
        <main>
        <Sidebar />
        {/* <div>

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

                            <InputGroup className="input-group">
                                <div>
                                    <FaSearch style={{ marginLeft: "180px", cursor: 'pointer' }} />
                                    <Input type="text" placeholder="Search order history" style={{ marginTop: "-27px", marginLeft: "12px" }} />
                                </div>
                            </InputGroup>

                        </FormGroup>
                    </li>
                    <li>
                        <a href="#">
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
                        <a href="#">
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
                            <span className="title">Setting</span>
                        </a>
                    </li>
                    <footer>
                        <Row className="rowone" style={{ marginTop: "40px" }}>
                            <Col xs={4} md={4}>
                                <div className="avatar-card">

                                </div>

                            </Col>
                            <Col xs={6} md={6}>

                                <div className="profile-card" onClick={toggleOpenon}>
                                    <div className="profile-card-header" style={{ marginLeft: "-70px" }}>
                                        <h5 onClick={toggleOpenon}>yourname
                                            <FontAwesomeIcon icon={faChevronDown} /></h5>
                                      
                                    </div>
                                    {isOpen && (
                                        <div className="profile-card-content">
                                            <div><label> <a  href="/profile"> Profile </a></label></div>
                                            <div><label>Referal program</label></div>
                                            <div><label>Logout</label></div>
                                        </div>
                                    )}
                                </div>

                            </Col>
                            <Col xs={2} md={2}>
                                <div style={{ marginLeft: "-120px" }}>
                                    <FontAwesomeIcon icon={faBell} />
                                </div>
                            </Col>
                        </Row>
                    </footer>
                </ul>
            </nav>
        </div> */}

            <Row>
                <Col xs={3} md={3} >
                    <div>
                        <div className="maincontant " style={{
                            marginLeft: "300px",
                            paddingTop: "2%"
                        }}>
                            <h2>Quick Links</h2>
                            <hr ></hr>
                            <p className="tablecolour">View New orders</p>
                            <p className="tablecolour"> Review Shipped Orders</p>
                            <p className="tablecolour">Add Another Store</p>
                            <p className="tablecolour">Update Account Details</p>
                            <p className="tablecolour">Add Custom Packages</p>
                            <p className="tablecolour">Order Free USPS Supplies</p>
                            <p className="tablecolour">Latest News & Features</p>
                        </div>
                    </div>

                </Col>

                <Col xs={2} md={2} >
                    <div>
                        <div className="maincontantone " style={{ marginLeft: "300px", paddingTop: "2%" }}>
                            <h2>1</h2>
                            <p> New orders today</p>
                        </div>
                    </div>
                </Col>
                <Col xs={2} md={2} >
                    <div>
                        <div className="maincontantone " style={{ marginLeft: "230px", paddingTop: "2%" }}>
                            <h2>Oh</h2>
                            <p> since last order</p>
                        </div>
                    </div>
                </Col>
                <Col xs={2} md={2} >
                    <div>
                        <div className="maincontantone " style={{ marginLeft: "161px", paddingTop: "2%" }}>
                            <h2>30158</h2>
                            <p> Unshipped order</p>
                        </div>
                    </div>
                </Col>
                <Col xs={2} md={2} >
                    <div>
                        <div className="maincontantone " style={{ marginLeft: "95px", paddingTop: "2%" }}>
                            <h2>0</h2>
                            <p> Order ready to ship</p>
                        </div>
                    </div>
                </Col>


            </Row>
            <Row>
                <Col xs={3} md={3} >
                </Col>
                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "300px", marginTop: "-60%", width: "72%", border: "1px solid", padding: "2%",
                            paddingTop: "2%"
                        }}>
                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h2>Download Orders</h2>
                            <hr></hr>

                            <table className="my-table">
                                <tbody>
                                    <tr>
                                        <th>Total</th>
                                        <th>1</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <td>JustGasTanks.com</td>
                                        <td>0</td>
                                        <td>0%</td>
                                    </tr>
                                    <tr>
                                        <td>Manual orders</td>
                                        <td>0</td>
                                        <td>0%</td>
                                    </tr>
                                    <tr>
                                        <td>classic orders</td>
                                        <td>0</td>
                                        <td>0%</td>
                                    </tr>
                                    <tr>
                                        <td>Solomota parts</td>
                                        <td>0</td>
                                        <td>0%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>

                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "56%", marginTop: "-60%", width: "72%", border: "1px solid", padding: "2%",
                            paddingTop: "2%"
                        }}>
                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h2>ShippedOrders</h2>
                            <hr></hr>
                            <table className="my-table">
                            <tbody>
                                <tr>
                                    <th>Total</th>
                                    <th>1</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>JustGasTanks.com</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>Manual orders</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>classic orders</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>Solomota parts</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>

                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "25%", marginTop: "-60%", width: "72%", border: "1px solid", padding: "2%",
                            paddingTop: "2%"
                        }}>
                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h2>Unshipped Orders</h2>
                            <hr></hr>
                            <table className="my-table">
                            <tbody>
                                <tr>
                                    <th>Total</th>
                                    <th>1</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>JustGasTanks.com</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>Manual orders</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>classic orders</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>Solomota parts</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "300px", marginTop: "10%", width: "100%", border: "1px solid", padding: "2%",
                            paddingTop: "2%"
                        }}>
                            {/* <p style={{ float: "right"}}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p> */}
                            <h3 style={{ textAlign: "left" }}>Download Orders</h3>
                            <hr></hr>
                            <table className="my-table">
                            <tbody>
                                <tr>
                                    <th>Total</th>
                                    <th>$12.65</th>
                                </tr>
                                <tr>
                                    <td>Balance</td>
                                    <td>$12.65</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "300px", marginTop: "10%", width: "74%", border: "1px solid", padding: "2%",
                            paddingTop: "2%"
                        }}>
                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h3 style={{ textAlign: "left" }}>Postage Costs</h3>
                            <hr></hr>
                            <table className="my-table">
                            <tbody>
                                <tr>
                                    <th>Total</th>
                                    <th>$0.00</th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </Col>
                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "200px", marginTop: "10%", width: "74%", border: "1px solid", padding: "2%",
                            paddingTop: "2%"
                        }}>

                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h3 style={{ textAlign: "left" }}>OrderDownload</h3>
                            <hr></hr>

                            <table className="my-table">
                                <tbody>
                                    <tr>
                                        <td>!None</td>
                                    </tr>
                                    {/* <tr> <td></td></tr>
                                    <tr> <td></td></tr>
                                    <tr> <td></td></tr>
                                    <tr> <td></td></tr>
                                    <tr> <td></td></tr>
                                    <tr> <td></td></tr> */}
                                    {/* <tr> <td></td></tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "90px", marginTop: "10%", width: "74%", border: "1px solid", padding: "2%",
                            paddingTop: "2%"
                        }}>

                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h3 style={{ textAlign: "left" }}>Store update</h3>
                            <hr></hr>

                            <table className="my-table">
                                <tbody>
                                    <tr>
                                        <td>!None</td></tr>
                                    {/* <tr> <td></td></tr>
                                    <tr> <td></td></tr>
                                    <tr> <td></td></tr>
                                    <tr> <td></td></tr>
                                    <tr> <td></td></tr>
                                    <tr> <td></td></tr>
                                    <tr> <td></td></tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </Col>
            </Row>
</main>
        </>

    )
}

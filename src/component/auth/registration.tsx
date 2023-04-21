import { Link } from "react-router-dom";
import React, { Component } from "react";
import './forget-password';
import { useNavigate } from 'react-router-dom';
import './registration.css';
// import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Button, CardBody, Col, FormGroup, Input, InputGroup, InputGroupText, Row, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logoone from '../assets/img/product x1-2.png';
import mainlogo from '../assets/img/abm-login-image-2.png';
import 'semantic-ui-css/semantic.min.css';
import { useForm } from "react-hook-form";
import { Form, } from 'semantic-ui-react';
import { callApi } from "../../utils/api";

export default class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  onchange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = () => {
    console.log("login___>>>", this.state);
    let req = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }
    callApi("POST", "register.php", req)
      .then(res => res.data)
      .then(response => {
        if(response['success'] == true){
          window.location.href = '/';
        }else{
          alert("Enter Email and Password to Proceed");
        }
      })
      .catch(err => {
        console.log(err);
      });
    // this.navigate('/profile')
    // this.props.history.push("/dashboard");
  }
  render() {
    return (
      <div className="main">
        <div className="container">
          {/* <h6>hii</h6> */}
          <Row style={{ height: "500px" }}>
            <Col xs={6} md={6} style={{ background: " #fff " }}>
              <div className="p-4 pl-6 pr-6 ">
                <CardBody className="">
                  <div className="text-left text-muted mb-3" style={{ marginLeft: "0%", paddingTop: "0px", paddingBottom: "0px" }}>
                    <img
                      alt="Logo"
                      className="image"
                      width='80'
                      src={logoone}
                    />
                  </div>
                  <Form >

                    <FormGroup className="mb-3">
                      <Form.Field>
                        <label className="label" style={{ marginTop: "-25px" }}>
                          Your Name
                        </label>
                        <InputGroup className="input-group">
                          <div>
                            <FontAwesomeIcon icon={faUser} className="fontawesome" />
                            <Input placeholder='Name' type="text" name="name" className="inputclass" onChange={this.onchange} />
                          </div>
                        </InputGroup>
                      </Form.Field>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Form.Field>
                        <label className="label">
                          Your Email
                        </label>
                        <InputGroup className="input-group">
                          <div>
                            <FontAwesomeIcon icon={faEnvelope} className="fontawesome" />
                            <Input placeholder='Email' type="email" name="email" className="inputclass" onChange={this.onchange} />
                          </div>
                        </InputGroup>
                      </Form.Field>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Form.Field>
                        <label className="label" >
                          Password
                        </label>
                        <InputGroup className="input-group">
                          <div>
                            <FontAwesomeIcon icon={faLockOpen} className="fontawesome" />
                            <Input placeholder="Password" type="password" name="password" className="inputclass" onChange={this.onchange} />
                          </div>
                        </InputGroup>
                      </Form.Field>
                    </FormGroup>

                    <div className=" custom-control-alternative custom-checkbox">
                      {/* <p className='forget'>  <Link to='/forget-password' className='text-cta'><>Forgot your Password?</> </Link>
                    </p> */}

                      <Button className=" cta cta-fullwidth " color="primary" type="submit" onClick={this.handleClick}>
                        Create your account
                      </Button>

                    </div>
                    {/* <div>
                    <h3 className="mb-2 mb-2 letwords">OR</h3>
                  </div>
                  <div className="gmailaccount-wrap d-flex justify-content-center">
                    <Button type="button" className="gmail-button btn btn-secondary" ><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" className="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg><span> Connect a Google Account </span></Button>
                  </div> */}
                  </Form>
                  <p className="mt-3 mb-0 text-center" style={{ marginRight: "30%" }}> Already have an account? <a className="text-cta" href="/"> Login Here </a></p>
                </CardBody>
              </div>
            </Col>
            <Col lg="6" md="6" className="text-center bg-blue p-4">
              <img alt="Logo"
                className="img-fluid"
                width='400px' src={logoone} style={{ marginTop: "-50px" }} />
              <h1 style={{ marginTop: "0%" }}> Product X1</h1>
              <p>Access the lowest USPS rates in the industry and seriously discounted UPS rates, easy shipping automation, and award-winning support!</p>
            </Col>
          </Row>


        </div>
      </div>
    )
  }
}
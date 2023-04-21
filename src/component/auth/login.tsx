import { Link } from "react-router-dom";
import React, { Component } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css';
import { Button, CardBody, Col, FormGroup, Input, InputGroup, InputGroupText, Row, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/roundview-logo.png';
import logoone from '../assets/img/product x1-2.png';
import mainlogo from '../assets/img/abm-login-image-2.png';
import 'semantic-ui-css/semantic.min.css';
import { useForm } from "react-hook-form";
import { Form, } from 'semantic-ui-react';
import { callApi } from "../../utils/api";
import { History } from "history";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AllProps {
  history: any,
}

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
  };

  onchange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    let emailError = "";
    let passwordError = "";

    // Check for errors
    if (!this.state.email) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      emailError = "Invalid email format";
    }

    if (!this.state.password) {
      passwordError = "Password is required";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return;
    }

    // Proceed with login
    let req = {
      email: this.state.email,
      password: this.state.password,
    }
    callApi("POST", "login.php", req)
      .then(res => res.data)
      .then(response => {
        if (response['success'] == true) {

          toast.success("Login successful!", {
          });

          setTimeout(() => {
            window.location.href = "/dashboard"; 
          }, 2000);
         
        } else {
          // alert("Enter Email and Password to Proceed");
          toast.success("Login Unsuccessful!", {hideProgressBar: true,icon:false,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <main>
                <ToastContainer
  position="top-center"
  autoClose={2000}
  hideProgressBar={true}
  newestOnTop={false}
  closeButton={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  style={{ top: 450, left: 483, right: 0, bottom: 0 ,width: 400}}
/>


        <div className="main">
          <div className="container">
            <Row>
              <Col xs={6} md={6} style={{ background: " #fff " }}>
                <div className="p-4 pl-6 pr-6 ">
                  <CardBody className="">
                    <div className="text-left text-muted mb-3">
                      <img
                        alt="Logo"
                        className="image"
                        width='80'
                        src={logoone}
                      />
                    </div>
                    <Form>
                      <FormGroup className="mb-3">
                        <Form.Field>
                          <label className="label" style={{ marginTop: "-25px" }}>
                            Your Email
                          </label>
                          <InputGroup className="input-group">
                            <div>
                              <FontAwesomeIcon icon={faEnvelope} className="fontawesome" />
                              <Input placeholder='Email' type="email" className="inputclass" name="email"
                                onChange={this.onchange} />
                            </div>
                          </InputGroup>
                          <div className="text-danger">{this.state.emailError}</div>
                        </Form.Field>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Form.Field>
                          <label className="label" >
                            Password
                          </label>
                          <InputGroup className="input-group">
                            <div>
                              <FontAwesomeIcon icon={faLock} className="fontawesome" />
                              <Input placeholder="Password" type="password" name="password" className="inputclass"
                                onChange={this.onchange} />
                            </div>
                          </InputGroup>
                          <div className="text-danger">{this.state.passwordError}</div>
                        </Form.Field>
                      </FormGroup>
                      <div className=" custom-control-alternative custom-checkbox">
                        <p className='forget'>  <Link to='/forget-password' className='text-cta'><>Forgot your Password?</> </Link>
                        </p>

                        <Button className=" cta cta-fullwidth " color="primary" type="submit" onClick={this.handleClick}>
                          Sign In
                        </Button>
                      </div>
                    </Form>
                    <p className="mt-3 mb-0"> New to Product X1? <a className="text-cta" href="/registration"> Get started </a></p>
                  </CardBody>
                </div>
              </Col>
              <Col lg="6" md="6" className="text-center bg-blue p-4">
                <img alt="Logo"
                  className="img-fluid"
                  width='400px' src={logoone} style={{ marginTop: "-50px" }} />
                <h1 style={{ marginTop: "0%" }}>Product X1</h1>
                <p>Access the lowest USPS rates in the industry and seriously discounted UPS rates, easy shipping automation, and award-winning support!</p>
              </Col>
            </Row>


          </div>
        </div>
      </main>
    )
  }

}

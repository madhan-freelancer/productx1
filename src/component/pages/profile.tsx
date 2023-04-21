// import { Form, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Form, } from 'semantic-ui-react';
import './profile.css';
import * as React from 'react'
import { faBell, faEnvelope, faLock, faLockOpen, faMobile, faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormGroup, InputGroup, Input, Button, Row, Col } from "reactstrap";
import Sidebar from './sidebar';

// export default function Profile() {
  export default class Profile extends React.Component {
  // const navigate = useNavigate();
  // function handleClick3() {
  //   navigate('/dashboard')
  // }
  handleClick = () => {
  window.location.href = '/dashboard';
  }

  render() {
  return (
    <>
      <main>
        <Sidebar />
        <div className="profilediv">

          <div className="profilecardone">
            <div className="divone">
  </div>
            <div className="row  onerow">
              <div className="col-md-8" style={{ textAlign: "left" }}>
                <h2 className="editprofile">Edit Profile</h2>
              </div>


              <div className="col-md-2" >
                <div className="avatar-cardone">

                </div>
              </div>
              <div className="col-md-2">
                <h2 className="editprofilebel">   <FontAwesomeIcon icon={faBell} style={{color: "#f76f45"}}/>  </h2>
              </div>
            </div>
          </div>

          <div className="profilecardone">
          <div className="divone">
            
  </div>
          <div className="row">
          <div className="col-md-4" >
                <div className="">
{/* <h2>hii</h2> */}
                </div>
              </div>
              <div className="col-md-4" >
                <div className="avaterdiv">
               </div>
               <div className="profilecardtwo">
                  <FontAwesomeIcon icon={faPen} style={{ color: "white" }}  className="penicon"/></div>
              </div>
              <div className="col-md-4" >
                {/* <div className="avaterdivone">
<p style={{paddingTop: "10px"}} className="about">About Us</p>
<p className="about">Contact</p>
<p className="about">Help</p>
<p className="about">Faq</p>
                </div> */}
              </div>
            </div></div>


          <div className="profilecard">
 <Form>
              <FormGroup >
                <Form.Field>
                  <label className="profilelabel">
                  Full Name
                  </label>
                  <InputGroup className="profilegroup">
                    <div className="inputbox">
                      <FontAwesomeIcon icon={faUser} className="fontawesomeperson" />
                      <Input placeholder='Name' type="text" name="name" className="inputboxname" />
                    </div>
                  </InputGroup>
                </Form.Field>
              </FormGroup>
              <FormGroup >
                <Form.Field>
                  <label className="profilelabel">
                    Email
                  </label>
                  <InputGroup className="input-group">
                    <div className="inputbox">
                      <FontAwesomeIcon icon={faEnvelope} className="fontawesomeperson" />
                      <Input placeholder='Email' type="email" className="inputboxname" name="email" />
                    </div>
                  </InputGroup>
                </Form.Field>
                {/* {errors.email && <p>Please check the Email</p>} */}
              </FormGroup>
              <FormGroup >
                <Form.Field>
                  <label className="profilelabel">
                    Password
                  </label>
                  <InputGroup className="input-group">
                    <div className="inputbox">
                      <FontAwesomeIcon icon={faLockOpen} className="fontawesomeperson" />
                      <Input placeholder="Password" type="password" name="password" className="inputboxname" />
                    </div>
                  </InputGroup>
                </Form.Field>
              </FormGroup>
              <FormGroup >
                <Form.Field>
                  <label className="profilelabel" >
                    Confirm Password
                  </label>
                  <InputGroup className="input-group">
                    <div className="inputbox">
                      <FontAwesomeIcon icon={faLock} className="fontawesomeperson" />
                    
                      <Input placeholder=" Confirm Password" type="password" name="password" className="inputboxname" />
                    </div>
                  </InputGroup>
                </Form.Field>
              </FormGroup>
              <FormGroup >
                <Form.Field>
                  <label className="profilelabel" >
                    Mobile Number
                  </label>
                  <InputGroup className="input-group">
                    <div className="inputbox">
                      <FontAwesomeIcon icon={faMobile} className="fontawesomeperson" />
                    
                      <Input placeholder=" Mobile Number" type="password" name="password" className="inputboxname" />
                    </div>
                  </InputGroup>
                </Form.Field>
              </FormGroup>
             </Form>

             <div className="row">
              {/* <div className="col-md-4">
              </div> */}
                <div className="col-md-4">
                <Button className="sumbitbtnone" color="primary" type="submit" onClick={this.handleClick} >
                Back
              </Button>
                </div>
                <div className="col-md-4">
                    <Button className="sumbitbtn" color="primary" type="submit" >
                Save
              </Button>
                </div>
          </div>
          </div>
        </div>
      </main>
    </>
  )
}
  }
import React, { Component } from "react";
import { Button, Card, CardBody, Col, FormGroup, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './forget-password.css';
import logo from '../assets/img/roundview-logo.png'
import { Form, } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logoone from '../assets/img/product x1-2.png';
export default class Forgetpassword extends Component {
    render() {
        return (
            <div className="maincontent">
                <Row>
                    <Col lg="3" md="3" >

                    </Col>
                    <Col lg="6" md="6">
                        <Card className="border-0">

                            <CardBody className="">
                                <div className="text-left text-muted mb-4">
                                    <img
                                        alt="Logo"
                                        className="image"
                        width='80'
                                        src={logoone}
                                    />
                                    <h2 className='mb-0'>Forgot your Password? Well, let's fix that!
                                    </h2>
                                    <p className=''>Enter your email address to recover your password.
                                    </p>

                                </div>
                                <Form>
                                    <FormGroup className="mb-3">
                                        <Form.Field>
                                            <InputGroup className="input-groupone" >
                                                <div>
                                                    <FontAwesomeIcon icon={faEnvelope} className="fontawesomeone" />
                                                    <Input placeholder='Emailadress' type="email" className="inputclasstwo" />
                                                </div>
                                            </InputGroup>
                                        </Form.Field>

                                    </FormGroup>
                                    <div className="text-left">
                                        <Button className="cta" color="primary" type="submit">
                                            Request password link
                                        </Button>
                                    </div>
                                    <p className="mt-3 mb-0 text-left"> Want to login into your account? <Link to='/' className='text-cta p-l-0'>Login Here</Link></p>
                                </Form>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>


        )
    }
}
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {

    return (
        <div className="fondoHome">
            <Card id="homeMenu">
                <Row>
                    <Col>
                        <div>
                            <img src="" alt="logo-menu"/>
                            <h1>MENU</h1>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="" alt="logo-stores"/>
                            <h1>STORES</h1>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="" alt="logo-cart"/>
                            <h1>CART</h1>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}
export default Home;
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SubMenu(props) {
    const [datos, setDatos] = useState();
    useEffect(() => {
        const URL = "https://api.mockaroo.com/api/8bbcceb0?count=1&key=62e19930";
        fetch(URL)
            .then(response => response.json()).then(data => setDatos(data))
            .catch(error => console.error('Error fetching data:', error));
    });

    return (
        <div className="subMenu">
            <Row>
                <img src={props.icon} alt="icon" />
                <h1>{props.title}</h1>
                <img src={props.icon} alt="icon" />
            </Row>
            <Row>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="..." alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Footer>
                            <h2> {datos.title1} </h2>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default SubMenu;
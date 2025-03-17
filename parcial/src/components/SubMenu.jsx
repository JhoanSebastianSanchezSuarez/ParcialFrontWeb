import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Carousel } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function SubMenu() {
    const [detail, setDetail] = useState({});
    const location = useLocation();
    const { title, icon } = location.state || {};

    useEffect(() => {
        fetch("https://api.mockaroo.com/api/8bbcceb0?count=1&key=b704a880")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la primera API");
                }
                return response.json();
            })
            .then((data) => {
                setDetail(data[0]);
            })
            .catch((error) => {
                console.error("Error al cargar la primera API:", error);

                fetch(
                    "https://raw.githubusercontent.com/JhoanSebastianSanchezSuarez/ParcialFrontWeb/refs/heads/main/mockParcialFinal.json"
                )
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Error en la segunda API");
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setDetail(data[0]);
                    })
                    .catch((error) => {
                        console.error("Error al cargar la segunda API:", error);
                    });
            });
    }, []);

    return (
        <div className="subMenu">
            <div className="header-menu" >
                <img id= "head1" className="iconos-top "src={icon} alt="icon" />
                <h1 id= "head2">{title}</h1>
                <img id= "head3"className="iconos-top" src={icon} alt="icon" />
            </div>
            <Row className="my-4">
                <Carousel>
                    {detail.img1 && (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={detail.img1}
                                alt="First slide"
                                style={{ height: "400px", objectFit: "cover" }}
                            />
                        </Carousel.Item>
                    )}
                    {detail.img2 && (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={detail.img2}
                                alt="Second slide"
                                style={{ height: "400px", objectFit: "cover" }}
                            />
                        </Carousel.Item>
                    )}
                    {detail.img3 && (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={detail.img3}
                                alt="Third slide"
                                style={{ height: "400px", objectFit: "cover" }}
                            />
                        </Carousel.Item>
                    )}
                </Carousel>
            </Row>
            <Row className="px-4 g-3">
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={detail?.img4}
                            alt="Imagen relacionada"
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <Card.Footer
                        style={{backgroundColor: "rgba(35, 61, 62)"}}>
                            <p> {detail?.clase1} </p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={detail?.img5}
                            alt="Imagen relacionada"
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <Card.Footer
                        style={{backgroundColor: "rgba(35, 61, 62)"}}>
                            <p> {detail?.clase2} </p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={detail?.img6}
                            alt="Imagen relacionada"
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <Card.Footer
                        style={{backgroundColor: "rgba(35, 61, 62)"}}>
                            <p> {detail?.clase3} </p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={detail?.img7}
                            alt="Imagen relacionada"
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <Card.Footer
                        style={{backgroundColor: "rgba(35, 61, 62)"}}>
                            <p> {detail?.clase4} </p>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default SubMenu;

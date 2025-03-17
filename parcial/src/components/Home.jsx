import React from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuIcon from './menuIcon.png';
import StoreIcon from './storeIcon.png';
import CartIcon from './cartIcon.png';
import { useTranslation } from 'react-i18next';
import i18n from '../internacionalization/i18n';

function Home() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleNavigation = (title, icon) => {
        navigate(`/${i18n.language}/submenu`, { state: { title, icon } });
    };

    return (
        <div className="fondoHome">
            <Card id="homeMenu">
                <Row>
                    <Col>
                        <div>
                            <img className="logos-home" src={MenuIcon} alt="logo-menu" onClick={() => handleNavigation(t("menu"), MenuIcon)} style={{ cursor: "pointer" }}/>
                            <h1>{t("menu")}</h1>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img className="logos-home" src={StoreIcon} alt="logo-stores" onClick={() => handleNavigation(t("stores"), StoreIcon)} style={{ cursor: "pointer" }}/>
                            <h1>{t("stores")}</h1>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img className="logos-home" src={CartIcon} alt="logo-cart" onClick={() => handleNavigation(t("cart"), CartIcon)} style={{ cursor: "pointer" }}/>
                            <h1>{t("cart")}</h1>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}
export default Home;
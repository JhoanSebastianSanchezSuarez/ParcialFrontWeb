import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo1 from './logo1.png';


function LoginForm() {
    const [formValues, setFormValues] = useState({ user: "", password: "" });
    const [errors, setErrors] = useState({ password: "" });
    const navigate = useNavigate();


    const handleUserChange = (e) => {
        setFormValues({ ...formValues, user: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setFormValues({ ...formValues, password: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let passwordError = "";

        if (formValues.password.length > 8 || formValues.password.length < 5) {
            passwordError = "La contraseña debe tener entre 5 y 8 caracteres.";
        }

        if (passwordError) {
            setErrors({ password: passwordError });
        } else {
            console.log("Formulario enviado", formValues);
            setErrors({ email: "", password: "" });
            navigate("/home");

        }
    };

    return (
        <div className="gridspace">
            <div className="whiteSpace">
                <img id="logo1" src={logo1} alt="logo"/>
                <h1>Too Good To Go</h1>
                <h2 id="subtitulo">Food Wasting Solution</h2>
                <img id="imagenEnsalada" src= "https://www.foodandwine.com/thmb/IuZPWAXBp4YaT9hn1YLHhuijT3k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-big-italian-salad-hero-83e6ea846722478f8feb1eea33158b00.jpg" alt="imagen-ensalada"/>
            </div>
            <div className="formulario">
            <form onSubmit={handleSubmit}>
                    <div className="FormGroup">
                        <input
                            type="text"
                            className="customInput"
                            id="user"
                            name="user"
                            placeholder="Username"
                            value={formValues.user}
                            onChange={handleUserChange}
                        />
                    </div>
                    <div className="FormGroup">
                        <div className="passwordContainer">
                            <input
                                type={"password"}
                                className="customInput"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        {errors.password && <p className="alerta">{errors.password}</p>}
                    </div>
                    <button id="login-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
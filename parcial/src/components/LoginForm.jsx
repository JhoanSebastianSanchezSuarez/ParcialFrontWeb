import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';

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
                <h1>Too Good To Go</h1>
            </div>
            <div className="formulario">
            <form onSubmit={handleSubmit}>
                    <div className="FormGroup">
                        <input
                            type="text"
                            className="customInput"
                            id="user"
                            name="user"
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
                                value={formValues.password}
                                onChange={handlePasswordChange}

                            />
                        </div>
                        {errors.password && <p className="alerta">{errors.password}</p>}
                    </div>
                    <Button variant="primary" type="submit">Login</Button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
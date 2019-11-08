import React from 'react'
import Title from '../components/Title'
import { TextField, RaisedButton } from 'material-ui'
import Container from '../components/Container'
import {
    BrowserRouter as RouterReact,
    Link,
    Route
} from 'react-router-dom'

export default class Login extends React.Component {
    render() {
        return (
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <Container>
                        <div style={{ "textAlign": "left" }}>
                            <Title />
                            <TextField className="textfield" floatingLabelText="Correo electrónico" type="email" />
                            <TextField className="textfield" floatingLabelText="Contraseña" type="password" />
                            <div className="Login-actions">
                                <Route path="/login" exact render={() => {
                                    return (
                                        <div>
                                            <Link to="/sign-up" style={{ marginRight: "1em" }}>Registro</Link>
                                            <RaisedButton label="Ingresar" secondary={true} />
                                        </div>
                                    )
                                }} />
                                <Route path="/sign-up" exact render={() => {
                                    return (
                                        <div>
                                            <Link to="/login" style={{ marginRight: "1em" }}>Ya tengo cuenta</Link>
                                            <RaisedButton label="Crear cuenta" secondary={true} />
                                        </div>
                                    )
                                }} />
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <Route path="/login" exact render={() => {
                        return (
                            <div className="Login-background" style={{ "backgroundImage": "url(" + process.env.PUBLIC_URL + '/images/login-background.jpg' + ")" }}></div>
                        )
                    }} />
                    <Route path="/sign-up" exact render={() => {
                        return (
                            <div className="Login-background" style={{ "backgroundImage": "url(" + process.env.PUBLIC_URL + '/images/signup-background.jpg' + ")" }}></div>
                        )
                    }} />
                </div>
            </div>
        )
    }
}
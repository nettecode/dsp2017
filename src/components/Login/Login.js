/**
 * Created by nette on 30.04.17.
 */
import React from 'react';

import { Card, CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="login">
                <Card>
                    <CardText className="hint">
                        Login / hasło:<br/>
                        demo / demo
                    </CardText>
                    <form onSubmit={console.log('Log me!')}>
                        <TextField
                            hintText="Wpisz login"
                            floatingLabelText="Login"
                        /><br />
                        <TextField
                            hintText="Wpisz hasło"
                            floatingLabelText="Hasło"
                            type="password"
                        /><br />
                        <CardActions>
                            <RaisedButton label="Zaloguj się" primary type="submit" fullWidth/>
                        </CardActions>
                    </form>
                </Card>
            </div>
        );
    }
}

export default Login;
import React from 'react';
import { useSelector } from 'react-redux';
import userManager from './store/helpers/userManager';

/** Custom components import section */
/** Material UI import section */
import { Button, Typography } from '@material-ui/core';

import Logo from "./images/logo.png";


function App() {
    const { user } = useSelector(state => state.oidc);

    const isLoggedIn = () => (user ? true : false);
    const login = () => userManager.signinRedirect();
    const logOut = () => userManager.signoutRedirect();

    return (
        <div className="App">
            <header className="App-header">
                Identity
        </header>
            {

                isLoggedIn() ? (
                    <div>
                        <span>{`Welcome ${user.profile.preferred_username}`}</span>
                        <br />
                        <Button
                            data-cy="btn-logout"
                            color="secondary"
                            onClick={logOut}>
                            Logout
                        </Button>
                        <br />
                        <img
                            data-cy="img-login-logo"
							src={Logo}
							alt='logo'
						/>
                    </div>
                ) : (
                        <div>
                            <Button
                                data-cy="btn-login"
                                color="secondary"
                                onClick={login}
                            >
                                <Typography variant="subtitle1" data-cy="txt-btn-login">
                                    LOGIN
                                </Typography>
                            </Button>
                            <br />
                        </div>
                    )
            }
        </div>
    );
}

export default App;

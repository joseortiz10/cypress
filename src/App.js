import React from 'react';
import { useSelector } from 'react-redux';
import userManager from './store/helpers/userManager';

/** Custom components import section */
/** Material UI import section */
import {Button} from '@material-ui/core';

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
                    <br/>
                    <Button color="secondary" onClick={logOut}>
                        Logout
                    </Button>
                    <br/>
                </div>            
            ) : (
                <div>
                    <Button color="secondary" onClick={login}>
                        Login
                    </Button>
                    <br/>
                </div>
            )
        }
      </div>
    );
}

export default App;

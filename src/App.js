import React from 'react';
import { useSelector } from 'react-redux';
import userManager from './store/helpers/userManager';

/** Custom components import section */


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
                    <button type='button' onClick={logOut}>
                        Logout
                    </button>
                    <br/>
                </div>            
            ) : (
                <div>
                    <button type='button' onClick={login}>
                        Login
                    </button>
                    <br/>
                </div>
            )
        }
      </div>
    );
}

export default App;

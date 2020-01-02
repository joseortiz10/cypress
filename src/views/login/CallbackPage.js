/** React import section */
import React from 'react';
import { CallbackComponent } from 'redux-oidc';
import { useHistory } from 'react-router-dom'

/** Helpers import section */
import userManager from '../../store/helpers/userManager';

const CallbackPage = props => {
    const history = useHistory();

    const redirectToHome = (params) => {
        let homeUrl = "/";
        history.push(homeUrl);
    }

    return (
        <CallbackComponent
            userManager={userManager}
            successCallback={redirectToHome}
            errorCallback={error => {   
                console.error(error);
            }}>
            <div>
                Loading...
            </div>
        </CallbackComponent>
    );
}

export default CallbackPage;
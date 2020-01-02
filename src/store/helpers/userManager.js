/** Oidc section imports */
import { createUserManager } from 'redux-oidc';

/** Defines the user manager configuration */
const userManagerConfig = {
    client_id: 'apsys.baseproject.backend',
    redirect_uri: 'http://localhost:3000/callback',
    post_logout_redirect_uri: 'http://localhost:3000',
    response_type: 'id_token token',
    scope: 'openid profile email team',
    authority: 'http://localhost:52330/identity',
    filterProtocolClaims: true,
    loadUserInfo: true
}

const userManager = createUserManager(userManagerConfig);
export default userManager;
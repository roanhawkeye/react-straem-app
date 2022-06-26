import React from "react";
import client_secrets from '../client_secrets.js';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: client_secrets.web.client_id,
                scope: 'email',
                plugin_name: "streamy",
            })
        });
    }

    render(){
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;
import React from "react";
import client_secrets from '../client_secrets.js';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: client_secrets.web.client_id,
                scope: 'email',
                plugin_name: "streamy",
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null){
            return null;
        }else if (this.state.isSignedIn){
            return(
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }else {
            return(
                <button className="ui red google button" onClick={this.onSignIn}>
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;
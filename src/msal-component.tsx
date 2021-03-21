import * as React from 'react';
import * as Msal from 'msal';
import * as AzureDevOpsExtensionSdk from 'azure-devops-extension-sdk';

// Msal uses v2 oauth endpoint. Here are some tips on how to configure AAD app and webapp/functionapp
// - When configuring AAD app, set accessTokenAcceptedVersion to 2 in manifest
// - In function app or webapp authentication use v2 issuer, for eg: https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/v2.0/token
// The below code retrieves a token based on interactive user log-in flow.
// To get a token from service to service auth, use v2 oauth endpoint with the following params in the form https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/v2.0/token
// - grant_type = client_credentials
// - client_id = the client ID of the caller
// - client_secret = the client secret of the caller
// - scope = the service application ID endind with /.default. For example: ThisIsTheApplicationIdRetrievedFromAADApp/.default
export class MsalComponent extends React.Component
{
    private msalConfig: Msal.Configuration =
    {
        auth:
        {
            clientId: '35dbe304-e2d9-411c-8bf6-6e0e1bff59ae',
            authority: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47',
            redirectUri: 'https://localhost:4000'
        },
    };

    private msalApp = new Msal.UserAgentApplication(this.msalConfig);

    signinPopup()
    {
        const authenticationParameters: Msal.AuthenticationParameters = 
        {
            scopes: ['user.read'],
        };

        this.msalApp.loginPopup(authenticationParameters)
            .then(response =>
            {
                console.log('Acquired token successfully');   
                console.log(response); 
            })
            .catch(error => 
            {
                console.log('Failed to log in')
                console.log(error);
            })
    }

    signinSilently()
    {
        // Setting the logingHint is something like this litra@microsoft.com
        let authenticationParameters: Msal.AuthenticationParameters = 
        {
            scopes: ['user.read'],
            loginHint: AzureDevOpsExtensionSdk.getUser().name
        }

        this.msalApp.acquireTokenSilent(authenticationParameters)
            .then(response =>
            {
                console.log('Acquired token successfully with current logged in user ' + authenticationParameters.loginHint + '. The accessToken:' + response.accessToken + '\r\n' + 'The idToken: ' + response.idToken.rawIdToken);
            })
            .catch(error => 
            {
                console.log('Failed to acquire token it could be because user is not logged in: ' + error);
            }
        )
    }

    signout()
    {
        this.msalApp.logout();
    }

    render()
    {
        return (
            <div>
                <button onClick={() => this.signinPopup()}>Sign In Popup</button><p />
                <button onClick={() => this.signinSilently()}>Sign In Silently</button> <p />
                <button onClick={() => this.signout()}>Sign Out</button>
            </div>
        );
    }
}
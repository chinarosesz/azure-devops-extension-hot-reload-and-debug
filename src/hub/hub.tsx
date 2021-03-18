import "./hub.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as SDK from "azure-devops-extension-sdk";
import { Header } from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";
import * as ClockComponent from "./clock-component";
import * as MsalComponent from "./msal-component";

let clockComponent = <ClockComponent.ClockComponent/ >
let msalComponent = <MsalComponent.MsalComponent />

class Hub extends React.Component {
    public componentDidMount() {
        SDK.init();
    }

    public render(): JSX.Element {
        return (
            <Page className="flex-grow">
                <Header title="Hello World" />
                <div>{clockComponent}</div>
                <div>{msalComponent}</div>
            </Page>
        );
    }
}

ReactDOM.render(<Hub />, document.getElementById("root"));

import "./hub.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as SDK from "azure-devops-extension-sdk";
import { Header } from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";

class Hub extends React.Component {
    public componentDidMount() {
        SDK.init();
    }

    public render(): JSX.Element {
        return (
            <Page className="flex-grow">
                <Header title="Hello World" />
            </Page>
        );
    }
}

ReactDOM.render(<Hub />, document.getElementById("root"));

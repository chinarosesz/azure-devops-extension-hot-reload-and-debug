import * as React from "react";
import * as ReactDOM from "react-dom";
import * as VSS from "azure-devops-extension-sdk";

class Main extends React.Component 
{
    public componentDidMount() 
    {
        VSS.init();
    }

    public render(): JSX.Element 
    {
        VSS.ready();
        return (
            <h1>Hello World</h1>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));

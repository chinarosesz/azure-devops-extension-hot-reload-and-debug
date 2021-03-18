import * as React from "react";

export class ClockComponent extends React.Component 
{
  render() 
  {
    return (
      <div>
        <h1>The time here is now {this.getDate(true)}</h1>
        <h1>The time in UTC is {this.getDate(false)}</h1>
      </div>
    );
  }

  getDate(isLocal:boolean)
  {
    if (isLocal)
    {
      return new Date().toLocaleString();
    }
    else
    {
      return new Date().toUTCString();
    }
    
  }
}  

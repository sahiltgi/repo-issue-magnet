import React, { Component } from "react";
import Issues from "./Issues";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      gitRepoName: ""
    };
  }

  handleUserName = event => {
    this.setState({
      userName: event.target.value
    });
  };
  handleGitRepoName = event => {
    this.setState({
      gitRepoName: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <div>
              <input
                type="text"
                value={this.state.userName}
                onChange={this.handleUserName}
                className="inputField"
                placeholder="Github User Name"
              />
            </div>
            <div>
              <input
                type="text"
                value={this.state.gitRepoName}
                onChange={this.handleGitRepoName}
                className="inputField"
                placeholder="Github repo Name"
              />
            </div>
          </div>
        </form>
        <Issues {...this.state} />
      </div>
    );
  }
}

export default Form;

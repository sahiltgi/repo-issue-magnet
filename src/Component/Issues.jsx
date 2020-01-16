import React, { Component } from "react";
import axios from "axios";

class Issues extends Component {
  constructor() {
    super();

    this.state = {
      issuesArray: []
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    axios
      .get(
        "https://api.github.com/repos/" +
          this.props.userName +
          "/" +
          this.props.gitRepoName +
          "/issues"
      )
      .then(response => {
        console.log(response);
        this.setState({
          issuesArray: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { issuesArray } = this.state;
    return (
      <div>
        <button onClick={this.clickHandler} className="issueButton">
          FIND
        </button>
        {issuesArray.length
          ? issuesArray.map(individualIssue => (
              <div key={individualIssue.id} className="individualIssueCard">
                <div>
                  <span className="cardMains">Issue Title : </span>
                  {individualIssue.title}
                </div>
                <div>
                  <span className="cardMains"> Created By : </span>
                  {individualIssue.user.login}
                </div>
                <div>
                  <span className="cardMains">Issue Description : </span>
                  {individualIssue.body}
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Issues;

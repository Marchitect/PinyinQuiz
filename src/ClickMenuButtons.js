import React from 'react';

class ClickMenuButtons extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const quiz = e.target.value;
    this.props.onClick(quiz);
  }

  render() {
    return (
      <div className="buttonGroup">
        <button className="quizBtn" value="kongjian" onClick={this.handleChange}>Quiz 1</button>
        <button className="quizBtn" value="xizao" onClick={this.handleChange}>2</button>
        <button className="quizBtn" value="jiangyou" onClick={this.handleChange}>3</button>
      </div>
    );
  }
}

export default ClickMenuButtons;
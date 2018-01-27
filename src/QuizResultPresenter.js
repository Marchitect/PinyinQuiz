import React from 'react';

export class QuizResultPresenter extends React.Component {
  render() {
    const answer = this.props.answer;
    if (answer === "correct"){
      return (
        <div id="correctResult" className="resultSec">
          <p>Hey you got it correct!</p>
        </div>
      );
    } 
    else if (answer === "wrong"){
      return (
        <div id="wrongResult" className="resultSec">
          <p>Oops, please try again!</p>
        </div>
      );
    }
    else{
      return (<div id="none"></div>);
    }
  }
}

export default QuizResultPresenter;
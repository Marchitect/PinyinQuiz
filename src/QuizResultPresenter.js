import React from 'react';

export class QuizResultPresenter extends React.Component {
  render() {
    const answer = this.props.answer;
    if (answer === "correct"){
      return (
        <div className="correctResult">
          <p>Hey you got it correct!</p>
        </div>
      );
    } 
    else if (answer === "wrong"){
      return (
        <div className="wrongResult">
          <p>Oops, please try again!</p>
        </div>
      );
    }
    else{
      return (<div className="none"></div>);
    }
  }
}

export default QuizResultPresenter;
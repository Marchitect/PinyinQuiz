import React from 'react';
import Quiz1AnswerOptions from './Quiz1AnswerOptions';
import Quiz2AnswerOptions from './Quiz2AnswerOptions';
import Quiz3AnswerOptions from './Quiz3AnswerOptions';
import QuizResultPresenter from './QuizResultPresenter';

class QuizPresenter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {answer: "null"};

    this.changeAnswer = this.changeAnswer.bind(this);
  }

  changeAnswer(newAnswer) {
    this.setState({
      answer: newAnswer
    });
  }

  render() {
    const quiz = this.props.quiz;
    let quizEngContent = null;
    let quizPinyinContent = null;
    let result = null;
    if (quiz === "kongjian"){
      quizEngContent = <div className="English"><p>There is no space in here.</p></div>
      quizPinyinContent = <div className="pinyin"><p>Zhèlǐ méiyǒu <Quiz1AnswerOptions onChange={this.changeAnswer}/>.</p></div>
      result = <QuizResultPresenter answer={this.state.answer} />
    }
    else if (quiz === "xizao"){
      quizEngContent = <div className="English"><p>I am going to take a shower/bath.</p></div>
      quizPinyinContent = <div className="pinyin"><p>Wǒ yào qù <Quiz2AnswerOptions onChange={this.changeAnswer}/>.</p></div>
      result = <QuizResultPresenter answer={this.state.answer} />
    }
    else if (quiz === "jiang"){
      quizEngContent = <div className="English"><p>Can you pass me the tomato sauce please?</p></div>
      quizPinyinContent = <div className="pinyin"><p>Qǐng dìgěi wǒ fānqié <Quiz3AnswerOptions onChange={this.changeAnswer}/>.</p></div>
      result = <QuizResultPresenter answer={this.state.answer} />
    }
    return (
      <div className="quizPresenter">
      
        {quizEngContent}
        {quizPinyinContent}
        {result}

      </div>
    );
  }
}

export default QuizPresenter;
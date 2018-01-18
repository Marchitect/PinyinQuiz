import React from 'react';
import ReactDOM from 'react-dom';
import ClickMenuButtons from './ClickMenuButtons';
import QuizPresenter from './QuizPresenter';

import './Core.css';

class Core extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			quiz: "kongjian",
			classDisappear: "classDisappear"
		};

		this.changeRenderedQuiz = this.changeRenderedQuiz.bind(this);

	}

	changeRenderedQuiz(newQuiz){
		this.setState({quiz: newQuiz});
	}

	render(){
		return(
		<div>
	        <ClickMenuButtons onClick={this.changeRenderedQuiz} />
	        <QuizPresenter quiz={this.state.quiz} />
      	</div>
		);
	}
}

export default Core;
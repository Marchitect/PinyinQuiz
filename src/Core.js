import React from 'react';
import ReactDOM from 'react-dom';
import ClickMenuButtons from './ClickMenuButtons';
import QuizPresenter from './QuizPresenter';

import PlaySoundButton from './PlaySoundButton';
import SoundSystem from './SoundSystem';

import './Core.css';

class Core extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			quiz: "kongjian",
			playstatus: "PAUSED"
		};

		this.changeRenderedQuiz = this.changeRenderedQuiz.bind(this);
		this.changePlayStatus = this.changePlayStatus.bind(this);
	}

	changeRenderedQuiz(newQuiz){
		this.setState({quiz: newQuiz, playstatus: "PAUSED"});
	}

	changePlayStatus(newStatus){
		this.setState({playstatus: newStatus});
	}

	render(){
		return(
		<div>
	        <ClickMenuButtons onClick={this.changeRenderedQuiz} />
	        <PlaySoundButton onClick={this.changePlayStatus} />
			<button id="rBtn">Display Result</button>
	        <QuizPresenter quiz={this.state.quiz} />
	        <SoundSystem quiz={this.state.quiz} playstatus={this.state.playstatus}/>
      	</div>
		);
	}
}

export default Core;
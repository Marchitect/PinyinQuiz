import React from 'react';
import Sound from 'react-sound';

class SoundSystem extends React.Component{
	render (){
		const quiz = this.props.quiz+".wav";

		const playstatus = this.props.playstatus;

		if (playstatus === "PAUSED"){
			return(
				<Sound
				url={quiz}
				playStatus={Sound.status.PAUSED}
				playFromPosition={0 /* in milliseconds */}
				onLoading={this.handleSongLoading}
				onPlaying={this.handleSongPlaying}
				onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
			);
		}

		else if (playstatus === "PLAYING"){
			return(
				<Sound
				url={quiz}
				playStatus={Sound.status.PLAYING}
				playFromPosition={0 /* in milliseconds */}
				onLoading={this.handleSongLoading}
				onPlaying={this.handleSongPlaying}
				onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
			);
		}
		

	}
}

export default SoundSystem;
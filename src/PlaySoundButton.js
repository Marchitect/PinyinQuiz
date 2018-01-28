import React from 'react';

class PlaySoundButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const playstatus = e.target.value;
    this.props.onClick(playstatus);
  }

  render() {
    return (
      <div className="soundButtonArea">
        <button id="rBtn">Display Result</button>
        <button id="soundBtn" value="PLAYING" onClick={this.handleChange}>Hint: Play Audio</button>
      </div>
    );
  }
}

export default PlaySoundButton;
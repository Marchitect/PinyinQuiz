import React from 'react';

class Quiz2AnswerOptions extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const word = e.target.value;
    this.props.onChange(word);
  }

  render() {
    return (
      <select id="select" defaultValue="null"
          onChange={this.handleChange}>
        <option value="null" disabled>Please select</option>
  			<option value="wrong">xǐshǒu</option>
        <option value="correct">xǐzǎo</option>
  			<option value="wrong">xǐchē</option>
  			
  		</select>

  	);
  }
}

export default Quiz2AnswerOptions;
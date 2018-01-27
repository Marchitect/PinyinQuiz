import React from 'react';

class Quiz3AnswerOptions extends React.Component {
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
  			<option value="wrong">jiàngyóu</option>
        <option value="correct">jiàng</option>
  			<option value="wrong">yóu</option>
  			
  		</select>

  	);
  }
}

export default Quiz3AnswerOptions;
import React from 'react';

class Quiz1AnswerOptions extends React.Component {
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
  			<option value="wrong">kōngqì</option>
  			<option value="wrong">tàikōng</option>
  			<option value="correct">kōngjiān</option>
  		</select>

  	);
  }
}

export default Quiz1AnswerOptions;
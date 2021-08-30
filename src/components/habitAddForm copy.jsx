import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();
  onSubmit = (event) => {
    console.log(this.inputRef.current.value);
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    //    this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    console.log('habitFrom');
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="add-input"
          placeholder="Habit"
          ref={this.inputRef}
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;

import React from 'react';
import PropTypes from 'prop-types';



class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked,
    };
  }


  componentDidMont(){
    this.setState({
      isChecked: this.props.checked,
    })
  }


  toggleChange = () => {
   this.setState({
    isChecked : !this.state.isChecked,
   })
    this.props.onChange();
  }


  render() {
    return (
        <input 
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
          value={this.props.value}
          type={this.props.type}
        />
    );
  }
}

CheckBox.propType = {
  checked : PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
}

CheckBox.defaultProp = {
  checked: false,
}

export default CheckBox;
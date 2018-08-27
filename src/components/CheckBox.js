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

  componentWillReceiveProps= (nextProps) =>{
    //console.log("nextprops: ", nextProps)
  }

  render() {
    //console.log("CHECKBOX ID: ", this.props.value);
    //console.log("CHECKED? ", this.props)
    return (
      <label>
        <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
          value={this.props.value}
        />
        {this.props.name}
       </label>
    );
  }
}

CheckBox.propType = {
  checked : PropTypes.bool.isRequired,
}

CheckBox.defaultProp = {
  checked: false,
}
export default CheckBox;
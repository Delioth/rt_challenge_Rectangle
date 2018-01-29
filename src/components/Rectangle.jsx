import {PropTypes} from 'prop-types';
import React, {Component} from 'react';

class Rectangle extends Component{
	constructor(props){
  	super(props);
    this.echoHeader = this.echoHeader.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }
  echoHeader(e){
		e.stopPropagation();
  	alert(this.props.header);
  }
	render() {
  	return(
    	<div onClick={this.echoHeader} className="spacedRectangle" style={{borderColor:this.props.borderColor, backgroundColor:this.props.fillColor}}>
    	  <span className="centeredHeader">
          {this.props.header}
        </span>
				{this.props.children}
    	</div>
    );
  }
}

Rectangle.propTypes = {
  header: PropTypes.string,
  borderColor: PropTypes.string,
  fillColor: PropTypes.string
};

export {Rectangle};

import React from 'react'
// Code CoordinatesButton Component Here
class CoordinatesButton extends React.Component{
	constructor(props){
		super(props);
	}
	onClick = (e) =>{
		let temp = [e.clientX, e.clientY];
		this.props.onReceiveCoordinates(temp);
	}
	render(){
		return (
			<button onClick={this.onClick}>
				Coordinates
			</button>
		)
	}
}
export default CoordinatesButton;
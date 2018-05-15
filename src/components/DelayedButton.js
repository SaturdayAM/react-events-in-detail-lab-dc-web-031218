import React from 'react';
// Code DelayedButton Component Here
class DelayedButton extends React.Component{
	constructor(props){
		super(props);
	}

	delayedHandler = (e) =>{
		// let persist = e;
		e.persist();
		setTimeout(() => this.props.onDelayedClick(e), this.props.delay);
	}

	render(){
		return(
			<button onClick={this.delayedHandler}>
				Delayed
			</button>
		)
	}
}

export default DelayedButton;
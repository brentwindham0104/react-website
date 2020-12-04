import React from 'react';

class Button extends React.Component {
	render() {
		return (
            <div>
			<button 
                onClick={this.props.onClick}
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
            </div>
		);
	}
}

export default Button;
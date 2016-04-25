import React from 'react';

const Preview = React.createClass({
	render: function() {
		return  (
			<div>
				<h1>{this.props.title}</h1>
				<div>
					<h2>{this.props.firstName}</h2>
					<h2>{this.props.lastName}</h2>
				</div>
				<h3>{this.props.createdAt}</h3>
				<div>
					<p>{this.props.body}</p>
				</div>	
			</div>
			);

	}

});

export default Preview;  


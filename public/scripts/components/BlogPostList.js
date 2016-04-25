import React from 'react';
import postcollection from '../collections/PostCollection.js';
import Preview from './Preview.js';

const BlogPostList = React.createClass({
	
	componentDidMount: function() {
		console.log('componentDidMount');
		console.log(this.state.postcollection);
		this.state.postcollection.on('update change', () => {
			console.log('update');
			this.setState({
				postcollection: postcollection
			});

		}); 
		this.state.postcollection.fetch();
	},

	getIntialState: function() {
		console.log('getIntialState');
		console.log('this.state');
		//let newposts = new PostCollection();
		return {
			postcollection: postcollection 
		};

	}, 
	
	render: function () {
		console.log('render');
		console.log('this.state.postcollection');

		// let postItems = this.state.postcollection.map((val, index, array)=> {
		// 	return <Preview //title={value.get('title')} 
		// 					firstName={value.get('author').firstName}
		// 				    lastName={value.get('author').lastName} 
		// 				    createdAt={value.get('createdAt')} 
		// 				    body={value.get('body')} />;

		// });
		return (

			<div></div>
		// 	<section>
		// 		{postItems} 
		// 	</section>
			);
	}

});


export default BlogPostList;  




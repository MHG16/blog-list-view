import React from 'react';
import PostCollection from '../collections/PostCollection.js';
import Preview from './Preview.js';

const BlogPostList = React.createClass({
	getIntialState: function() {
		console.log('getIntialState');
		console.log('this.state');
		let posts = new PostCollection();
		return {
			things: posts 
		};

	}, 
	componentDidMount: function() {
		this.state.thing.on('update', () => {
			this.setState({
				thing: this.state.things
			});

		}); 
		this.state.things.fetch();
	},
	render: function () {
		let postItemElements = this.state.thing.map((val, index, array)=> {
			return <Preview title={value.get('title')} firstName={value.get('firstName')} lastName={value.get('lastName')} createdAt={value.get('createdAt')} body={value.get('body')} />;

		});
		return (
			<section>
				{postItemElements} 
			</section>
			);
	}

});


export default BlogPostList;  




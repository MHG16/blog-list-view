import React from 'react';
import PostCollection from '../collections/PostCollection.js';
import Preview from './Preview.js';

const BlogPostList = React.createClass({
	getIntialState: function() {
		console.log('getIntialState');
		console.log('this.state');
		let newposts = new PostCollection();
		return {
			post: newposts 
		};

	}, 
	componentDidMount: function() {
		console.log('componentDidMount');
		console.log(this.state);
		this.state.post.on('update', () => {
			console.log('update');
			console.log('this.state');
			this.setState({
				post: this.state.post.models  
			});

		}); 
		this.state.post.fetch();
	},
	render: function () {
		console.log('render');
		console.log('this.state');
		let postItems = this.state.post.map((val, index, array)=> {
			return <Preview title={val.get('title')} 
							firstName={val.get('author'.firstName)}
						    lastName={val.get('author').lastName} 
						    createdAt={val.get('createdAt')} 
						    body={val.get('body')} />;

		});
		return (
			<section>
				{postItems} 
			</section>
			);
	}

});


export default BlogPostList;  




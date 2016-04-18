import Backbone from 'backbone';
import PostCollection from './collections/PostCollection.js';


const BlogPostList = React.createClass({
	getIntialState: function() {
		console.log('getIntialState');
		console.log('this.state');
		let posts = new PostCollection();
		return {
			thing: posts 
		};

	}, 
	componentDidMount: function() {
		this.state.thing.on('update', () => {
			
			
		} 

	}


});




export default BlogPostList;  
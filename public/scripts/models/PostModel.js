import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		id: '',
		title: '',
		body: '',
		author: {
			firstName: '',
			lastName: ''
		},
		createdAt: '',
		updatedAt: ''

	},

	rootUrl: 'http://localhost:3000/api/v1/post',
	idAttribute: 'id'

});




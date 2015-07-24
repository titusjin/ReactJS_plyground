/** @jsx React.DOM */
var HelloDate = React.createClass({
	displayName: "HelloDate",
	getInitialState : function(){
		return {date: new Date()};
	},
	makeDateString : function(){
		this.setState({date: new Date()});
	},
	componentDidMount : function(){
		this.interval = setInterval(this.makeDateString,1000);
	},
	render: function() {
		return (
				React.createElement("p", null, 
				"Hello, ", React.createElement("input", {type: "text", placeholder: "Your name here"}), "!" + ' ' +
				"It is ", this.state.date.toTimeString()
				)
		);
	}
});


React.render(
		React.createElement(HelloDate, null),
		document.getElementById('example')
);

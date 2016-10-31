var Connection = require('./connection')

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];
	this.conditions = {};

}
Node.prototype.connect = function(node, condition) {
	if(this.conditions[condition]){
		throw Error();
	}else{
		var nextNode = new Connection(node, condition);
		this.connections.push(nextNode);
		this.conditions[condition] = nextNode;
	}
};

module.exports = Node

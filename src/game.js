var Node = require('./node')

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
}

Game.prototype.addNode = function(str1, str2){
	if(this.nodes[str1]){
		throw Error();
	}else{
		var newNode = new Node(str1, str2);
		this.nodes[str1] = newNode;
		if(this.startingPoint == null){
			this.startingPoint = newNode;
		}
		return newNode;
	}
}

Game.prototype.getNode = function(answer){
	return this.nodes[answer];
}

Game.prototype.connect = function(node1, node2, condition){
	this.nodes[node1].connect(node2, condition);
}

module.exports = Game

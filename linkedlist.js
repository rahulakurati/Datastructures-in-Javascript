function node(data){
	this.data = data;
	this.next = null;
}

//definition
function linkedList() {
	this.head 	= new Node("head");
	this.find 	= find;
	this.insert	= insert;
	this.remove = remove;
	this.show 	= show;
}

//searches for the node having the data
function find(item){
	var current 	= this.head;
	while(current.data != item)
		current 	= current.next

	return current;
}

function insert(newElement,after){
	var newNode 	= new Node(newElement);
	var prev 		= this.find(after);
	newNode.next	= prev.next;
	prev.next 		= newNode;
}


function remove(item){
	var prev	= this.find(item);
	var temp	= prev.next;
	prev.next	= prev.next.next; //temp.next
	delete temp;
}

function show(){
	var current	= this.head;
	while(current != null)
		console.log(current.data);
}
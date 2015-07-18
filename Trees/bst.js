function Node(data,left,right)
{
	this.data = data;
	this.left = left;
	this.right = right;
}

function BST()
{
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

function insert(data)
{
	var current = this.root;
	var parent;
	if(current == null)
	{
		this.root = new Node(data,null,null);
	}
	else
	{
		while(true)
		{
			parent = current;
			if(data < current.data)
			{
				current = current.left;
				if(current == null)
				{
					parent.left = new Node(data,null,null);
					break;
				}
			}
			else
			{
				current = current.right;
				if(current == null)
				{
					parent.right = new Node(data,null,null);
					break;
				}
			}
		}
	}
	
	
}

function inOrder(node)
{
	var current = node;
	if(current != null){
		inOrder(current.left);
		console.log(current.data+" ");
		inOrder(current.right);
	}
}
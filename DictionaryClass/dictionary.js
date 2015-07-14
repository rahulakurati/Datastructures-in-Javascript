function Dinctionary()
{
	this.data = new Array();
	this.add = add;
	this.remove = remove;
	this.show = show;
	this.find = find;
}

function add(key,value)
{
	this.data[key] = value;
}

function remove(key)
{
	delete this.data[key];
}

function find(key)
{
	return this.data[key];
}

function show()
{
	//for(var i=0;i<this.data.length;i++) //the length property returns 0 always in this case as the keys of the array are not Integers but Strings
	for each(var key in Object.keys(this.data))
	{
		print(key+"=>"+this.data[key]);
	}
		
}

function count()
{
	var count=0;
	//for(var i=0;i<this.data.length;i++) //the length property returns 0 always in this case as the keys of the array are not Integers but Strings
	for each(var key in Object.keys(this.data))
	{
		count++;
	}
	return count;	
}

function clear()
{
	for each(var key in Object.keys(this.data))
	{
		delete this.data[key];
	}
}
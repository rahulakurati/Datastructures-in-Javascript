function Hash(size)
{
	this.table = new Array(size);
	this.hashfunction = hashfunction;
	this.add = add;
	this.show = show;
}

function hashfunction(value)
{
	if(typeof value == "string")
	{
		var total;
		for(var i=0;i<value.length;i++)
			total += value.charCodeAt(i);
		return total;
	}
}

function add(value)
{
	var pos = hashfunction(value);
	this.table[pos] = value;
}

function show()
{
	for(var i=0;i<this.table.length;i++)
		print(i+"=>"+this.table[i]);
}


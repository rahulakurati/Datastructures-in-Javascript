function test(str)
{
	var count=0;
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)=='<')
		{
			if(str.charAt(i+1)=='-')
			{
				
				if(str.charAt(i+2)=='-')
				{
					if(str.charAt(i+3)=='<')
					{
						if(str.charAt(i+4)=='<')
						{
							count++;
						}
					}
				}
			}
		}
		else if(str.charAt(i)=='>')
		{
			if(str.charAt(i+1)=='>')
			{
				
				if(str.charAt(i+2)=='-')
				{
					if(str.charAt(i+3)=='-')
					{
						if(str.charAt(i+4)=='>')
						{
							count++;
						}
					}
				}
			}
		}
	}
	console.log(count);
}

function test2(str)
{
	var count=0;
	while(str.length>0){
		var pos = str.find(">>-->");
		console.log(pos);
	}
}
//array reversal
var a = [1,2,3,4,5];
function arrReverse(inpArr)
{
  var revArr=[];
  // for(var i=inpArr.length-1;i>=0;i--)
  // 	revArr.push(inpArr[i]);
  
  while(inpArr.length>0)
  	revArr.push(inpArr.pop());
  return revArr;
}

var b = arrReverse(a);
	
function swap(arr,i,j)
{
	var temp = arr[i];
	arr[i]=arr[j];
	arr[j]=temp;
}

//bubble sort
function bubbleSort(arr)
{
	for(var i=1;i<arr.length;i++)
	{
		for(var j=0;j<arr.length-1;j++)
		{
			if(arr[j]>arr[j+1])
				swap(arr,j,j+1);
		}
	}
}
var a=[2,7,4,1,5,3];
bubbleSort(a);

function selectionSort(arr)
{
	for(var i=0;i<arr.length;i++)
	{
		var iMin = i;
		for(var j=i+1;j<arr.length-1;j++)
		{
			if(a[j]<a[iMin])
				iMin = j;
		}
		swap(arr,i,iMin);
	}
}

function insertionSort(arr)
{
	for(var i=0;i<arr.length-1;i++)
	{
		var value = arr[i];
		var hole = i;
		while(hole>0 && arr[hole-1]>value)
		{
			arr[hole]=arr[hole-1];
			hole = hole-1;
		}
		arr[hole] = value;
	}
}

function quickSort(arr,start,end)
{
	if(start<end)
	{
		var pIndex = partition(arr,start,end);
		quickSort(arr,start,pIndex-1);
		quickSort(arr,pIndex+1,end);
	}
}
//supporting function for quick sort
function partition(arr,start,end)
{
	var pivot = arr[end];
	var pIndex = start;

	for(var i=0;i<arr.length;i++)
	{
		if(arr[i] <= pivot)
		{
			swap(arr,i,pIndex++);
		}
	}
	swap(arr,pIndex,end);
	return pIndex;
}
var request = new XMLHttpRequest();


	request.onreadystatechange = function(){


		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status === 200)
			{
				var names = request.responseText;
				names = JSON.parse(names);
	var list = '';
	for(var i = 0 ; i < names.length; i++)
	{
	list += '<li>' + names[i] + '</li>';

	}
	var ul = document.getElementById('namelist');
	ul.innerHTML = list

			}
		}
	};
	request.open('POST', '/getposts', true) ;
	request.setRequestHeader('Content-Type','application/json');
	request.send(JSON.stringify({token:  'f59573c745ae0191e84c6993efe2901cb8272c2d9f0780f2'}));


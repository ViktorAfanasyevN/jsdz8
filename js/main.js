var obj ={}
var rawFile = new XMLHttpRequest()
rawFile.open('GET','img/collection.json')
rawFile.onreadystatechange = function () {
	if(rawFile.readyState === 4)
		if(rawFile.status === 200 || rawFile.status == 0) {
			obj= JSON.parse(rawFile.response)
		for(var elem in obj) {
			let link_ = document.createElement('a')
			let img = link_.appendChild(document.createElement('img'))
			img.alt = obj[elem].title
			img.src = obj[elem].ref
			link_.href = obj[elem].ref
			let divTitle = document.createElement('div')
			divTitle.textContent = obj[elem].title
			let div = document.createElement('div')
			div.appendChild(link_)
			div.appendChild(divTitle)
			document.body.appendChild(div)
		}
	}
}
rawFile.send(null);


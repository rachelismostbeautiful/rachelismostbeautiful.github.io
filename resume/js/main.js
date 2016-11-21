window.onload = function(){
	let oPs = document.querySelectorAll("p");
	for(let i = 0; i < oPs.length; i++){
		oPs[i].contentEditable = true;
	}
	let names = document.querySelectorAll(".name");
	for(let i = 0; i < names.length; i++){
		names[i].contentEditable = true;
	}

	

	let deletes = document.querySelectorAll(".describe p");
	for(let i = 0; i < deletes.length; i++){
		let item = document.createElement("i");
		item.className = "icon-remove remove";
		deletes[i].appendChild(item);
	}

	let removes = document.querySelectorAll(".remove");
	for(let i = 0; i < deletes.length; i++){
		removes[i].onclick = function(){
			this.parentNode.parentNode.removeChild(this.parentNode);
		}
	}

	// let plus = document.querySelectorAll(".details .name");
	// for(let i = 0; i < plus.length; i++){
	// 	let item = document.createElement("i");
	// 	item.className = " icon-plus add";
	// 	plus[i].appendChild(item);
	// }

	// let adds = document.querySelectorAll(".add");
	// for(let i = 0; i < adds.length; i++){
	// 	adds[i].onclick = function(){
	// 		let item = document.createElement("p");
	// 		item.innerHTML = " ";
	// 		this.children[1].appendChild(item);
	// 	}
	// }

}
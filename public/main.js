var inp = document.getElementById("search-bar");
var btn_search = document.getElementById('btn-search');
var mydiv = document.getElementById("test");

function search() {
	btn_search.addEventListener("click", function (e) {

		removeProducts();

		var makeupIndex = inp.value;

		if (makeupIndex === "") {

			alert("Type Something!");
		} else {

			makeupIndex = searchCases(makeupIndex);

			fetch('/search/' + makeupIndex)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {

					if (data.length <= 0) {
						alert("Sorry, No Match Found");
						//clear search box
						inp.value = '';
					} else {
						viewProducts(data);
					}

				}).catch(function (err) {
					return console.log(err)
				})

		}
	})
}

function viewProducts(array) {

	array.map(element => {

		var product = document.createElement('div');
		product.setAttribute('class', 'container-div');
		mydiv.appendChild(product);
		var brand = document.createElement('h1');
		brand.setAttribute('class', 'div-hd1');
		brand.innerText = element.brand;
		var name = document.createElement('h2');
		name.setAttribute('class', 'div-hd2');
		name.innerText = element.name;
		var image = document.createElement('IMG');
		image.setAttribute('class', 'product-img');
		image.src = element.image;
		image.alt = "product image"
		var price = document.createElement('h5');
		price.setAttribute('class', 'div-hd5');
		price.innerText = element.price + element.currency;
		product.appendChild(brand);
		product.appendChild(name);
		product.appendChild(image);
		product.appendChild(price);
	});
	//clear search box
	inp.value = '';
}

function removeProducts() {
	if (mydiv) {
		while (mydiv.firstChild) {
			mydiv.firstChild.remove();
		}
	}
}

function searchCases(value) {
	//----- making some miss typing cases work
	//first case
	if (value === "lipliner" || value === "lip liner") {
		value = "lip_liner";
	}
	//other cases ... need to work on..
	return value;
}

search();

var container = document.getElementById('container');
var btn-search = document.getElementById('btn-search');
var search-bar = document.getElementById('search-bar');
var products = document.createElement('div');
var formProduct = document.getElementsByTagName('form');
product.setAttribute('class', 'products');
btn-search.addEventListener("click", searchproduct);

function searchproduct() {
	productName = search-bar.value;
	myproducts = []
	const result = (productName) => {
		url = '/search/' + productName;
		return fetch(url)
    .then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				alert('Connection Error , status Code : ' + response.status);
			}
		})
    .then((myproducts) => {
				for (var i = 0; i < myproducts.length; i++) {

					var createresult = function (myproducts) {
						//start add product:
						var product = document.createElement('div');
						product.setAttribute('class', 'product');
						var brand = document.createElement('h1');
						brand.setAttribute('class', 'div-hd1');
						brand.innerText = myproducts[i].brand;
						var name = document.createElement('h2');
						name.setAttribute('class', 'div-hd2');
						name.innerText = myproducts[i].name;
						var image = document.createElement('img');
						image.setAttribute('class', 'product-img');
						image.src = myproducts[i].image_link;
						var price = document.createElement('h5');
						price.setAttribute('class', 'div-hd5');
						price.innerText = myproducts[i].price + myproducts[i].price_sign;
						product.appendChild(brand);
						product.appendChild(name);
						product.appendChild(image);
						product.appendChild(price);
						products.appendChild(product);
					};
				});
		};
	};
  formProduct.reset();
};

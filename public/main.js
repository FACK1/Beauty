function search() {
var inp = document.getElementById("search-bar");
var btn_search = document.getElementById('btn-search');
var products = document.createElement('div');
var container = document.getElementById('container');
var mydiv = document.getElementById("test");

	btn_search.addEventListener("click", function (e) {
		// removeList();

	var makeupIndex = inp.value;
    console.log('dddd',makeupIndex);

		if (makeupIndex) {
			fetch('/search/' + makeupIndex)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {


// container.replaceChild(todoListNode, container.firstChild);

      for (var i = 0; i < data.length; i++) {
    //    var images = String(data[i].image_link))
      //  console.log(images);
        //

        // 					var createresult = function (data) {
        // 						//start add product:
//         var test = document.createElement('DIV')
//         test.setAttribute("class", "me");
// mydiv.appendChild(test);

        						var product = document.createElement('div');
        						product.setAttribute('class', 'container-div');
                    mydiv.appendChild(product);
        						var brand = document.createElement('h1');
        						brand.setAttribute('class', 'div-hd1');
        						brand.innerText = data[i].brand;
        						var name = document.createElement('h2');
        						name.setAttribute('class', 'div-hd2');
        						name.innerText = data[i].name;
        						var image = document.createElement('IMG');
        						image.setAttribute('class', 'product-img');
        					  image.src = data[i].image;
        						var price = document.createElement('h5');
        						price.setAttribute('class', 'div-hd5');
        						price.innerText = data[i].price + data[i].currency;
        						product.appendChild(brand);
        						product.appendChild(name);
        						product.appendChild(image);
        						product.appendChild(price);
        					};









        //end
				})
		}
	})
}

// function viewList(array) {
// 	var container = document.getElementById("autocomplete");
// 	//removeList();
// 	document.getElementById("autocomplete").innerHTML="";
// 	// container.setAttribute("id", "autocomplete-list");
// 	inp.parentNode.appendChild(container);
// 	console.log(array.length);
// 	for (i = 0; i < array.length; i++) {
// 		var item = document.createElement("option");
// 		item.setAttribute("class", "autoComplete-item");
// 		item.innerHTML = array[i];
// 		container.appendChild(item);
// 	}
// }
//
// function removeList() {
// 	if (document.getElementById("autocomplete")) {
// 	 var list =	document.getElementById("autocomplete");
//     while(list.firstChild){
//     		list.firstChild.remove();
// 		}
// 	}
// }


search();

//end
// product.setAttribute('class', 'products');
// btn_search.addEventListener("click", searchproduct);
//
// function searchproduct() {
// 	//var productName = search_bar.value;
// 	var data = []
// 	const result = () => {
// 		url = '/search/' + search_bar.value;
//     console.log(url)
// 		return fetch(url)
//     .then((response) => {
// 			if (response.status == 200) {
// 				return response.json();
// 			} else {
// 				alert('Connection Error , status Code : ' + response.status);
// 			}
// 		})
//     .then((data) => {
// 				for (var i = 0; i < data.length; i++) {
//
// 					var createresult = function (data) {
// 						//start add product:
// 						var product = document.createElement('div');
// 						product.setAttribute('class', 'product');
// 						var brand = document.createElement('h1');
// 						brand.setAttribute('class', 'div-hd1');
// 						brand.innerText = data[i].brand;
// 						var name = document.createElement('h2');
// 						name.setAttribute('class', 'div-hd2');
// 						name.innerText = data[i].name;
// 						var image = document.createElement('img');
// 						image.setAttribute('class', 'product-img');
// 						image.src = data[i].image_link;
// 						var price = document.createElement('h5');
// 						price.setAttribute('class', 'div-hd5');
// 						price.innerText = data[i].price + data[i].price_sign;
// 						product.appendChild(brand);
// 						product.appendChild(name);
// 						product.appendChild(image);
// 						product.appendChild(price);
// 						products.appendChild(product);
// 					};
// 				});
// 		};
// 	};
//   //formProduct.reset();
// };

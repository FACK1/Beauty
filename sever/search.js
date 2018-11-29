const search = (data) => {
	const filteredData = data.splice(0, 6);
	const result = filteredData.map(obj => ({
		brand: obj.brand,
		name: obj.name,
		image: (obj.image_link).split('?')[0],
		price: obj.price,
		currency: obj.price_sign,
	}));
	return result;
};

module.exports = (search);

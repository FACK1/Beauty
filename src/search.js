const search = (data) => {

    var filteredData = data.splice(0,5);
    var result = filteredData.map(obj =>{
    return  {
        "brand": obj.brand,
        "name": obj.name,
        "image": obj.image_link,
        "price": obj.price,
        "currency": obj.price_sign
      }
})

}

module.exports = (search)

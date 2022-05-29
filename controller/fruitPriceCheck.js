const fruitPriceCheck = {
  checkPrice(price) {
    if (price === undefined || price === null || price === "") {
      return false;
    }

    return price.toString().match(/^[0-9]{1,}$/g);
  },
};

module.exports = fruitPriceCheck;

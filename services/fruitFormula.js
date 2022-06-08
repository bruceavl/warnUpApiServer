const fruitOperations = {
  getPrice(price) {
    const date = new Date();
    // Price goes up on Fridays
    if (date.getDay() === 5) {
      return price + 5;
    }

    return price;
  },
};

module.exports = fruitOperations;

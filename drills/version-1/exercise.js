function candySalesToObject(candy){
  return candy.reduce(function(accumulator, item, index){
  switch(index){
    case 0:
      accumulator.item = item;
      break;
    case 1:
      accumulator.price = item;
      break;
    case 2:
      accumulator.quantity = item;
      break;
    default:
      return;
  }
  return accumulator;
},
{});
}

function salesDayToObject(date, saleObj){
  var dateObj = {
    date: date,
    sales: saleObj[date].map(candySalesToObject)
  };
  return dateObj;
}


function allSalesToArray(completeObj) {
  return Object.keys(completeObj).map(function(oneDate){
    return salesDayToObject(oneDate, completeObj);
  });
}


module.exports = {
    // Uncomment these functions as you write them
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};

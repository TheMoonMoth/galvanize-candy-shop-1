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


function salesDayToObject(day, saleObj){
  var dayObj = {date: day, sales: []};
  var saleValues = Object.values(saleObj);
  for (var i = 0; i < saleValues[0].length; i++) {
    dayObj.sales.push(saleValues[0][i].reduce(function(accumulator, item, index){
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
          break;
      }
    return accumulator;
    },{}));
  }
  return dayObj;
}


function allSalesToArray(completeObj){
  var finalSalesArray = [];
  var dateKeys = Object.keys(completeObj);
  dateKeys.map(function(unit){
    var dayObj = {date: unit, sales: []};
    completeObj[unit].map(function(item){
      var oneItem = {item: item[0], price: item[1], quantity: item[2]};
      dayObj.sales.push(oneItem);
    });
    finalSalesArray.push(dayObj);
  });
return finalSalesArray;
}

module.exports = {
    // Uncomment these functions as you write them
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};

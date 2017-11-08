function candySalesToObject(array) {
  var candyObj = {};
  candyObj.item = array[0];
  candyObj.price = Number(array[1]);
  candyObj.quantity = array[2];
  return candyObj;
}

//THIS FUNCTION WORKS FOR THE README.MD INSTRUCTIONS
//
//function salesDayToObject(date, array){
//   var dayObj = {date: date, sales: []};
//   for(var i = 0; i < array.length; i++) {
//     var candyObj = {};
//     candyObj.item = array[i][0];
//     candyObj.price = Number(array[i][1]);
//     candyObj.quantity = array[i][2];
//     dayObj.sales.push(candyObj);
//   }
//   return dayObj;
// }

//THIS FUNCTION PASSES THE EXERCISE-SPEC.JS TESTS
function salesDayToObject(date, object){
  var dayObj = {date: date, sales: []};
  var dumbArray = Object.values(object);
  for(var i = 0; i < dumbArray[0].length; i++) {
    var candyObj = {};
    candyObj.item = dumbArray[0][i][0];
    candyObj.price = Number(dumbArray[0][i][1]);
    candyObj.quantity = dumbArray[0][i][2];
    dayObj.sales.push(candyObj);
  }
  return dayObj;
}

function allSalesToArray(object) {
  const completeArray = [];
  var datesArray = Object.keys(object);
  var itemArray = Object.values(object);

  for (var i = 0; i < datesArray.length; i++) {
    completeArray.push({date: datesArray[i], sales: []});
  }

  for (var k = 0; k < itemArray.length; k++)
    for(var j = 0; j < itemArray[k].length; j++) {
      var candyObj = {};
      candyObj.item = itemArray[k][j][0];
      candyObj.price = Number(itemArray[k][j][1]);
      candyObj.quantity = itemArray[k][j][2];
      completeArray[k].sales.push(candyObj);
    }
  return completeArray;
}

module.exports = {
    // Uncomment these functions as you write them
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};

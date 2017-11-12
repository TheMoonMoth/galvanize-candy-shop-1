function getItemById(itemList, number){
  var wantCandy = itemList.filter(function(unit){
    return unit.id === number;
  });
  return wantCandy[0];
}

function buildTransactions(saleList, itemList){
  return saleList.map(function(each){return Object.assign(each, getItemById(itemList, each.itemId));
  }).map(function(each){
      delete each.id;
      return each;
  });
}

function getTransactionsByItemDescription(fullList, description) {
  return fullList.filter(function(each){
    return each.description === description;
  });
}

module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}

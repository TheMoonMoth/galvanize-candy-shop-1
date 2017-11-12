function getTotalItemSales(saleList, itemId){
  return saleList.reduce(function(totaler, each){
    if (each.itemId === itemId) {
      return totaler + each.quantity;
    } else {
      return totaler;
    }
  }, 0);
}

function addTotalSalesToItems(saleList, itemList){
  return itemList.map(function(each){
    each.quantity = getTotalItemSales(saleList, each.id);
    return each;
  });
}

function addTotalValueToItems(saleList, itemList){
  return addTotalSalesToItems(saleList, itemList).map(function(each){
    each.totalValue = (Number(each.quantity) * Number(each.price)).toFixed(2);
    return each;
  });
}



module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    addTotalSalesToItems,
    addTotalValueToItems
}

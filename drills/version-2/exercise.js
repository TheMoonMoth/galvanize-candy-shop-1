function getItemById(itemList, number){
  var wantCandy = itemList.filter(function(unit){
    return unit.id === number;
  });
  return wantCandy[0];
}

function buildTransactions(salesList, itemsList) {
  var salesForm = [];
  var oneItem = {itemId: 0, description: "", price: 0, quantity: 0};
  salesList.map(function(sale){
    itemsList.map(function(item){
      if (sale.itemId === item.id){
      oneItem = {itemId: sale.itemId, description: item.description, price: Number(item.price), quantity: sale.quantity};
      }
    });
    salesForm.push(oneItem);
  });
  return salesForm;
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

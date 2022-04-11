const totalProdutos = db.produtos.countDocuments({});

db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos,
});

db.resumoProdutos.findOne(
  {},
  { _id: 0 },
);
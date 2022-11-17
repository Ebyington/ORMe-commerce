// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {

});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey:"id"
});
// Products belongToMany Tags (through ProductTag)
ProductTag.belongsToMany(Tag, {
  foreignKey: "user_id"
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignKey: "id"
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

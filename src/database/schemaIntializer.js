const Properties= require('./models/properties')
const Product = require('./models/product')
const Category=require('./models/categories')
const Manufacture = require('./models/manufacture')


const db = require('./connector')

Product.hasOne(Properties)
//Product.hasMany(Properties)
Product.belongsTo(Categories)

Product.belongsToMany(Manufacture,{
    through:"Product_Manufacturer",
    foreignKey:"product_id",
    otherKey:"manufacture_id",
    timestamp:"false"
})


Manufacture.belongsToMany(Product,{
    through:"Product_Manufacturer",
    foreignKey:"manufacture_id",
    otherKey:"product_id",
    timestamp:"false"
})

db.sync()
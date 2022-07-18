const products = [
    {
        name: 'apple', price: 5000
    },
    {
        name: 'samsung', price: 4000
    },
    {
        name: 'apple', price: 5000
    },
    {
        name: 'huawei', price: 3000
    },
    {
        name: 'moto', price: 5000
    }
];

const findPrice = products.find(product => product.price == 5000);
console.log(findPrice);
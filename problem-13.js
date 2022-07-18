const products = {
    name: 'Mackbook Pro',
    brand: 'Apple',
    specification: {
        ram: '16 gb',
        color: 'gray',
        ssd: 256,
        processor: 'core i5'
    }
};

const { name } = products;
console.log(name);

// optional chaining
const lenovoBrand = products.brand?.lenovo;
console.log(lenovoBrand);

const size = products?.size ?? 'there is no size';
console.log(size);
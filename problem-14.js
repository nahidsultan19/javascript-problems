const products = {
    name: 'Mackbook Pro',
    brand: 'Apple',
    specification: {
        ram: '16 gb',
        ssd: 256,
        processor: 'core i5'
    },
    color: ['silver', 'gray', 'black'],
    methodF: () => {
        console.log(products.name);
    }
};

const result = products.methodF;
console.log(result);
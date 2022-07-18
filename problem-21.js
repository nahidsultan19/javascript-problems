const names = ['md barkat', 'nahid', 'md arshad', 'huzur'];

function findName() {
    for (let name of names) {
        if (name.includes('md')) {
            console.log(name);
        }
    }
}
findName();
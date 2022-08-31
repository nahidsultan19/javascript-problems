// largest word

function largestWord(friends) {
    let largestName = '';
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length > largestName.length) {
            largestName = element;
        }
    }
    return largestName;
}

const friendList = ['abul', 'babul', 'tusar', 'abur rahman', 'aro onek']
const result = largestWord(friendList)
console.log(result);
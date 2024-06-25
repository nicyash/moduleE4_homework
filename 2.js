function isKey(key, obj) {
    if (obj.hasOwnProperty(key)) {
       return true
     } else {
       return false
     }
}

const auto = {
    model: 'sedan',
    engine: 'disel',
    year: 2021,
};

console.log(isKey('engine', auto));

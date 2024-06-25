function getObjectKeyValues(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key + ' = ' + obj[key]);
      }
    }
}

const auto = {
    model: 'sedan',
    engine: 'disel',
    year: 2021,
};

getObjectKeyValues(auto);

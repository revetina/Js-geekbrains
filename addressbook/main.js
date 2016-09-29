// User storage
var users = [{
    firstName: 'Dmitry',
    lastName: 'Kozlov',
    birthDay: '16.07.1990',
    phones: [
        '89001234567',
        '83431234567'
    ]
}, {
    firstName: 'Ivan',
    lastName: 'Petrov',
    birthDay: '08.06.1956',
    phones: [
        '89001234567',
        '83431234567'
    ]
}];

function addUser(users) {
    var user = {};
    user.firstName = prompt('Введите имя:');
    user.lastName = prompt('Введите фамилию:');
    user.birthDay = prompt('Дату рождения:');
    user.phones = [];
    while (true) {
        var phone = prompt('Номер телефона:(для выхода введите пустой номер)');
        if (!phone) break;
        user.phones.push(phone);
    }
    users.push(user);
}

function csvFormat(users) {
    return users.map(function(user) {
        return Object.keys(user).map(function(key) {
            if (typeof user[key] == 'string' || typeof user[key] == 'number') return '"' + user[key] + '"';
            else return user[key].map(function(phone) {
                return '"' + phone + '"';
            }).join(';');
        }).join(';');
    }).join('\r\n');
}
addUser(users);
console.log(csvFormat(users));
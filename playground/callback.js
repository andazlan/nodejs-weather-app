//http://maps.googleapis.com/maps/api/geocode/json?address
var getUser = (id, callback) => {
    var user = {
        id : id,
        name : "Andrew"
    };

    setTimeout(() => {
        callback(user);
    }, 3000)
};

getUser(31, (userObject) => {
    console.log(userObject);
});
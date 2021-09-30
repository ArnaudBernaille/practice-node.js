module.exports = (x,y,callback) => {
    console.log("Les valeurs passées sont " + x + " " + y);
    console.log("Les valeurs passées après le callback sont " + callback(x,y));
};




const rectangle = require("./rectangle");
var rect = require("./rectangle");
var arnaudVar = require("./testArnaud");

function solRect(l,b){
    console.log("solving rectangle with l = " + l + " and b = " + b);
    rect(l,b,(err,rectangle) => {
        if (err) {
            console.log("ERROR ", err.message);
        }
        else {
            console.log("The area of the rectangle of dimension" + l + " " + b + "is" + rectangle.area());
            console.log("The perimeter of the rectangle of dimension" + l + " " + b + "is" + rectangle.perimeter());

        }

    });
    console.log("ce truc est après le call du rectangle");
}

function arnaud(x, y){
    console.log("appel de la fonction Arnaud");
    arnaudVar(x,y, (x,y)=>{return x*y});
}


arnaud(2,3);
//solRect(2,4);
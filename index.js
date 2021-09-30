var rect = require("./rectangle");

function solRect(l,b){
    console.log("solving rectangle with l = " + l + " and b = " + b);
    if (l < 0 || b < 0) {
        console.log("les dimensions du rectangles doivent etre supérieur à 0");
    }

    else{
        console.log("the area of the rectangle is " + rect.area(l,b));
        console.log("the perimeter of the rectangle is " + rect.perimeter(l,b));
    }
}

solRect(2,4);
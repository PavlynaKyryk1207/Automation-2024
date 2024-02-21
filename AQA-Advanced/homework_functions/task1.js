function sum(width, height) {
 width = 8
 height = 12
console.log ((width*2) + (height*2))
}
sum()

const rectangle = function (width1 = 10, height1 = 4 ) {
    return (width1*2) +  (height1*2);
};
console.log(rectangle () )

let myFunction = (width2 = 4, height2 = 5) => height2*2 + width2*2;
console.log (myFunction())
 

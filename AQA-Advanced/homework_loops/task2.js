const averageGrade = 100

switch (true) {
    case (averageGrade >0 && averageGrade <=60):
    console.log('Fail')
    break;
 case (averageGrade >60 && averageGrade<=70):
    console.log('Pass')
    break;
case (averageGrade >71 && averageGrade<=80):
    console.log('Merrit')
break;
case (averageGrade >81 && averageGrade <=90):
console.log('Distinction')
break;
case (averageGrade >91 && averageGrade <=100):
console.log('Highest Honorable Distinction') 
}


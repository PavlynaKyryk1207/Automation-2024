let objectMainUsers = [
     {firstName: 'Rita', LastName: 'Korostopych', nationality: 'French', age: 87, email: 'rita67@gmail.com'},
     {firstName1: 'Sara', LastName1: 'Tracy', nationality: 'English', age1: 45, email: 'sara@gmail.com'},
    {firstName2: 'Lima', LastName2: 'Trojan', nationality: 'Italian', age2: 34, email: 'lima67@gmail.com'},   
];
for (let {firstName, LastName, nationality, age, email} of objectMainUsers){
    console.log(`Name: ${firstName}, Surname: ${LastName}, Nationality: ${nationality}, Age: ${age}, Email: ${email}`);
}

// const {LastName: Surname, firstName: Name, age: Age} = objectMainUsers 
// console.log(Surname, Name, Age)

const Surname = objectMainUsers.LastName;
const Name = objectMainUsers.firstName;
const Age = objectMainUsers.age;
console.log(Surname, Name, Age)
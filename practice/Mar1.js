array2JS();

function array2JS() {
    // map
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(item => item * 2);
    console.log(doubled); // [2, 4, 6, 8]

    // filter
    const evens = numbers.filter(item => item % 2 === 0);
    console.log(evens); // [2, 4]   

    const students = [
        { name: 'Quincy', grade: 96 },
        { name: 'Jason', grade: 84 },
        { name: 'Alexis', grade: 100 },
        { name: 'Sam', grade: 65 },
        { name: 'Katie', grade: 90 }
      ];
      
    //const studentGrades = students.filter(student => student.grade >= 90);
    const studentGrades = students.filter(function(student){
        return student.grade>=90;
    });
    console.log(studentGrades);

    // reduce
    const sum = numbers.reduce(function (result, item) {
     return result + item;
    }, 0);
    console.log(sum); // 10

    const arrstr = [5, 10, "a", "rt", "h"];
    const name = arrstr.reduce(function(name, element){
        return name+element;
    });
    console.log(name);


    var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
    var count=0;
    var petCounts = pets.reduce(function(obj, pet){
        console.log(typeof(obj)); // object: getting printed only once?
        count++; // executing 7 times
        if (!obj[pet]) {
            obj[pet] = 1;
        } else {
            obj[pet]++;
        }
        return obj;
    }, {});

    var petCounts = pets.reduce(function(obj, pet){
        console.log(typeof(obj)); // string
        if (!obj[pet]) {
            obj[pet] = 1;
        } else {
            obj[pet]++;
        }
        return obj;
    });

    console.log(petCounts); 
    console.log(count);
}
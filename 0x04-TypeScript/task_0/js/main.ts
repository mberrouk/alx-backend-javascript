interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

const firstStudent: Student = {
    firstName: 'FirstStudent',
    lastName: 'any',
    age: 25,
    location: 'Bengurir'
};

const secondStudent: Student = {
    firstName: 'second',
    lastName: 'LastName',
    age: 25,
    location: 'Casablanca'
};

const studentsList : Student[] = [firstStudent, secondStudent];
const body: HTMLBodyElement  = document.getElementsByTagName('body')[0];
console.log(body);
alert(studentsList);

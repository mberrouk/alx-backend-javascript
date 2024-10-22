interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [attrName: string]: any
}

const myObj: Teacher = {
    firstName : 'theFirstName',
    lastName : 'theLastName',
    fullTimeEmployee : true,
    location : 'Morocco',
    contract : 10
}

interface Directors extends Teacher {
    numberOfReports: number
}

function printTeacher(firstName: string, lastName: string) : void {
    console.log(`${firstName.substring(0, 1)}. ${lastName}`);
}

printTeacher('My test', 'Last');
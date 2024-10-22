interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attrName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return (`${firstName.substring(0, 1)}. ${lastName}`);
}

interface IStudentClass {
    workOnHomework() : string;
    displayName(): string;
}

interface IStudentClassConstructor {
    new (firstName: string, lastName: string): IStudentClass;
}

class StudentClass implements IStudentClass {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework = () : string => 'Currently working';
    displayName = () : string => this.firstName;
}
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome = () : string  => 'Working from home';
    getCoffeeBreak = () : string => 'Getting a coffee break';
    workDirectorTasks = () : string => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
    workFromHome = () : string  => 'Cannot work from home';
    getCoffeeBreak = () : string => 'Cannot have a break';
    workTeacherTasks = () : string => 'Getting to work';
}

function createEmployee(salary: number | string) :  Director | Teacher {
    if (typeof(salary) === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof(Director);
}

function executeWork(employee: Teacher | Director): void {
    if (employee instanceof(Teacher)) {
        console.log(employee.workTeacherTasks());
    } else {
        console.log(employee.workDirectorTasks());
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    return (todayClass === 'Math' ? 'Teaching Math' : 'Teaching History');
}

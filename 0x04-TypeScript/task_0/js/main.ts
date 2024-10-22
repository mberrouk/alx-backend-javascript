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
const mytitle: HTMLCollection = document.getElementsByClassName("title");
const tableVar: Element = document.createElement('table');
const initRow: Element = document.createElement('tr');
const ncolumn: Element = document.createElement('td');
const nText: Text = document.createTextNode('Name');
const lcolumn: Element = document.createElement('td');
const lText: Text = document.createTextNode('Location');
const montest: Text = document.createElement('td').appendChild(document.createTextNode('Name '));

ncolumn.appendChild(nText);
lcolumn.appendChild(lText);
initRow.appendChild(ncolumn);
initRow.appendChild(lcolumn);
tableVar.appendChild(initRow);

for (const student of studentsList) {
    const row: Element = document.createElement('tr');
    const locationColumn : Element = document.createElement('td');
    const NameColumn : Element = document.createElement('td');
    const locationText: Text = document.createTextNode(student.location);
    const NameText: Text = document.createTextNode(student.firstName);
    locationColumn.appendChild(locationText);
    NameColumn.appendChild(NameText);
    row.appendChild(NameColumn);
    row.appendChild(locationColumn);

    
    tableVar.appendChild(row);
}

tableVar.setAttribute('id', 'tab');
document.body.appendChild(tableVar);

document.querySelector('table').style.margin = '1rem auto';
document.querySelector('table').style.border = '1px black solid';
document.querySelector('table').style.padding = '.5rem';

document.querySelectorAll('td').forEach( (element) =>  {
    element.style.margin = '1rem auto';
    element.style.border = '1px black solid';
    element.style.padding = '.5rem';
});

document.querySelectorAll('tr').forEach( (element) =>  {
    element.style.margin = '1rem auto';
    element.style.border = '1px black solid';
    element.style.padding = '.5rem';
});

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const students: Student[] = [
  { firstName: 'Nouha', lastName: 'Nalla', age: 24, location: 'Casa' },
  { firstName: 'Sana', lastName: 'Bayn', age: 30, location: 'Rabat' }
];

function createTableCell(text: string): HTMLTableCellElement {
  const cell = document.createElement('td');
  cell.innerText = text;
  cell.style.border = '1px solid gray';
  cell.style.padding = '.5rem';
  return cell;
}

function createTableHeaderCell(text: string): HTMLTableCellElement {
  const cell = document.createElement('th');
  cell.innerText = text;
  cell.style.border = '1px solid gray';
  cell.style.padding = '.5rem';
  return cell;
}

function createTableHeader(): HTMLTableSectionElement {
  const thead = document.createElement('thead');
  thead.append(createTableHeaderCell('First Name'));
  thead.append(createTableHeaderCell('Location'));
  return thead;
}

function createTableRow(student: Student): HTMLTableRowElement {
  const row = document.createElement('tr');
  row.append(createTableCell(student.firstName));
  row.append(createTableCell(student.location));
  return row;
}

function createTable(students: Student[]): HTMLTableElement {
  const table = document.createElement('table');
  table.style.border = '1px solid gray';
  table.style.borderCollapse = 'collapse';
  table.append(createTableHeader());

  students.forEach(student => {
    table.append(createTableRow(student));
  });

  return table;
}

document.body.append(createTable(students));

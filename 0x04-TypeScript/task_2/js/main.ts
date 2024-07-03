// Define the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // Define the TeacherInterface
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Implement the Director class
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  // Implement the Teacher class
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  // Create the createEmployee function
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Define the isDirector function as a type predicate
  function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // Define the executeWork function
  function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }
  
  // Define the Subjects string literal type
  type Subjects = 'Math' | 'History';
  
  // Define the teachClass function
  function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
      return 'Teaching Math';
    } else if (todayClass === 'History') {
      return 'Teaching History';
    }
  }
  
  // Example usage
  console.log(createEmployee(200));
  console.log(createEmployee(1000));
  console.log(createEmployee('$500'));
  
  executeWork(createEmployee(200));
  executeWork(createEmployee(1000));
  
  console.log(teachClass('Math'));
  console.log(teachClass('History'));

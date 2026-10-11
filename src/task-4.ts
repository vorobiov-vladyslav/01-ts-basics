export function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}, age: ${age}`);
  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo('Alice', 25);
printUserInfo('Bob', 30, 'bob@example.com');

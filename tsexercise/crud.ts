//creating  a class student
class IStudent {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

interface I {
  getAllUsers();
}

class Student implements I {
  users: IStudent[];
  constructor() {
    this.users = [
      { id: 1, name: "Ragul", age: 22, isActive: true },
      { id: 2, name: " Nethaji", age: 23, isActive: true },
      { id: 3, name: "Barani", age: 26, isActive: false },
    ];
  }

  getAllUsers(): IStudent[] {
    const activeUsers = this.users.filter((user) => user.isActive === true);
    return activeUsers;
  }


  getUserById(id: number): IStudent | undefined {
    return this.users.find((user) => user.id === id && user.isActive === true);
  }

  insertUser(user: IStudent): void {
    this.users.push(user);
  }

  editUser(id: number, updatedUser: Partial<IStudent>): void {
    const user = this.users.find((user) => user.id === id);

    if (user) {
      Object.assign(user, updatedUser);
    }
  }

  deleteUser(id: number): void {
    const user = this.users.find((user) => {
      if (user.id === id) {
        user.isActive = false;
      }
    });

    // if (user) {

    // Object.assign(user, deleteUserId);

    // }
  }
}
const detail = new Student();

console.log("All Students:", detail.getAllUsers());

// const newUser: IStudent= { id: 4, name: "Marudhu", age:22 };
let a={ id: 4, name: "Marudhu.k", age: 22, isActive: true }
detail.insertUser(a);

detail.insertUser({ id: 5, name: "kishore", age: 23, isActive: true });

console.log("All Users after Insert:", detail.getAllUsers());



const userToEditId = 1;

const updatedUserInfo = { name: "Ragul.S",age:24 };

detail.editUser(userToEditId, updatedUserInfo);

console.log("All Users after Edit:", detail.getAllUsers());


let deletUserId: number = 5;

detail.deleteUser(deletUserId);

console.log("All Users after Edit:", detail.getAllUsers());

const userById = detail.getUserById(1);

console.log("User by ID:", userById);

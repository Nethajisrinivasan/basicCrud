var IStudent = /** @class */ (function () {
    function IStudent() {
    }
    return IStudent;
}());
var Student = /** @class */ (function () {
    function Student() {
        this.users = [
            { id: 1, name: "Ragul", age: 22, isActive: true },
            { id: 2, name: " Nethaji", age: 23, isActive: true },
            { id: 3, name: "Barani", age: 26, isActive: false },
        ];
    }
    Student.prototype.getAllUsers = function () {
        var activeUsers = this.users.filter(function (user) { return user.isActive === true; });
        return activeUsers;
    };
    Student.prototype.getUserById = function (id) {
        return this.users.find(function (user) { return user.id === id && user.isActive === true; });
    };
    Student.prototype.insertUser = function (user) {
        this.users.push(user);
    };
    Student.prototype.editUser = function (id, updatedUser) {
        var user = this.users.find(function (user) { return user.id === id; });
        if (user) {
            Object.assign(user, updatedUser);
        }
    };
    Student.prototype.deleteUser = function (id) {
        var user = this.users.find(function (user) {
            if (user.id === id) {
                user.isActive = false;
            }
        });
        // if (user) {
        // Object.assign(user, deleteUserId);
        // }
    };
    return Student;
}());
var detail = new Student();
console.log("All Students:", detail.getAllUsers());
// const newUser: IStudent= { id: 4, name: "Marudhu", age:22 };
detail.insertUser({ id: 4, name: "Marudhu.k", age: 22, isActive: true });
detail.insertUser({ id: 5, name: "kishore", age: 23, isActive: true });
console.log("All Users after Insert:", detail.getAllUsers());
var userToEditId = 1;
var updatedUserInfo = { name: "Ragul.S" };
detail.editUser(userToEditId, updatedUserInfo);
console.log("All Users after Edit:", detail.getAllUsers());
var deletUserId = 5;
detail.deleteUser(deletUserId);
console.log("All Users after Edit:", detail.getAllUsers());
var userById = detail.getUserById(1);
console.log("User by ID:", userById);

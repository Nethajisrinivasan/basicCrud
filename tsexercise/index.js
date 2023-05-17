"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// created a student class
var studentDb = /** @class */ (function () {
    function studentDb(name, age, mobile, email) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;
        this.email = email;
    }
    return studentDb;
}());
// implenting student
var students = /** @class */ (function () {
    function students(student) {
        this.student = student;
    }
    students.prototype.present = function (message) {
        console.log(this.student.name, this.student.mobile, message);
    };
    students.prototype.absent = function (message) {
        console.log(this.student, message);
    };
    return students;
}());
var s2 = new students(new studentDb("nethaji", 23, 9894426121, "nethaji.finstein.ai"));
s2.present("present");
// s2.absent("the student is absent today")

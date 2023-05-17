export {};
// created a student class
class studentDb {
    
  constructor(
    public name: string,
    public age: number,
    public mobile: number,
    public email: string
  ) {}
}

// created an interface
interface action {
  present(message: string);
  absent(message: string);
}
// implenting student
class students implements action {
  student: studentDb; // i get the studentDb data in a variable student
  constructor(student: studentDb) {
    this.student = student;
  }
  present(message: string) {
    console.log(this.student.name,this.student.mobile, message);
  }
  absent(message: string) {
    console.log(this.student, message);
  }
}

let s2 = new students(
  new studentDb("nethaji", 23, 9894426121, "nethaji.finstein.ai")
);
s2.present("present");
// s2.absent("the student is absent today")

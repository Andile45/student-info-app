type Grade = "A"| "B" | "C" | "D" | "F";

interface Student{
    name: string ,
    age: number,
    grade: Grade

}

function displayStudentInfo(student:Student):void{

    const greetingElement = document.getElementById("greeting");

    if(greetingElement){

        greetingElement.textContent = `Student : ${student.name} , Age : ${student.age} , Grade : ${student.grade}`;
    }else{
        console.error('Greeting element not found')
    }

}

const student1 : Student ={
    name: "Andile",
    age : 21,
    grade: "A"
};

const student2 : Student ={
    name:"Vutomi",
    age:19,
    grade:"C"


}

displayStudentInfo(student1);
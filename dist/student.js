function displayStudentInfo(student) {
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = `Student : ${student.name} , Age : ${student.age} , Grade : ${student.grade}`;
    }
    else {
        console.error('Greeting element not found');
    }
}
const student1 = {
    name: "Andile",
    age: 21,
    grade: "A"
};
const student2 = {
    name: "Vutomi",
    age: 19,
    grade: "C"
};
displayStudentInfo(student1);
export {};
//# sourceMappingURL=student.js.map
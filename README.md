# TypeScript Student Info Project 🎓

A simple TypeScript project that displays student information (name, age, grade) on a webpage.  
It demonstrates how to use **TypeScript types, interfaces, functions, and DOM manipulation**.

---

## 📂 Project Structure
my-project/
│── src/ # TypeScript files
│ └── student.ts
│── dist/ # Compiled JavaScript files
│ └── student.js
│── index.html # Webpage that displays student info
│── tsconfig.json # TypeScript configuration


---

## 🚀 Features
- Defines a **custom `Grade` type** with values `"A" | "B" | "C" | "D" | "F"`.
- Defines a **`Student` interface** with `name`, `age`, and `grade`.
- Includes a function **`displayStudentInfo`** that updates the DOM.
- Demonstrates how to compile TypeScript into JavaScript and use it in HTML.

---

## ⚡ Setup Instructions

### 1. Clone this repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


2. Install TypeScript

Make sure you have Node.js installed. Then install TypeScript globally:

npm install -g typescript

3. Compile TypeScript

Run the TypeScript compiler:

tsc


This will compile files from src/ into dist/.

4. Open the Project

Open index.html in your browser.
You should see the student information displayed.

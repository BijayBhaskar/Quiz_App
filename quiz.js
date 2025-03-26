export const quizQuestions = [
    {
        question: "Why do we need to use JavaScript with HTML Page?",
        options: [
            "To make use of DOM Properties and Events",
            "To add the functionality to the Webpage",
            "To use the related Libraries and Frameworks",
            "None of the Above"
        ],
        correctIndex: 1
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        options: [
            "String", 
            "Number", 
            "Object", 
            "Boolean"],
        correctIndex: 2
    },
    {
        question: "Which of the following loops will always execute at least once, regardless of the condition?",
        options: ["for loop", "while loop", "do...while loop", "forEach loop"],
        correctIndex: 2
    },
    {
        question: "How do you define a function in JavaScript?",
        options: ["function = myFunction() {}", "function myFunction() {}", "def myFunction() {}", "function: myFunction() {}"],
        correctIndex: 1
    },
    {
        question: "What is the correct syntax to access the first element of an array in JavaScript?",
        options: ["array[0]", "array(0)", "array{0}", "array.first()"],
        correctIndex: 0
    },
    {
        question: "Which method is used to add a new item at the end of an array?",
        options: ["array.push()", "array.unshift()", "array.pop()", "array.shift()"],
        correctIndex: 0
    },
    {
        question: "In ES6, which of the following is used to declare a block-scoped variable?",
        options: ["var", "let", "const", "Both let and const"],
        correctIndex: 3
    },
    {
        question: "What is the output of the following code? \n\n console.log(10 / '5');",
        options: ["2", "10", "Infinity", "NaN"],
        correctIndex: 0
    },
    {
        question: "Which of the following is used for error handling in JavaScript?",
        options: ["try...catch", "throw", "Promises", "All of the above"],
        correctIndex: 3
    },
    {
        question: "What is the scope of a variable declared with 'var' inside a function?",
        options: ["Block scope", "Global scope", "Local scope (function scope)", "Lexical scope"],
        correctIndex: 2
    },
    {
        question: "Which of the following best describes the Event Loop in JavaScript?",
        options: ["A loop that repeats code execution every 1000 milliseconds", "A process that handles asynchronous operations in the correct order", "A loop that waits for user input before continuing", "A loop that repeats synchronous tasks forever"],
        correctIndex: 1
    },
    {
        question: "What does the setTimeout function do in JavaScript?",
        options: ["Executes code after a specified delay", "Executes code immediately", "Repeats code indefinitely", "Stops the execution of code after a specified time"],
        correctIndex: 0
    },
    {
        question: "Which of the following is true about JavaScript closures?",
        options: ["They are used to store variables globally", "They allow functions to have access to variables from the outer function even after the outer function has finished execution", "They cannot access variables from the outer function", "Closures do not exist in JavaScript"],
        correctIndex: 1
    },
    {
        question: "How do you create a Promise in JavaScript?",
        options: ["let promise = new Promise()", "let promise = Promise.create()", "let promise = new Promise(resolve, reject)", "let promise = new Promise(resolve, reject) => {}"],
        correctIndex: 2
    },
    {
        question: "Which of the following is used to handle an error that occurs in a Promise?",
        options: [".catch()", ".finally()", ".then()", ".resolve()"],
        correctIndex: 0
    },
    {
        question: "What is the correct way to add an event listener for a button click in JavaScript?",
        options: ["button.addEventListener('click', function() {...});", "button.onClick(function() {...});", "addEventListener('click', button, function() {...});", "button.clickListener('click', function() {...});"],
        correctIndex: 0
    },
    {
        question: "What is the output of the following code? \n\n console.log(3 + 2 + '5');",
        options: ["32", "35", "55", "NaN"],
        correctIndex: 1
    },
    {
        question: "What will be the output of the following code? \n\n console.log('5' - 3);",
        options: ["2", "'2'", "NaN", "'5'"],
        correctIndex: 0
    },
    {
        question: "What is the output of this code? \n\n console.log([1] == true);",
        options: ["true", "false", "1", "undefined"],
        correctIndex: 0
    },
    {
        question: "What will be the output of the following code? \n\n var a = 10; (function() { console.log(a); var a = 20; })();",
        options: ["10", "undefined", "20", "ReferenceError"],
        correctIndex: 1
    },
    {
        question: "What is the output of the following code? \n\n console.log(0 == false);",
        options: ["true", "false", "0", "NaN"],
        correctIndex: 0
    },
    {
        question: "What will be the output of this code? \n\n var x = 5; console.log(x++);",
        options: ["5", "6", "undefined", "NaN"],
        correctIndex: 0
    },
    {
        question: "What is the output of this code? \n\n console.log('10' === 10);",
        options: ["true", "false", "undefined", "NaN"],
        correctIndex: 1
    },
    {
        question: "What is the output of the following code? \n\n var arr = [1, 2, 3]; arr[10] = 100; console.log(arr.length);",
        options: ["10", "11", "3", "4"],
        correctIndex: 1
    },
    {
        question: "What will the following code output? \n\n console.log([] + []);",
        options: ['""', "0", "[]", "undefined"],
        correctIndex: 0
    },
    {
        question: "What will be the output of the following code? \n\n let a = {x: 1}; let b = a; b.x = 2; console.log(a.x);",
        options: ["1", "2", "undefined", "ReferenceError"],
        correctIndex: 1
    }
];



let topic = prompt('Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math');

let question = '';
let answer = '';

topic = Number(topic);

switch (topic) {
    case 1:
        question = "რა არის რა არის typeof(5)?";
        answer = ["number", "NUMBER", "NumBeR"];
        break;
    case 2:
        question = "შეიძლება თუ არა let-ის რედეკლალირება";
        answer = ["Yes", "yes", "YES"];
        break;
    case 3:
        question = "რას აბრუნებს console.log(Math.floor(2.1))";
        answer = ["ori", "ORI", "oRi"];
        break;
    default:
        alert("არასწორი არჩევანი, გთხოვთ აირჩიოთ 1, 2 ან 3.");
        break;
}

if (question) {
    let userAnswer = prompt(question);

    if (answer.includes(userAnswer)) {
        alert("სწორია!");
    } else {
        alert(" სამწუხაროდ ვერ გამოიცანით.");
    }
}
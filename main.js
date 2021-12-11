let diameterInput = prompt('What is the diameter?');

function answer(diameter) {
    const PI = 22/7;
    let radius = diameter / 2;
    let solution = radius * radius * PI;
    alert(`The answer is ${solution}`);
}

answer(diameterInput);
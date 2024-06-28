const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const answertext = document.getElementById("answer");

function calsum(){
    const val1 = parseInt(input1.value);
    const val2 = parseInt(input2.value);
    const sum = val1 + val2;

    answertext.innerText = `Answer : ${sum}`;
}

function resetsum() {
    input1.value = " ";
    input2.value = " ";
    answertext.innerText = `Answer :`;
}
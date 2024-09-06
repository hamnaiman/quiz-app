let questions = [

    {
        question: "what is the correct syntax to declare a variable?",
        option1: " var varibale",
        option2: " let varibale",
        option3: " const varibale",
        option4: "All of the above",
        ans : "All of the above"

    },

    {
        question: "Which of the following is used to create an object in JavaScript?",
        option1: "{}",
        option2: "[]",
        option3: "()",
        option4: "<>",
        ans :"{}"

    },
    {
        question: "Which method is used to parse a string to an integer in JavaScript?",
        option1: "parseInt()",
        option2: "parseinteger()",
        option3: "parsestring",
        option4: "none",
        ans : "parseInt()"

    },
]
var index = 0;
var result = 0;
function renderQues() {
    var container = document.getElementById("container")
    var option = document.getElementsByName("options")

    for(let i= 0;  i<option.length; i++){
        if(option[i].checked){
            if(questions[index-1].ans===option[i].value){
                result++;
            }
            console.log(option[i].value , questions[index-1].ans)
           
        }
    }
if(!questions[index]){
    console.log("Result" + result)
    return;
}

    container.innerHTML = `
     <p class = "question">
     ${questions[index].question}</p>
  <div><input type="radio" name="options" value="${questions[index].option1}"> ${questions[index].option1} </div>
  <div><input type="radio" name="options" value="${questions[index].option1}">${questions[index].option2}</div>
  <div><input type="radio" name="options" value="${questions[index].option1}">${questions[index].option3}</div>
  <div><input type="radio" name="options" value="${questions[index].option1}">${questions[index].option4}</div>
     `
    index++
}
renderQues()
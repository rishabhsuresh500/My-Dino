const questions = [
    {
        question: "Habitat of Hadrosaurus was ______ ?",
        optionA: "Woodlands of Central Asia",
        optionB: "Woodlands of Northern Africa",
        optionC: "Woodlands of North America",
        optionD: "Woodlands of Africa",
        correctOption: "optionC"
    },

    {
        question: "The name of this Dinosour is synonym to FOOT In Mongolian ?",
        optionA: "Tyrannosaurus rex",
        optionB: "Kol",
        optionC: "Lusotitan",
        optionD: "Mei",
        correctOption: "optionB"
    },

    {
        question: "Which dinosour belonged to India and therefore name relates to Lizard Prince ?",
        optionA: "Saltasaurus",
        optionB: "Jainosaurus",
        optionC: "Isisaurus",
        optionD: "Rajasaurus",
        correctOption: "optionD"
    },

    {
        question: "What is the closest living animal to Dinosour ?",
        optionA: "Snakes",
        optionB: "Lizard",
        optionC: "Crocodile",
        optionD: "Turtle",
        correctOption: "optionC"
    },

    {
        question: "Which dinosour was named afer an Indian paleontologist ?",
        optionA: "Jainosaurus",
        optionB: "Jingshanosaurus",
        optionC: "Kaatedocus",
        optionD: "Nankangia",
        correctOption: "optionA"
    },

    {
        question: "Which dinosour came into existence more than 200 million years ago ?",
        optionA: "Wintonotitan",
        optionB: "Unaysaurus",
        optionC: "Hadrosaurus",
        optionD: "Gastonia",
        correctOption: "optionB"
    },

    {
        question: "Which dinosour is known for its squat torso ?",
        optionA: "Lophorhothon",
        optionB: "Nomingia",
        optionC: "Nqwebasaurus",
        optionD: "Magnapaulia",
        correctOption: "optionA"
    },

    {
        question: "This dinosour was among the heaviest species ?",
        optionA: "Lusotitan",
        optionB: "Quaesitosaurus",
        optionC: "Puertasaurus",
        optionD: "Ornithopsis",
        correctOption: "optionC"
    },

    {
        question: "The least known diet habit among dinosour species ?",
        optionA: "Plant",
        optionB: "Omnivorous",
        optionC: "Meat",
        optionD: "Insectivorous",
        correctOption: "optionB"
    },

    {
        question: "Lophorhothon's limbs structure was ______ ?",
        optionA: "Longer hind than front legs",
        optionB: "Hind and front legs were same",
        optionC: "Winged",
        optionD: "Long tailed",
        correctOption: "optionA"
    },

    {
        question: "All horned and spiked dinosour name ended with ______ ?",
        optionA: "Rex",
        optionB: "Ceratops",
        optionC: "Saurus",
        optionD: "Long",
        correctOption: "optionB"
    },

    {
        question: "Which Dino was named after a Buddhist leader ?",
        optionA: "Zalmoxes",
        optionB: "Zuolong",
        optionC: "Zanabazar",
        optionD: "Tsintaosaurus",
        correctOption: "optionC"
    },


    {
        question: "Which Dino is known for its blunt teeth ?",
        optionA: "Sahaliyania",
        optionB: "Efraasia",
        optionC: "Chaoyangsaurus",
        optionD: "Rapetosaurus",
        correctOption: "optionD"
    },

    {
        question: "Which Dino named after a disney cartoon character also had a large brain ?",
        optionA: "Gobisaurus",
        optionB: "Bambiraptor",
        optionC: "Cerasinops",
        optionD: "Dicraeosaurus",
        correctOption: "optionB"
    },

    {
        question: "This chicken mimic named Dino survived on planktons ?",
        optionA: "Hadrosaurus",
        optionB: "Haplocanthosaurus",
        optionC: "Gallimimus",
        optionD: "Ignavusaurus",
        correctOption: "optionC"
    },

    {
        question: "Cowardly lizard refers to which Dinosour ?",
        optionA: "Ignavusaurus",
        optionB: "Jingshanosaurus",
        optionC: "Jobaria",
        optionD: "Kol",
        correctOption: "optionA"
    },

    {
        question: "____ is one of the smaller looking species ?",
        optionA: "Xixianykus",
        optionB: "Yandusaurus",
        optionC: "Yi-Qi",
        optionD: "Yulong",
        correctOption: "optionC"
    },

    {
        question: "Lusotitan was a giant Dino measuring ______ long ?",
        optionA: "140 feet",
        optionB: "60 feet",
        optionC: "200 feet",
        optionD: "80 feet",
        correctOption: "optionD"
    },

    {
        question: "Strongest of all Dinos ?",
        optionA: "Tyrannosaurus Rex",
        optionB: "Jingshanosaurus",
        optionC: "Incisivosaurus",
        optionD: "Isisaurus",
        correctOption: "optionA"
    },

    {
        question: "Triceratops appeared ______ million years ago ?",
        optionA: "50",
        optionB: "69",
        optionC: "65",
        optionD: "80",
        correctOption: "optionB"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

function home(){
    window.location="home.html";
}
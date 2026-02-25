const mainAbilities = [
    {
        name: "HTML",
        skillLevel: "90%",
        img: "img/html-5.png",
    },
    {
        name: "CSS",
        skillLevel: "80%",
        img: "img/css-3.png",
    },
    {
        name: "JavaScript",
        skillLevel: "70%",
        img: "img/js.png",
    },
    {
        name: "React",
        skillLevel: "60%",
        img: "img/react.png",
    },
    {
        name: "Next",
        skillLevel: "70%",
        img: "img/next.webp",
    },
    {
        name: "Node",
        skillLevel: "80%",
        img: "img/nodejs.png",
    },
    {
        name: "Java",
        skillLevel: "80%",
        img: "img/java.png",
    },
    {
        name: "Vue",
        skillLevel: "75%",
        img: "img/vuejs.png",
    },
]

const additionalAbilities = [
    {
        name: "Angular",
        img: "img/angular.png",
    },
    {
        name: "Bootstrap",
        img: "img/bootstrap.png",
    },
    {
        name: "C++",
        img: "img/c++.png",
    },
    {
        name: "Github",
        img: "img/github.png",
    },
    {
        name: "PHP",
        img: "img/php.png",
    },
    {
        name: "Python",
        img: "img/python.png",
    },
    {
        name: "C#",
        img: "img/c-sharp.png"
    },
]

// to add each img from array

let additionalSkills = document.querySelector("#additionalSkills")

function additionalSkillsImg (array) {
    for(let i = 0; i < array.length; i++) {
        additionalSkills.innerHTML += `
        <img src="${array[i].img}" alt="${array[i].name}" loading="lazy" class="p-5 hover:bg-dark/20 hover:rounded-2xl">
        `
    }
}

additionalSkillsImg(additionalAbilities)

// To add each img from array

let mainSkills = document.querySelector("#mainSkills")
function mainSkillsImg (array) {
    for (let i = 0; i < array.length; i++) {
    mainSkills.innerHTML += `
    <img id="img${array[i].name}" src="${array[i].img}" alt="${array[i].name}" loading="lazy" class="px-10 py-15 bg-deepBlue rounded-2xl hover:px-5 hover:py-10">
    `
}
}

mainSkillsImg(mainAbilities)

// To get an addEventListener per each img

let percentageSkill = document.querySelector("#percentageSkill")
let skillName = document.querySelector("#skillName")

function percentageAndName(array) {
    for (let i = 0; i < array.length; i++) {
    let img = document.querySelector(`#img${array[i].name}`)
    img.addEventListener("mousemove", function(){
    percentageSkill.innerHTML = `${array[i].skillLevel}`
    skillName.innerHTML = `${array[i].name}`
    })
    img.addEventListener("mouseleave", function(){
    percentageSkill.innerHTML = `4`
    skillName.innerHTML =  `Years Experience Working`
    })
}
}


percentageAndName(mainAbilities)






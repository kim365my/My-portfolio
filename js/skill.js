// json 데이터 불러오기
fetch("./json/skill.json").then((res) => res.json()).then((obj) => printSkill(obj));

// 변수 선언
const skillList = document.querySelector(".skill_list");
// 템플릿
const templeSkill = (name, description, score, imgSrc) => {
    return `
    <img src="https://img.shields.io/badge/${imgSrc}"/>
    `
}

// 출력
function printSkill(obj) {
    obj.map((item) => {
        skillList.innerHTML += templeSkill(item.name, item.description, item.score, item.imgSrc);
    })
};


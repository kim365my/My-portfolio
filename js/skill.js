// 변수 선언
const table = document.querySelector(".skill_list");
// 템플릿
const templeSkill = (name, score) => {
    return `
    <th>${name}</th>
    <td>
        <progress value="${score}" max="100"></progress>
        <span class="hidden">${score}</span>
    </td>
    `
}

// json 데이터 불러오기
fetch("./json/skill.json").then((res) => res.json()).then((obj) => {
    printSkill(obj);
});

// 출력
function printSkill(obj) {
    obj.map((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = templeSkill(item.name, item.score);
        table.appendChild(tr);
    })
};


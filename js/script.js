const gnb = document.querySelectorAll(".gnb li");
const section = document.querySelectorAll("section");
const CHECK_CLASS = "check";

// 함수실행
gnbAndList();
portfolioListAdd();

/** check가 붙으면 해당 gnb 리스트 스타일을 변경하고 해당 요소를 보이게 해주는 함수  */
function gnbAndList(){
    gnb.forEach((e, i)=> {
        e.addEventListener("click", () => { // 클릭되었을 경우
            // 클릭된 요소외에 클래스 명이 있을 경우, 해당 클래스명을 지우기
            gnb.forEach((e) => e.classList.remove(CHECK_CLASS));
            section.forEach((e) => e.classList.remove(CHECK_CLASS))
            // 클릭된 요소에 클래스명 추가
            e.classList.add(CHECK_CLASS);
            section[i].classList.add(CHECK_CLASS);
        });
    });
}

// 포트폴리오 리스트 테이터 가져와서 동적으로 추가
function portfolioListAdd() {
    const pList = document.querySelector(".Portfolio_list");
    fetch("./json/portfolioList.json").then((res) => res.json()).then((obj) => {
        obj.map((e) => {
            const dataWrap = document.createElement('li');
            dataWrap.innerHTML = temple(e.title, e.imgLink, e.startDate, e.endDate, e.useLibery, e.tag, e.siteLink)
            pList.appendChild(dataWrap);
        });
    })
}

function temple (title, imgLink, startDate, endDate, useLibery, tag, siteLink) {
    return `
    <a target="_blank" href="${siteLink}">
        <h3>${title}</h3>
        <picture>
            <img src="${imgLink}" alt="${title}">
        </picture>
        <dl>
            <dt>작업기간</dt>
            <dd>${startDate} ~ ${endDate}</dd>
        </dl>
        <dl>
            <dt>사용한 라이브러리</dt>
            <dd>${useLibery}</dd>
        </dl>
        <dl>
            <dt>태그</dt>
            <dd>${tag}</dd>
        </dl>
    </a>
    `
}


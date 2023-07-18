// 변수 선언
const pList = document.querySelector(".Portfolio_list");
const pSortBtn = document.querySelectorAll(".Portfolio_Sort button");
// 포트폴리오 리스트 테이터 가져와서 동적으로 추가
fetch("./json/portfolioList.json").then((res) => res.json()).then((obj) => {
    print(obj);
    sortData(obj);
});

// 데이터 정렬하기
function sortData(obj) {
    pSortBtn.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            pSortBtn.forEach(i => i.classList.remove("check"));
            item.classList.add("check");

            // 데이터 정렬 후 화면에 출력
            let data;
            switch(index) {
                case 1 : // 최신순
                    data = obj.toSorted((a, b) => new Date(b.startDate) - new Date(a.startDate));
                    break;
                case 2 : // 과거순
                    data = obj.toSorted((a, b) => new Date(a.startDate) - new Date(b.startDate));
                    break;
                default : data = obj; // 기본, 인기순
            }
            print(data);
        })
    })
}


// 화면에 출력하기
function print(obj) {
    pList.replaceChildren();
    obj.map((e) => {
        const dataWrap = document.createElement('li');
        dataWrap.innerHTML = temple(e.title, e.imgLink, e.startDate, e.endDate, 
                                    useLibery(e.useLibery), useLibery(e.tag), e.siteLink, e.directory)
        pList.appendChild(dataWrap);
    });
}


/** 객체 형식인거 처리하는 함수 */
function useLibery(value) {
    let result = "<ul>";
    value.forEach((e) => result += "<li>" + e + "</li>");
    result += "</ul>";
    return result;
}
// 날짜 계산하기
function dataMath(startDate, endDate) {
    const diffMSec = new Date(endDate).getTime() - new Date(startDate).getTime();
    return Math.floor(diffMSec / (24 * 60 * 60 * 1000));
}

// 사용하는 템플릿
function temple(title, imgLink, startDate, endDate, useLibery, tag, siteLink, directory) {
    return `
    <a target="_blank" href="${siteLink}">
        <h3>${title}</h3>
        <picture>
            <img src="${imgLink}" alt="${title}">
        </picture>
    </a>
    <dl>
        <dt>작업기간</dt>
        <dd>${startDate} ~ ${endDate} (${dataMath(startDate, endDate)}일)</dd>
    </dl>
    <dl class="useLibery">
        <dt>사용한 라이브러리</dt>
        <dd>${useLibery}</dd>
    </dl>
    <dl class="tag">
        <dt>태그</dt>
        <dd>${tag}</dd>
    </dl>
    <hr>
    <p>
        ${directory}
    </p>
    `
}


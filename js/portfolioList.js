// 변수 선언
const pList = document.querySelector(".Portfolio_list");
const pSortBtn = document.querySelectorAll(".Portfolio_Sort button");


// 날짜 계산하기
const dataMath = (startDate, endDate) => Math.floor((new Date(endDate).getTime() - new Date(startDate).getTime()) / (24 * 60 * 60 * 1000)) + 1;

// 객체 형식인거 처리하는 함수
const makeList = (value) => {
    let result = "<ul>";
    value.forEach((e) => result += "<li>" + e + "</li>");
    result += "</ul>";
    return result;
}

// 사용하는 템플릿
const templeProtfolio = (title, imgLink, startDate, endDate, useLibery, tag, siteLink, directory) => {
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

// 포트폴리오 리스트 테이터 가져와서 동적으로 추가
fetch("./json/portfolioList.json").then((res) => res.json()).then((obj) => {
    printProtfolio(obj);
    sortData(obj);
});

// 필터 변수
const filterList = document.querySelector(".filter");
const filterData = new Set();

// tag로 데이터 필터링 하기
function tagData(obj) {
    const tagBtn = document.querySelectorAll(".Portfolio_list .tag li");
    tagBtn.forEach((item) => {
        item.addEventListener("click", (e) => {
            filterData.add(e.target.textContent); // 데이터 추가
            printProtfolio(obj); // 데이터 출력
        });
    })
}

// 데이터 필터링 제거
function tagDelete(obj) {
    const filterBtn = document.querySelectorAll(".filter li");
    filterBtn.forEach((item) => {
        item.addEventListener("click", (e) => {
            filterData.delete(e.target.textContent);
            printProtfolio(obj)
        })
    })
}


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
            filterData.clear(); // 필터 데이터 클리어
            printProtfolio(data); // 화면에 출력
        })
    })
}


// 화면에 출력하기
function printProtfolio(obj) {
    pList.scrollTop = 0; // 스크롤 맨 위로 올리기
    pList.replaceChildren(); // 기존에 출력된 데이터 지우기

    // 선택된 키워드의 수에 따라서 출력 방식이 달라짐
    let data = obj;
    if(filterData.size != 0) {
        filterData.forEach((text) => {
            data = filter(data, text);
        })
        console.log(data);
    }
    
    data.map((item) => {
        const dataWrap = document.createElement('li');
        dataWrap.innerHTML = templeProtfolio(item.title, item.imgLink, item.startDate, item.endDate, 
                                    makeList(item.useLibery), makeList(item.tag), item.siteLink, item.directory)
        pList.appendChild(dataWrap);
    });
    
    
    document.querySelector("#Portfolio h2 span").innerHTML = `(${data.length})`; // 갯수 표시하기
    filterList.innerHTML = makeList(filterData); // 필터 리스트 출력

    // 필터 설정
    tagData(obj);
    tagDelete(obj);
}

function filter(data, text) {
    return data.filter((value) => value.tag.includes(text));
}
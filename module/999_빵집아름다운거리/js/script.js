const scrollup = document.getElementsByClassName("scrollup");
document.addEventListener('scroll',e=>{
    if(window.scrollY > 200){	//스크롤 위치 500 높을시
        //상단 이동 버튼 생성
        document.querySelector('.scrollup').classList.remove('hidden');
        document.querySelector('header').classList.add('scollorheader');
    }
    else {	//스크롤 위치 500 아래일시
        //상단 이동 버튼 삭제
        document.querySelector('.scrollup').classList.add('hidden');
        document.querySelector('header').classList.remove('scollorheader');
    }
})
//오렌지색 버튼 클릭시, 최상단 태그로 이동
document.querySelector('.scrollup').addEventListener('click',e=>{
    document.querySelector('body').scrollIntoView({behavior:'smooth'});
});

// ** 오늘 날짜 표시 JS 코드

function updateToday() {
    // 현재 한국 시간을 얻어오기
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));

    // 연,월,일 구하기
    const year = now.getFullYear(); // 년도 가져오기
    const month = now.getMonth() + 1; // 월 가져오기 (0부터 시작하므로 1을 더함)
    const date = now.getDate(); // 일 가져오기

    // 원하는 형식으로 날짜 조합
    const currentTime = `${year}년 ${month}월 ${date}일`; 

    // 결과를 HTML에 업데이트
    const todayElement = document.getElementById('today');
		todayElement.style.color = '#FF9EA9'
    todayElement.innerHTML = `<span>${currentTime}</span>`;
}
// 페이지 로드 시에도 업데이트 수행
updateToday();

// 1초마다 업데이트
setInterval(updateToday, 1000);

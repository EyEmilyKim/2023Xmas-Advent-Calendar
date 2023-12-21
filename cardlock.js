// 도달하지 않은 날짜 카드 오픈 제한
const today = new Date(); // 오늘 날짜

document.querySelectorAll('input[type="checkbox"]').forEach(input => {
    const inputDate = new Date(input.getAttribute('data-date'));

    if (inputDate > today) {
        input.addEventListener('click', (event) => {
            event.preventDefault(); // 클릭 이벤트 막기
            console.log("아직 도달하지 않은 날짜로 이벤트 무효화");
            // 또는 원하는 다른 작업 수행
        });
    }
});

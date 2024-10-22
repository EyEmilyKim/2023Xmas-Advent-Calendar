// 배경음 실행 관련
document.addEventListener('DOMContentLoaded', function() {
    const soundElement = document.querySelector('.sound');
    const stopElement = document.querySelector('.stop');
    const bgm = document.querySelector('.bgm');
  
    soundElement.addEventListener('click', function() {
      bgm.play();
    });
  
    stopElement.addEventListener('click', function() {
      bgm.pause();
      bgm.currentTime = 0;
    });
  });

// 페이지 로드 시 자동으로 재생버튼 클릭 (단, 첫 로드시에만 작용하고 새로고침 시 안됨;;)
window.onload = function() {
  const soundElement = document.querySelector('.sound');
  soundElement.click(); // 버튼 클릭 시뮬레이션
};
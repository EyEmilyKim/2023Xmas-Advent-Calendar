// ** 공유하기 버튼 js
// 기능2: 공유하기
document.getElementById('shareButton').addEventListener('click', async () => {
    try {
      // Check if the Web Share API is available
      if (!navigator.share) {
        alert('Web Share API is not available on your browser.');
        return;
      }
  
      // Your share data
      const shareData = {
        title: 'Web Share Example',
        text: 'Check out this web share example!',
        url: window.location.href
      };
  
      // Invoke the share dialog
      await navigator.share(shareData);
      console.log('Data was shared successfully');
    } catch (err) {
      console.error('Share failed:', err.message);
    }
  });

// ** 사진 더 보기 링크
document.getElementById("instaButton").addEventListener("click", function() {
  var link = "https://www.instagram.com/ke.mily.epic";

  var newTab = window.open(link, '_blank');
  newTab.focus();
});

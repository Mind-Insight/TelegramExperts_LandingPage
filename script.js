var loadMoreBtn = document.getElementById('load-more-btn');
var content = document.getElementById('content');
var newContent = document.getElementById('new-content');

loadMoreBtn.onclick = function() {
  if (newContent.style.display === 'none') {
    newContent.classList.add('fade-in');
    newContent.style.display = 'block';
    content.style.marginBottom = '0';
  } else {
    newContent.classList.add('fade-out');
    setTimeout(function() {
      newContent.classList.remove('fade-out');
      newContent.style.display = 'none';
      content.style.marginBottom = '20px';
    }, 500);
  }
};
document.querySelectorAll('.social-button').forEach(button => {
  button.addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.1)';
  });

  button.addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
  });
});

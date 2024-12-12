// Add interactivity to buttons
document.querySelector('.cta-btn').addEventListener('click', () => {
    alert("Discover the features!");
  });
  
  document.querySelectorAll('nav .btn').forEach(button => {
    button.addEventListener('click', () => {
      alert(`You clicked on ${button.textContent}`);
    });
  });
  
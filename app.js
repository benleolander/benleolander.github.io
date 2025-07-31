// Set current year in footer automatically
document.addEventListener('DOMContentLoaded', function() {
  var yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
// Set the documentElement, which then overwrites CSS variables
function toggleTheme() {
  !document.documentElement.hasAttribute('theme') ? 
    document.documentElement.setAttribute('theme', 'alternate') : 
    document.documentElement.removeAttribute('theme')
}

window.addEventListener('load', () => {
  const themeButton = document.querySelector('.themeToggle')
  themeButton.addEventListener('click', toggleTheme)
})
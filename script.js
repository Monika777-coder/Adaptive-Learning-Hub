// Example of tracking weak areas based on user responses
document.getElementById('test-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const weakAreas = [];
  
    const iqQuestion = parseInt(document.getElementById('q1').value);
    if (iqQuestion !== 10) weakAreas.push("IQ: Focus on logical reasoning.");
  
    localStorage.setItem('weakAreas', JSON.stringify(weakAreas));
    window.location.href = 'weak-areas.html';
  });
  
  // Load weak subjects
  window.addEventListener('load', function() {
    const weakList = document.getElementById('weak-list');
    const weakAreas = JSON.parse(localStorage.getItem('weakAreas')) || [];
    weakList.innerHTML = weakAreas.map(area => <li>${area}</li>).join('');
  });
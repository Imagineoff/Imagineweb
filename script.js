// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
reveals.forEach(r => observer.observe(r));

// Copy email to clipboard
document.getElementById('email')?.addEventListener('click', async e => {
  const text = e.target.textContent.trim();
  try {
    await navigator.clipboard.writeText(text);
    e.target.textContent = 'Copied!';
    setTimeout(() => e.target.textContent = text, 2000);
  } catch {
    alert('Failed to copy email.');
  }
});

const MAX_CHARS = 200;


const textarea = document.getElementById('message');
const counterEl = document.getElementById('counter');
const maxTextEl = document.getElementById('maxText');
const warningEl = document.getElementById('warning');
const submitBtn = document.getElementById('submitBtn');

if ( textarea && counterEl && warningEl && maxTextEl && submitBtn) {
  maxTextEl.textContent = `${MAX_CHARS} characters max`;

  function isValid() {
    const typed = textarea.value.trim().length;
    const withinLimit = textarea.value.length <= MAX_CHARS;
    return withinLimit && typed > 0;
  }

  function updateCounter() {
    const typed = textarea.value.length;
    const remaining = MAX_CHARS - typed;

    counterEl.textContent = `${typed}/${MAX_CHARS} characters`;

    if (remaining <= 0) {
      warningEl.classList.add('show');
    } else {
      warningEl.classList.remove('show');
    }

    // Disable submit until valid
    submitBtn.disabled = !isValid();
  }

  textarea.addEventListener('input', function () {
    if (textarea.value.length > MAX_CHARS) {
      textarea.value = textarea.value.substring(0, MAX_CHARS);
    }
    updateCounter();
  });

  const formEl = document.getElementById('messageForm');

  formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!isValid()) return;

    // Show alert then refresh
    alert(`Submitted message: ${textarea.value}`);
    window.location.reload();

    
  });

  updateCounter();
}





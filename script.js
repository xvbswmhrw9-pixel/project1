/* Get guest name from URL */
const urlParams = new URLSearchParams(window.location.search);
const guest = urlParams.get('to');
if (guest) {
  document.getElementById('guestName').innerText = `Dear, ${guest}`;
}

/* Page fade-in transition */
window.addEventListener('load', () => {
  document.getElementById('pageHero').classList.add('active');
});

/* Open Invitation */
function openInvitation() {
  const invite = document.getElementById('invitation-section');
  invite.style.display = 'block';

  window.scrollTo({
    top: invite.offsetTop,
    behavior: 'smooth'
  });

  /* Fade-up stagger */
  setTimeout(() => {
    document.querySelectorAll('.fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 250);
    });
  }, 500);
}

/* Background music auto play on user interaction */
document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const playMusic = () => {
    music.play();
    document.removeEventListener('click', playMusic);
  };
  document.addEventListener('click', playMusic);
});

/* RSVP Submit */
const form = document.getElementById('rsvpForm');
const status = document.getElementById('rsvpStatus');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data
  })
  .then(() => {
    status.style.display = 'block';
    form.reset();
  })
  .catch(() => alert('Error sending RSVP'));
});

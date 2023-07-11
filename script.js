'use strict';

const modal = document.querySelector('.modal');
const showModalButton = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function toggleModal() {
  overlay.classList.toggle('hidden');
  modal.classList.toggle('hidden');
}

function closeModal() {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
}

function handleKeyDown(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
}

showModalButton.forEach(item => {
  item.addEventListener('click', toggleModal);
});

closeModalButton.addEventListener('click', toggleModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', handleKeyDown);

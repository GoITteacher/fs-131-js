let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
  sendBtn: document.querySelector('.js-send-btn'),
};

refs.firstTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    return;
  }
  const liElem = e.target.closest('.tag-item');
  liElem.classList.toggle('active');
});

refs.secondTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    return;
  }

  const oldElem = e.currentTarget.querySelector('.active');
  oldElem.classList.remove('active');

  const liElem = e.target.closest('li');
  liElem.classList.add('active');
});

refs.sendBtn.addEventListener('click', () => {
  const firstList = [...refs.firstTagsList.querySelectorAll('.active')];
  const tags1 = firstList.map(liElem => liElem.innerHTML.trim());

  console.log(tags1);
});

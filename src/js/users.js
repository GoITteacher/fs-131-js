//!=========================================

import {
  createStudent,
  deleteStudent,
  getStudents,
  resetStudent,
} from './modules/studentsApi';

const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  deleteUserForm: document.querySelector('.js-delete-form'),
};

//!=========================================

document.addEventListener('DOMContentLoaded', () => {
  getStudents().then(data => {
    const markup = studentsTemplate(data.items);
    refs.userListElem.innerHTML = markup;
  });
});

//!=========================================

refs.createUserForm.addEventListener('submit', handleCreateStudent);
refs.updateUserForm.addEventListener('submit', handleUpdateStudent);
refs.resetUserForm.addEventListener('submit', handleResetStudent);
refs.userListElem.addEventListener('click', handleDeleteStudent);

//!=========================================

function handleCreateStudent(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    major: formData.get('major'),
    cohortYear: Number(formData.get('cohortYear')),
    gpa: Number(formData.get('gpa')),
    enrolled: Boolean(formData.get('enrolled')),
  };

  createStudent(data).then(res => {
    const markup = studentTemplate(res);
    refs.userListElem.insertAdjacentHTML('afterbegin', markup);
  });

  e.target.reset();
}

function handleUpdateStudent(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {};
  e.target.reset();
}

function handleResetStudent(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const id = formData.get('userId');

  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    major: formData.get('major'),
    cohortYear: Number(formData.get('cohortYear')),
    gpa: Number(formData.get('gpa')),
    enrolled: Boolean(formData.get('enrolled')),
  };

  resetStudent(id, data).then(res => {
    const markup = studentTemplate(res);
    const oldElem = document.querySelector(`[data-id="${id}"]`);
    oldElem.outerHTML = markup;
  });

  e.target.reset();
}

function handleDeleteStudent(e) {
  if (!e.target.classList.contains('user-delete-button')) {
    return;
  }

  const id = e.target.dataset.id;
  const liElem = e.target.closest('li');

  deleteStudent(id).then(() => {
    liElem.remove();
  });
}

//!=========================================

function studentTemplate(item) {
  return `<li class="card user-item" data-id="${item._id}">
        <div class="user-photo-placeholder" aria-label="User photo placeholder">
          <span>${item.firstName[0]}${item.lastName[0]}</span>
        </div>
        <div class="user-card-body">
          <div class="user-card-header">
            <div>
              <h3 class="user-title">${item.firstName} ${item.lastName}</h3>
              <p class="user-major">${item.major}</p>
            </div>
            <span class="user-status">Enrolled</span>
          </div>

          <div class="user-meta">
            <p>
              <span>Cohort</span>
              <strong>${item.cohortYear}</strong>
            </p>
            <p>
              <span>GPA</span>
              <strong>${item.gpa}</strong>
            </p>
          </div>

          <button data-id="${item._id}" class="btn button user-delete-button">Delete</button>
        </div>
      </li>`;
}

function studentsTemplate(items) {
  return items.map(studentTemplate).join('');
}

//!=========================================

//!=========================================

let users;

fetch().then(res => {
  users = res;
});

console.log(users);

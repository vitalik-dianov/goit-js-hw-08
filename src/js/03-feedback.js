import throttle from 'lodash.throttle';

const LOCALSTORAGEKEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.querySelector('[name="email"]');
const textareaRef = formRef.querySelector('[name="message"]');
const btnSubmitRef = formRef.querySelector('button[type="submit"]');
const userData = {
  email: '',
  message: '',
};
emailRef.addEventListener('input', throttle(saveUserEmailLS, 500));
textareaRef.addEventListener('input', throttle(saveUserMessageLS, 500));
btnSubmitRef.addEventListener('click', onFormSubmit);

fillForm();

function onFormSubmit(e) {
  e.preventDefault();
  console.log(userData);
  formRef.reset();
  userData.email = '';
  userData.message = '';
  localStorage.removeItem(LOCALSTORAGEKEY);
}
function saveUserEmailLS(e) {
  userData.email = e.target.value;
  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(userData));
}
function saveUserMessageLS(e) {
  userData.message = e.target.value;
  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(userData));
}

function fillForm(e) {
  if (localStorage.getItem(LOCALSTORAGEKEY)) {
    const { email, message } = JSON.parse(
      localStorage.getItem(LOCALSTORAGEKEY)
    );
    userData.email = email;
    userData.message = message;
    emailRef.value = email;
    textareaRef.value = message;
  }
}

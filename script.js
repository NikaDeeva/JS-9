"use strict"
// 1
const tasks = document.querySelectorAll('.task');

window.addEventListener('load', () => {
    tasks.forEach(task => {
        const savedState = localStorage.getItem(task.value);
        task.checked = savedState === 'true'; 
    });
});

tasks.forEach(task => {
    task.addEventListener('change', () => {
        localStorage.setItem(task.value, task.checked);
    });
});
// 2
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const emailInput = document.getElementById('email');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('username', nameInput.value);
    localStorage.setItem('userage', ageInput.value);
    localStorage.setItem('useremail', emailInput.value);
    alert('Data saved');
});
window.addEventListener('load', () => {
    const nameSaved =  localStorage.getItem('username');
    const ageSaved = localStorage.getItem('userage');
    const emailSaved =  localStorage.getItem('useremail');
    if (nameSaved && ageSaved && emailSaved){
        nameInput.value = nameSaved;
        ageInput.value = ageSaved;
        emailInput.value = emailSaved;
    }
});
// 3
const userNameInput = document.getElementById('userName');
const passwordInput = document.getElementById('password');
const button = document.getElementById('logIn');
button.addEventListener('click', (e) => {
    e.preventDefault();
    const userName = userNameInput.value;
    const password = passwordInput.value;
    const checkName = localStorage.getItem('userName');
    const checkPassword = localStorage.getItem('password');
    if (checkName === userName || checkPassword === password){
        alert('This data is already exist');
        return;
    }
    localStorage.setItem('userName', userName);
    localStorage.setItem('password', password);
    alert('Data saved');
});
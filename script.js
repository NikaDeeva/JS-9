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
// 4
const list = document.getElementById('link-list');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const links = document.querySelectorAll('#link');

links.forEach(link => {
    localStorage.setItem(link.textContent, link.href);
});

addBtn.addEventListener('click', (e) => {
    const addedName = document.getElementById('addName');
    const addedUrl = document.getElementById('addUrl');

        const newLinkLi = document.createElement('li');
        const newLinkA = document.createElement('a');

        newLinkA.textContent = addedName.value;
        newLinkA.href = addedUrl.value;
        newLinkA.id = 'link';

        newLinkLi.appendChild(newLinkA);
        list.appendChild(newLinkLi);

        localStorage.setItem(addedName.value, addedUrl.value);

        addedName.value = '';
        addedUrl.value = '';

        if(addedName === '' || addedUrl === ''){
            alert('Write all data');
        }

});
removeBtn.addEventListener('click', () => {
    const removedLinkName = document.getElementById('remove').value.trim();

    if (removedLinkName === '') {
        alert('Please provide a name to remove!');
        return;
    }
    let linkFound = false;
    links.forEach(link => {
        if (link.textContent === removedLinkName) {
            link.parentElement.remove(); 
            localStorage.removeItem(removedLinkName); 
            linkFound = true;
        }
    });

    if (!linkFound) {
        alert('This link is not in the list.');
    }
    document.getElementById('remove').value = '';
});
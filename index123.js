
var form  = document.getElementById('addForm');
var listItem = document.getElementById('items');

form.addEventListener('submit', addItem);


function addItem(e){
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
     

    let li = document.createElement('li');

    li.appendChild(document.createTextNode(name));
    li.appendChild(document.createTextNode(email))

    listItem.appendChild(li);
    

    let users = {
        name,
        email
    }

    localStorage.setItem(users.email,JSON.stringify(users));


    
}

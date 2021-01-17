let id;
let names;
let email;

let add = document.querySelector("#add");
let update = document.querySelector("#update");
let get = document.querySelector("#get");
let del = document.querySelector("#del");

add.addEventListener("click", () => {
    id = document.getElementById("id").value;
    names = document.getElementById("name").value;
    email = document.getElementById("email").value;
    db.ref("users/" + id).set({
        Name: names,
        Email: email,
    });
});

update.addEventListener("click", () => {
    id = document.getElementById("id").value;
    names = document.getElementById("name").value;
    email = document.getElementById("email").value;
    db.ref("users/" + id).update({
        Name: names,
        Email: email,
    });
});

get.addEventListener("click", () => {
    id = document.getElementById("id").value;
    db.ref("users/" + id).on("value", snapshot => {
        document.getElementById("name").value = snapshot.val().Name;
        document.getElementById("email").value = snapshot.val().Email;
    });
});

del.addEventListener("click", () => {
    id = document.getElementById("id").value;
    db.ref("users/" + id).remove();
});
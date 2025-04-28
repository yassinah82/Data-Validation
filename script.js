let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

let username = id("username"),
    email = id("email"),
    form = id("form"),
    password = id("password"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username,0, "Username can't Be Blank")
    engine(email,1, "email can't Be Blank")
    engine(password,2, "password can't Be Blank")

    window.location.href = "../l-7/assignment/index.html"
    
});

let engine = (id, serial , message) => {
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML = message;
        successIcon[serial].style.opacity = "0"
        faluireIcon[serial].style.opacity = "1"
        id.style.borderColor = "red";
    }
    else{
        errorMsg[serial].innerHTML = "";
        successIcon[serial].style.opacity = "1"
        faluireIcon[serial].style.opacity = "0"
        id.style.borderColor = "green";
    }
}
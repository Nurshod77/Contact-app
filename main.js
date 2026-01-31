function login() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    if (!firstName || !lastName) {
        alert("Iltimos ism va familyani kiriting")
        return;
    }

    localStorage.setItem("firstName", firstName)
    localStorage.setItem("lastName", lastName)
    
    window.location.href = "Home/index.html"
}
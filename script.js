const myform = document.getElementById("loginform");

if (myform) {
    myform.addEventListener("submit", (e) => {
        e.preventDefault();

        let formData = new FormData(myform);

        if (
            formData.get("username") === "admin" &&
            formData.get("password") === "ad123"
        ) {
            localStorage.setItem("useraccess", true);
            window.location.href = "index.html";
            console.log("Welcome");
        } else {
            alert("Username and password are invalid");
        }
    });
}

const logout = () => {
    localStorage.removeItem("useraccess");
    window.location.href = "login.html";
};

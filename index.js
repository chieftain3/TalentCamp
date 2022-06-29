
function boton() {
    document.getElementById("boton").addEventListener("click", () => {
        const gmail = document.getElementById("inputGmail").value;
        const password = document.getElementById("password").value;

        setTimeout(() => {document.getElementById("text").innerText = "ya aparecio en la consola!!",console.log(gmail),
        console.log(password);}, 3000)
    });
}

boton();
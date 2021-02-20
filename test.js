function loadFunction(){
document.getElementById("text").innerText="function executed";
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            document.getElementById("text").innerText = this.responseText;
         }
    };
    xhttp.open("GET", "https://servercopcms.azurewebsites.net/api/user", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send({"userName":"cyril@cop.com", "password":"iamwhoiam", "description":"test"});
}
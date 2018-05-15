// ini disebut DOM (silahkan googling)
// object yang ada di html tersambung dengan javascript
// pertama : dengan id myText
// kedua : dengan id name di bagian input

function myFunction() {
    var x = document.getElementById("myName").value;
    document.getElementById("name").innerHTML = x;
}
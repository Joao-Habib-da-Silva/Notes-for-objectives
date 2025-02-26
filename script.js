function Note() {
    var value = window.document.getElementById("value").value.toLowerCase()
    var descrition = window.document.getElementById("anothervalue").value.toLowerCase()
    var notas = window.document.getElementById("afazeres")
    const new_div = window.document.createElement('div')
    new_div.classList.add("Anotações")
    new_div.innerHTML += `<i class='bx bx-check-square' id='correct' onclick="c()"></i><h1>${value}</h1><p> ${descrition}</p>`

    notas.appendChild(new_div)
    }   

function c() {
    var icone = window.document.getElementById("correct")
    icone.classList.toggle("green")
}
window.addEventListener('keydown', function(event) {
    if(event.key === "Enter") {
        Note()
    }
})
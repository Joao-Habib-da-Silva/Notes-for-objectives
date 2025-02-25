function Note() {
    var value = window.document.getElementById("value").value.toLowerCase()
    var descrition = window.document.getElementById("anothervalue").value.toLowerCase()
    var notas = window.document.getElementById("afazeres")
    const new_div = window.document.createElement('div')
    new_div.classList.add("Anotações")
    new_div.innerHTML += `<h1>${value}</h1><p> ${descrition}</p>`
    notas.appendChild(new_div)
}
window.addEventListener('keydown', function(event) {
    if(event.key === "Enter") {
        Note()
    }
})
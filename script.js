/*desplegable faq*/
var acc = document.getElementsByClassName("accordion");
var campaña = document.querySelectorAll(".hidden");

var i;
console.log(acc);
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/*botones de patrocinar*/
document.querySelectorAll(".boton").forEach(boton => {
  boton.addEventListener("click", function() {
    alert("¡Gracias!");
  });
});


const observer = new IntersectionObserver((e) => {
  e.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
      entry.target.classList.add("show");
    }
  })
})

campaña.forEach((el) => observer.observe(el));

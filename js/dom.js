document.addEventListener("DOMContentLoaded", function() {
    
    let elements = document.getElementsByClassName("highlighted");

    let button = document.getElementById("button");

    let paragraph = document.querySelector("p");

    console.log(paragraph.innerHTML);


    let element = document.querySelector("#password");

    let label = document.querySelector('label[for="password"]');

    let form = document.querySelector('#feedback');
    console.log(form.firstElementChild);
    console.log(form.parentElement);

    let par1 = document.createElement("p");
    par1.textContent = "Toto je text ve vytvořeném odstavci.";

    let head1 = document.createElement("h2");
    head1.textContent = "Nadpis - vnořený";

    document.body.insertBefore(head1, form);
    document.body.appendChild(par1);

    console.log(form.childNodes);

    button.addEventListener("click", function() {
        paragraph.innerHTML = "<strong>Změněný</strong> text!";
        console.log(paragraph.innerText);
        element.required = false;
        console.log(element);
    });
    
    button.addEventListener("dblclick", function() {
        //element.setAttribute("required", "");
        element.required = true;
        console.log(element.nodeName);
        label.setAttribute("class", "highlighted");
    });

    
    let user = document.querySelector("#username");
    let text = document.querySelector(".highlighted");
    let spans = document.querySelectorAll("span.highlighted");
    let confirm = document.querySelector("[type=submit]");

 
});
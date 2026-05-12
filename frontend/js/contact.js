const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:5000/contact",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify({
            name,
            phone,
            email,
            message
        })

    });

    const data = await response.text();

    alert(data);

    contactForm.reset();

});
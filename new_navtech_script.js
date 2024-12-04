const scriptURL = 'https://script.google.com/macros/s/AKfycbz_shvdld9uzQ2mEtsONPjkQqNkVufvWDEDPeureHXmN5x2s54IWFj3DG2oj2XvIGX6BA/exec';

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const form = document.forms['contact-form'];
    const childName = document.getElementById('childName').value.trim();
    const childClass = document.getElementById('childClass').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();
    const numberPattern = /^[0-9]{10}$/;

    // Validate form inputs
    if (!childName || !childClass || isNaN(childClass) || childClass < 1 || childClass > 10 || !numberPattern.test(contactNumber)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(form),
      })
        .then(() => {
          alert("Thank you! Your form has been submitted successfully.");
          form.reset(); // Clear the form
        })
        .catch((error) => {
          console.error('Error!', error.message);
          alert("There was an error submitting the form. Please try again.");
        });
      

    // Submit form via fetch
    // fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    //     .then(response => {
    //         alert('Thank you! Your form has been submitted successfully.');
    //         form.reset(); // Clear the form after submission
    //     })
    //     .catch(error => {
    //         console.error('Error!', error.message);
    //         alert('There was an error submitting the form. Please try again.');
    //     });
});


const createSnowFlake = () => {
    const snowFlake = document.createElement("div");
    snowFlake.classList.add("snowflake");
    snowFlake.style.left =` ${Math.random() * window.innerWidth}px `;
    document.body.appendChild(snowFlake);
    setTimeout(() => snowFlake.remove(), 10000);
};

setInterval(createSnowFlake, 200);










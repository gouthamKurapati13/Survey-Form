document.addEventListener('DOMContentLoaded', function() {
    // Show or hide the 'other products' text input based on checkbox
    const productTypeCheckboxes = document.querySelectorAll('input[name="product-type"]');
    const otherProductsGroup = document.getElementById('other-products-group');
    const otherProductsInput = document.getElementById('other-products');

    productTypeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (checkbox.value === 'Other' && checkbox.checked) {
                otherProductsGroup.style.display = 'block';
                otherProductsInput.required = true;
            } else if (checkbox.value === 'Other' && !checkbox.checked) {
                otherProductsGroup.style.display = 'none';
                otherProductsInput.required = false;
            }
        });
    });

    // Show or hide the 'dissatisfied reason' text area based on satisfaction level
    const satisfactionSelect = document.getElementById('satisfaction');
    const dissatisfiedGroup = document.getElementById('dissatisfied-group');
    const dissatisfiedReason = document.getElementById('dissatisfied-reason');

    satisfactionSelect.addEventListener('change', function() {
        if (satisfactionSelect.value === 'Dissatisfied' || satisfactionSelect.value === 'Very dissatisfied') {
            dissatisfiedGroup.style.display = 'block';
            dissatisfiedReason.required = true;
        } else {
            dissatisfiedGroup.style.display = 'none';
            dissatisfiedReason.required = false;
        }
    });

    // Handle star rating selection
    const starContainers = document.querySelectorAll('.stars');

    starContainers.forEach(container => {
        const stars = container.querySelectorAll('i');
        const hiddenInput = container.nextElementSibling;

        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('selected');
                    } else {
                        s.classList.remove('selected');
                    }
                });
                hiddenInput.value = index + 1;
            });

            star.addEventListener('mouseover', () => {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('selected');
                    } else {
                        s.classList.remove('selected');
                    }
                });
            });

            star.addEventListener('mouseout', () => {
                stars.forEach((s, i) => {
                    if (i > parseInt(hiddenInput.value, 10) - 1) {
                        s.classList.remove('selected');
                    }
                });
            });
        });
    });

    // Handle form submission
    document.getElementById('survey-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Here you can add code to send the form data to a server if needed
        // For this example, we'll just display a thank you message
        
        document.getElementById('survey-form').style.display = 'none';
        document.getElementById('thank-you-message').style.display = 'block';
    });
});

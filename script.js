
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    function addToBasket(productName, price) {
        basket.push({ name: productName, price: price });
        localStorage.setItem('basket', JSON.stringify(basket));
        updateBasket();
    }

    function updateBasket() {
        const basketItems = document.getElementById('basket-items');
        if (basketItems) {
            basketItems.innerHTML = '';
            let total = 0;

            basket.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                basketItems.appendChild(li);
                total += item.price;
            });

            document.getElementById('total').textContent = total.toFixed(2);
        }
    }

    function checkout() {
        // Show success message
        const modal = document.getElementById('successModal');
        modal.style.display = 'block';

        // Clear the basket
        basket = [];
        localStorage.setItem('basket', JSON.stringify(basket));
        updateBasket();
    }

    function closeModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'none';
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        const modal = document.getElementById('successModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Update basket on page load
    updateBasket();

const donationForms = document.querySelectorAll('form');
const mainBalance = document.getElementById('main-balance');
let mainBalanceNumber = parseFloat(mainBalance.textContent); 

donationForms.forEach((form) => {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const inputField = form.querySelector('input');
        const donationAmount = parseFloat(inputField.value); 

        if (inputField.value.trim() === '' || isNaN(donationAmount) || donationAmount <= 0) {
            alert('Please enter a valid positive number for the donation.');
            return;
        }        

        if (donationAmount > mainBalanceNumber) {
            alert('You do not have enough balance to make this donation.');
            return;
        }

        const currentDonation = form.parentElement.querySelector('.amount');
        const currentDonationNumber = parseFloat(currentDonation.textContent);

        updateDonationAmounts(currentDonation, currentDonationNumber, donationAmount);
        inputField.value = '';

        // show the modal
        showModalBox();

        // add transactions
        const blogHeading = form.parentElement.querySelector('h3').textContent;
        const timestamp = new Date().toString();
        
        addTransactions(donationAmount, blogHeading, timestamp);

    });
});

document.getElementById('donation').addEventListener('click', function(){
    toggleSections('blog-post', 'transactions');
    toggleButtons('donation', 'history');
});

document.getElementById('history').addEventListener('click', function(){
    toggleSections('transactions', 'blog-post');
    toggleButtons('history', 'donation');
});
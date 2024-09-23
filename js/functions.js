function updateDonationAmounts(currentDonation, currentDonationNumber, donationAmount) {
    mainBalanceNumber -= donationAmount;
    currentDonation.textContent = (currentDonationNumber + donationAmount); 
    mainBalance.textContent = mainBalanceNumber; 
}

function showModalBox() {
    const successModal = document.getElementById('donation-success-modal');
    successModal.showModal();    
}

function addTransactions(donationAmount, blogHeading, timestamp) {
    const myDiv = document.createElement('div');
    myDiv.classList.add('space-y-4', 'md:space-y-0', 'md:space-x-4', 'border', 'border-[1px]', 'border-[#11111133]', 'p-6', 'rounded-2xl');
    myDiv.innerText = `${donationAmount} Taka is donated for ${blogHeading} \n ${timestamp}`;
    document.getElementById('transactions-container').appendChild(myDiv);
}

function toggleSections(showSectionId, hideSectionId) {
    const showSection = document.getElementById(showSectionId);
    const hideSection = document.getElementById(hideSectionId);
    
    showSection.classList.remove('hidden');
    hideSection.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const tipForm = document.getElementById('tipForm');
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const totalAmountDisplay = document.getElementById('totalAmountDisplay');
    const totalGstAmountDisplay = document.getElementById('totalGstAmountDisplay');
    

    // Function to calculate and display the total
    function calculateAndDisplayTotal() {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);

        // Validate inputs

        if (isNaN(billAmount) || billAmount < 0) {
            alert('Please enter a valid bill amount.');
            billAmountInput.focus();
            updateTotalDisplay(0); // Reset display
            return;
        }

        if (isNaN(tipPercentage) || tipPercentage < 0) {
            alert('Please enter a valid tip percentage.');
            tipPercentageInput.focus();
            updateTotalDisplay(billAmount > 0 ? billAmount : 0); // Show bill amount if valid, else 0
            return;
        }

        const tipAmount = billAmount * (tipPercentage / 100);
        const totalValue = billAmount + tipAmount;
        const totalGstValue = totalValue - billAmount;
        totalGstAmountDisplay.textContent = totalGstValue.toFixed(2);
        updateTotalDisplay(totalValue);
    }

    // Function to update the total display with currency formatting
    
    function updateTotalDisplay(amount) {
        totalAmountDisplay.textContent = `₹${amount.toFixed(2)}`;
        
    }

    // Event listener for form submission
    tipForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        calculateAndDisplayTotal();
    });

    // Optional: Recalculate on input change for a more dynamic feel
    // billAmountInput.addEventListener('input', calculateAndDisplayTotal);
    // tipPercentageInput.addEventListener('input', calculateAndDisplayTotal);

    // Initialize display
    updateTotalDisplay(0);
});
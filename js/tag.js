document.addEventListener('DOMContentLoaded', async () => {
    const startNFCButton = document.getElementById('startNFC');
    const paymentStatus = document.getElementById('paymentStatus');

    startNFCButton.addEventListener('click', async () => {
        try {
            if ('NDEFReader' in window) {
                const nfcPermission = await navigator.permissions.query({ name: 'nfc' });
                if (nfcPermission.state === 'granted' || nfcPermission.state === 'prompt') {
                    const reader = new NDEFReader();
                    await reader.scan();
                    paymentStatus.textContent = 'NFC tag detected!';
                    // Process payment logic here based on detected NFC tag
                    processPayment();
                } else {
                    console.error('NFC permission denied by the user.');
                }
            } else {
                console.error('NDEFReader not supported by the browser.');
            }
        } catch (error) {
            console.error('Error accessing NFC functionality:', error);
        }
    });

    function processPayment() {
        // Simulated payment processing logic (replace with actual implementation)
        setTimeout(() => {
            paymentStatus.textContent = 'Payment successful!';
        }, 2000);
    }
});

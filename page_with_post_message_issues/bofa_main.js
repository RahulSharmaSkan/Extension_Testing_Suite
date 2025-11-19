// Main page JavaScript functionality

function openPopup() {
    const overlay = document.getElementById('popupOverlay');
    const iframe = document.getElementById('popupIframe');
    
    // Set the iframe source to the separate HTML file
    iframe.src = 'bofa_iframe_content.html';
    
    // Show the popup
    overlay.classList.add('active');
}

function closePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.remove('active');
}

// Close popup when clicking outside the content
document.getElementById('popupOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// PostMessage listener - mimics customer's security mechanism
// This closes the popup if any message with incorrect format is received
window.addEventListener('message', function(event) {
    console.log('[TOP WINDOW] Message received:', event.data);
    
    // Define the SPECIFIC format required by the customer's site
    // Expected format: { type: 'CUSTOMER_APP', action: string, token: string }
    const isValidFormat = (
        event.data &&
        typeof event.data === 'object' &&
        event.data.type === 'CUSTOMER_APP' &&
        typeof event.data.action === 'string' &&
        typeof event.data.token === 'string' &&
        event.data.token.length > 0
    );
    
    if (!isValidFormat) {
        console.warn('[SECURITY] Invalid message format detected! Closing popup for security reasons.', event.data);
        // Close the popup if it's open (customer's security mechanism)
        const overlay = document.getElementById('popupOverlay');
        if (overlay && overlay.classList.contains('active')) {
            closePopup();
        }
    } else {
        console.log('[SECURITY] Valid message format accepted:', event.data);
    }
});


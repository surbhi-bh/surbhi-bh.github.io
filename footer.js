async function loadFooter() {
    try {
        // Adjust the path to point to footer.html outside the portfolio directory
        const response = await fetch('../footer.html');
        if (!response.ok) {
            throw new Error(`Failed to fetch footer.html: ${response.status}`);
        }

        const footerHtml = await response.text();
        document.getElementById('footer-container').innerHTML = footerHtml;

        // Update current year dynamically
        const currentYearSpan = document.querySelector('#currentYear');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Load the footer when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', loadFooter);

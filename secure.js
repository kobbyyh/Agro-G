// Check authentication status
function checkAuthStatus() {
    const user = auth.currentUser;
    if (!user) {
        // User is not authenticated, redirect to login page
        window.location.href = "login.html";
    }
}

// Call the function to check authentication status when the page loads
window.addEventListener('DOMContentLoaded', () => {
    checkAuthStatus();
});

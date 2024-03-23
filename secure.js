// Check authentication status
function checkAuthStatus() {
    const user = auth.currentUser;
    const currentPage = window.location.pathname;
    const isLoginPage = currentPage.includes("login.html");

    if (!user && !isLoginPage) {
        // User is not authenticated and not on the login page, redirect to login
        window.location.href = "login.html";
    }
}

// Call the function to check authentication status when the page loads
window.addEventListener('DOMContentLoaded', () => {
    checkAuthStatus();
});

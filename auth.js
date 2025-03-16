// auth.js
const supabase = window.supabase; // Get from global scope

document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab-link');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and forms
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding form
            tab.classList.add('active');
            const formId = tab.dataset.form;
            document.getElementById(`${formId}Form`).classList.add('active');
        });
    });

    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            alert(`Login failed: ${error.message}`);
        } else {
            window.location.href = 'profile.html';
        }
    });

    // Signup form submission
    document.getElementById('signupForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Clear previous errors
        document.querySelectorAll('.password-match-error').forEach(el => el.classList.remove('show'));

        // Password validation
        if (password !== confirmPassword) {
            const errorElement = document.createElement('div');
            errorElement.className = 'password-match-error show';
            errorElement.textContent = 'Passwords do not match';
            document.getElementById('confirmPassword').parentElement.appendChild(errorElement);
            return;
        }

        if (password.length < 8) {
            const errorElement = document.createElement('div');
            errorElement.className = 'password-match-error show';
            errorElement.textContent = 'Password must be at least 8 characters';
            document.getElementById('signupPassword').parentElement.appendChild(errorElement);
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        full_name: fullName
                    }
                }
            });

            if (error) {
                alert(`Signup failed: ${error.message}`);
                return;
            }
            
            if (data.user?.identities?.length === 0) {
                alert('User already registered');
                return;
            }

            alert('Check your email for Verification!');
            window.location.href = 'login.html';
        } catch (err) {
            console.error('Signup error:', err);
            alert('An unexpected error occurred');
        }
    });

   // Forgot password modal
    document.getElementById('forgotPassword').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('resetPasswordModal').style.display = 'block';
    });

    // Password reset request
    document.getElementById('resetPasswordRequestForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('resetEmail').value;

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: 'https://your-username.github.io/your-repo/reset-password.html'
            });

            if (error) throw error;
            alert('Password reset link sent to your email!');
            document.getElementById('resetPasswordModal').style.display = 'none';
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    });

    // Add close functionality for reset modal
    const allModals = document.querySelectorAll('.modal');
    const allCloseButtons = document.querySelectorAll('.close');

    // Show reset modal when Forgot Password is clicked
    document.getElementById('forgotPassword').addEventListener('click', (e) => {
        e.preventDefault();
        // Hide all modals first
        allModals.forEach(modal => modal.style.display = 'none');
        // Show reset modal
        document.getElementById('resetPasswordModal').style.display = 'block';
    });
    
    // Close modal when X is clicked
    allCloseButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    
});

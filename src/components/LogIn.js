import Register from "./Register";
export default function LogIn() {
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

    const modalContent = document.createElement("div");
    modalContent.className = "bg-white p-6 rounded shadow-lg w-full max-w-md relative";
    modalOverlay.appendChild(modalContent);

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✖";
    closeBtn.className = "absolute top-2 right-2 text-gray-500 hover:text-black";
    closeBtn.addEventListener("click", closeModal);
    modalContent.appendChild(closeBtn);

    // Function to close modal and clean up
    function closeModal() {
        document.removeEventListener("keydown", handleEscKey);
        modalOverlay.remove();
    }

    // ESC key handler
    function handleEscKey(e) {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    // Attach keydown listener
    document.addEventListener("keydown", handleEscKey);

    // === Your existing form content goes here ===
    const heading = document.createElement("h2");
    heading.className = "text-2xl font-bold mb-4";
    heading.textContent = "Log In";
    modalContent.appendChild(heading);

    const form = document.createElement("form");
    modalContent.appendChild(form);

    const emailDiv = document.createElement("div");
    emailDiv.className = "mb-4"
    form.appendChild(emailDiv);

    const emailLabel = document.createElement("label");
    emailLabel.className = "block text-gray-700"
    emailLabel.textContent = "Email:";
    emailLabel.setAttribute("for", "email");
    emailDiv.appendChild(emailLabel);

    const email = document.createElement("input");
    email.className = "w-full px-3 py-2 border"
    email.setAttribute("type", "email");
    email.setAttribute("name", "email");
    email.setAttribute("id", "email");
    email.setAttribute("placeholder", "Email");
    emailDiv.appendChild(email);

    const passwordDiv = document.createElement("div");
    passwordDiv.className = "mb-4"
    form.appendChild(passwordDiv);

    const passwordLabel = document.createElement("label");
    passwordLabel.className = "block text-gray-700"
    passwordLabel.textContent = "Password:";
    passwordLabel.setAttribute("for", "password");
    passwordDiv.appendChild(passwordLabel);

    const password = document.createElement("input");
    password.className = "w-full px-3 py-2 border"
    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.setAttribute("id", "password");
    password.setAttribute("placeholder", "Password");
    passwordDiv.appendChild(password);

    const rememeberMeDiv = document.createElement("div");
    rememeberMeDiv.className = "mb-4 flex items-center justify-between";
    form.appendChild(rememeberMeDiv);

    const rememeberMeLabel = document.createElement("label");
    rememeberMeLabel.className = "inline-flex items-center"
    rememeberMeLabel.setAttribute("for", "rememberMe");
    rememeberMeDiv.appendChild(rememeberMeLabel);

    const rememberMeCheckbox = document.createElement("input");
    rememberMeCheckbox.className = "form-checkbox";
    rememberMeCheckbox.setAttribute("type", "checkbox");
    rememberMeCheckbox.setAttribute("name", "rememberMe");
    rememberMeCheckbox.setAttribute("id", "rememberMe");
    rememeberMeLabel.appendChild(rememberMeCheckbox);

    const rememberMe = document.createElement("span");
    rememberMe.className = "ml-2 text-gray-700";
    rememberMe.textContent = "Remember me";
    rememeberMeLabel.appendChild(rememberMe);

    const forgotPassword = document.createElement("a");
    forgotPassword.className = "text-red-800"
    forgotPassword.textContent = "Forgot Password?";
    forgotPassword.setAttribute("href", "#");
    rememeberMeDiv.appendChild(forgotPassword);

    const loginDiv = document.createElement("div");
    loginDiv.className = "mb-4"
    form.appendChild(loginDiv);

    const loginButton = document.createElement("button");
    loginButton.className = "bg-red-500 text-white py-2 rounded w-full";
    loginButton.textContent = "Log In";
    loginButton.setAttribute("type", "submit");
    loginDiv.appendChild(loginButton);

    const registerDiv = document.createElement("div");
    registerDiv.className = "text-center"
    modalContent.appendChild(registerDiv);

    const noAccountSpan = document.createElement("span");
    noAccountSpan.className = "text-gray-700"
    noAccountSpan.textContent = "Don't have an account?";
    registerDiv.appendChild(noAccountSpan);

    const signUpButton = document.createElement("button");
    signUpButton.className = "text-red-800"
    signUpButton.textContent = "Sign Up";
    signUpButton.setAttribute("type", "button");
    signUpButton.setAttribute("id", "signUpButton");
    registerDiv.appendChild(signUpButton);
    signUpButton.addEventListener("click", () => {
        
        closeModal();
        const modal = Register(); 
        document.body.appendChild(modal);
    });

    return modalOverlay;
}

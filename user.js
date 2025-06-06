const API_BASE_URL = "https://jeevanantham21-bugtracker.hf.space/api/auth";

// document.getElementById("errorMsg").textContent = "Signup failed!";
let errorMsg = document.getElementById("errorMsg");
let registered = false;
// https://jeevanantham21-bugtracker.hf.space/api/auth/signup
async function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
 const email=document.getElementById("signup-email").value;
  
 try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
    
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password,email }),
    });

    const result = await response.text();
    console.log(result);
    registered=true;
    localStorage.setItem("userName", username);
    localStorage.setItem("email", email);

    window.location.href = "./index.html";
    // document.getElementById("message").textContent = result;
    // const errorEl = document.getElementById("errorMsg");

if (!registered) {
  errorMsg.textContent = "Signup failed!";
}

  } catch (error) {
    console.error("Signup Error:", error);
    document.getElementById("message").textContent = "Signup failed.";
  }
}
const errorEl = document.getElementById("errorMsg");
if (errorEl) {
  errorEl.textContent = "Signup failed!";
}


async function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.text();
    document.getElementById("message").textContent = result;
    window.location.href="./index.html"
  } catch (error) {
    console.error("Login Error:", error);
    document.getElementById("message").textContent = "Login failed.";
  }
}

const API_BASE_URL = "http://localhost:8080/api/auth";

async function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.text();
    document.getElementById("message").textContent = result;
  } catch (error) {
    console.error("Signup Error:", error);
    document.getElementById("message").textContent = "Signup failed.";
  }
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
  } catch (error) {
    console.error("Login Error:", error);
    document.getElementById("message").textContent = "Login failed.";
  }
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation Form</title>
    <style>.error { color: red; }</style>
</head>
<body>
    <form id="myForm">
        <label>Phone Number:</label>
        <input type="text" id="phone"><br><br>
        <label>Email:</label>
        <input type="text" id="email"><br><br>
        <label>Password:</label>
        <input type="password" id="password"><br><br>
        <button type="button" onclick="validateForm()">Submit</button>
    </form>
    <p id="errorMessages" class="error"></p>

    <script>
        function validateForm() {
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            let errorMessage = "";

            const phoneRegex = /^[0-9]{10}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

            if (!phoneRegex.test(phone)) errorMessage += "Invalid phone number. Must be 10 digits.\n";
            if (!emailRegex.test(email)) errorMessage += "Invalid email format.\n";
            if (!passwordRegex.test(password)) errorMessage += "Password must be at least 8 characters long and contain at least one letter and one number.\n";

            document.getElementById('errorMessages').innerText = errorMessage || "Form submitted successfully!";
        }
    </script>
</body>
</html>

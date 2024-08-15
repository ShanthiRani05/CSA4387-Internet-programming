<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "weather_condition1"; // Ensure this matches your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$temperature = $_POST['temperature'];
$humidity = $_POST['humidity'];
$windspeed = $_POST['windspeed'];
$weather = $_POST['weather'];
$city = $_POST['city'];

// Prepare SQL statement
$sql = "INSERT INTO weather_conditiontable (temperature, humidity, windspeed, weather, city) 
        VALUES ('$temperature', '$humidity', '$windspeed', '$weather', '$city')";

// Execute query
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>

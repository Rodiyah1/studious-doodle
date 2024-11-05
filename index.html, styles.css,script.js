<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gacha Item Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Gacha Item Game</h1>
        <div id="result">Klik tombol Gacha untuk mendapatkan berlian!</div>
        <button id="gachaButton">Gacha</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f2f2f2;
}

.container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
document.getElementById("gachaButton").addEventListener("click", function() {
    // Angka acak antara 50 hingga 500 sebagai reward berlian
    const diamondReward = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
    const resultDiv = document.getElementById("result");

    resultDiv.textContent = `Selamat! Anda mendapatkan ${diamondReward} berlian!`;
});

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Form</title>
</head>
<body>
    <h1>Thank You</h1>
    <p>Here is the information you have submitted:</p>
    <ol>
        <li><em>First Name:</em> <?php echo $_POST["fname"]?></li>
        <li><em>Last Name:</em> <?php echo $_POST["lname"]?></li>
        <li><em>Country:</em> <?php echo $_POST["country"]?></li>
        <li><em>Subject:</em> <?php echo $_POST["subject"]?></li>
    </ol>
</body>
</html>

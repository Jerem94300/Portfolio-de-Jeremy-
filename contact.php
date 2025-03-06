
<?php
// Activer l'affichage des erreurs PHP
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Affichage des données POST pour debug
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';

// Connexion à la base de données
try {
    $bddContactPortfolio = new PDO('mysql:host=127.0.0.1;dbname=u101994535_contact', 'u101994535_abelardjeremy1', 'Taynamaelle10*', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
    ]);
    echo "";
} catch (PDOException $e) {
    echo "Erreur de connexion : Code " . $e->getCode() . " - " . $e->getMessage();
    exit;  // Arrêter l'exécution si la connexion échoue
}

$success = false; // Initialisation de la variable pour éviter l'erreur "Undefined variable"

// Traitement du formulaire si une soumission est détectée
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $stmt = $bddContactPortfolio->prepare("INSERT INTO formulaire_contact (nom, prenom, email, message, dateEnregistrement) VALUES (:lastName, :firstName, :email, :message, NOW())");

    $stmt->bindParam(':firstName', $_POST['firstName']);
    $stmt->bindParam(':lastName', $_POST['lastName']);
    $stmt->bindParam(':email', $_POST['email']);
    $stmt->bindParam(':message', $_POST['message']);

    $success = $stmt->execute();

}


// Envoi d'un email après l'enregistrement en base de données
if ($success) {
    $to = "abelardjeremy1@gmail.com";
    $subject = "Nouveau message de contact - Portfolio";
    $messageBody = "
        <html>
        <head>
            <title>Nouveau message de contact</title>
        </head>
        <body>
            <h2>Un nouveau message a été soumis via votre formulaire de contact</h2>
            <p><strong>Nom :</strong> {$_POST['lastName']}</p>
            <p><strong>Prénom :</strong> {$_POST['firstName']}</p>
            <p><strong>Email :</strong> {$_POST['email']}</p>
            <p><strong>Message :</strong></p>
            <p>{$_POST['message']}</p>
        </body>
        </html>
    ";

    // Définition des headers pour envoyer un email en HTML
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: contact@jeremyabelard.fr" . "\r\n";

    // Envoi de l'email
    if (mail($to, $subject, $messageBody, $headers)) {
        echo "";
    } else {
        echo "Erreur lors de l'envoi de l'email.";
    }
}


?>




<!DOCTYPE html>
<html lang="fr">
<head>
  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-NCMRXL4Z');</script>
  <!-- End Google Tag Manager -->

  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PS0EV8L4EJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PS0EV8L4EJ');
</script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio de Abélard Jérémy</title>
  <link rel="stylesheet" href="css/contact.css">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/footer.css">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/body.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
  <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NCMRXL4Z"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> 
  <!-- End Google Tag Manager (noscript) -->




  <header class="header">
      <a href="index.html" class="title__link">
        <h1 class="title__h1">Jérémy Abelard</h1>
        </a>
  
    <nav class="nav">
        <ul class="nav__list">
            <li class="list__item">
                <a href="index.html" class="nav__link nav__home" data-page="home">
                    <i class="bi bi-house-door"></i>
                </a>
            </li>
            <li class="list__item">
                <a href="aboutme.html" class="nav__link nav__about" data-page="aboutMe">
                    <i class="bi bi-person"></i>
                </a>
            </li>
            <li class="list__item">
                <a href="experiences.html" class="nav__link nav__experience" data-page="experience">
                    <i class="bi bi-briefcase"></i>
                </a>
            </li>
            <li class="list__item">
                <a href="games.html" class="nav__link nav__games" data-page="games">
                    <i class="bi bi-controller"></i>
                </a>
            </li>
            <li class="list__item">
                <a href="contact.php" class="nav__link nav__contact" data-page="contact">
                    <i class="bi bi-telephone"></i>
                </a>
            </li>
        </ul>
    </nav>
</header>
  <main id="content" class="main">
    
    <div class="contact__container">
     

        <form method="post" action="" class="form" id="contact-form">
            <div class="form__group">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" required class="form__control">
            </div>
            <div class="form__group">
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" required class="form__control">
            </div>
            <div class="form__group">
                <label for="email">Email</label>
                <input type="email" name="email" required class="form__control">
            </div>
            <div class="form__group">
                <label for="message">Your Message</label>
                <textarea name="message" id="textarea" class="form__control"></textarea>
            </div>
            <div class="button__send">
            <button type="submit" class="link__send">Send</button>
            </div>
             <!-- Message de validation de formumaire -->
            <?php if ($_SERVER['REQUEST_METHOD'] === 'POST' && $success) : ?>
            <span class="msg_FormSuccess">Votre message a bien été envoyé.</span>
            <?php endif; ?>
    
        </form>
    </div>

    
  </main>

  <footer class="footer">
    <ul class="footer__nav__list">
      <li><a href="https://www.linkedin.com/in/jérémy-abélard-512a762b1/" class="nav__link nav__link__footer"><i class="bi bi-linkedin"></i></a></li>
    </ul>
        <p class="copyright">&copy; 2024 - Jérémy Abelard</p>

  </footer>

  

</body>
</html>


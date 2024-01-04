<!-- $recaptcha_secret = 'CLAVE_SECRETA'; 
$recaptcha_response = $_POST['recaptcha_response']; 
$url = 'https://www.google.com/recaptcha/api/siteverify'; 

$data = array( 'secret' => $recaptcha_secret, 'response' => $recaptcha_response, 'remoteip' => $_SERVER['REMOTE_ADDR'] ); 
$curlConfig = array( CURLOPT_URL => $url, CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_POSTFIELDS => $data ); 
$ch = curl_init(); 
curl_setopt_array($ch, $curlConfig); 
$response = curl_exec($ch); 
curl_close($ch);

$jsonResponse = json_decode($response);
if ($jsonResponse->success === true) { 
    // Código para procesar el formulario
} else {
   // Código para aviso de error
} -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["message"];

    $destinatario = "hola@nurialiano.es"; // Cambia esto a tu dirección de correo electrónico

    $cabeceras = "From: $email";
    mail($destinatario, $asunto, $mensaje, $cabeceras);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuria Liaño</title>
    <link rel="stylesheet" href="../css/send.css">
    <link rel="icon" href="../media/img/icons/logo.ico" type="image/x-icon">
    <script src="../js/main.js"></script>
    <!-- responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <header>
        <a href="../index.html"><img src="../media/img/bck_transparent_A2D31C_inline.png" alt="nl-logo"></a>   
    </header>
    <main>
        <section id="message">
            <h1 id="title-big">¡Gracias por ponerte en contacto!</h1>
            <h3>Tu mensaje ha sido enviado con éxito. Te responderé lo antes posible.</h3>
            <p>Mientras tanto puedes echar un vistazo a mis redes sociales &#x1F609;</p>
        </section>
        <section>
            <div id="social-media">
                <a href="https://twitter.com/Nuria_Liano" target="_blank" rel="noopener noreferrer" class="social-link"><img src="../media/img/icons/twitter.svg" alt="twitter" id="twitter" class="social-img"></a>
                <a href="https://twitter.com/Nuria_Liano" target="_blank" rel="noopener noreferrer" class="social-link"><img src="../media/img/icons/instagram.svg" alt="instagram" id="instagram" class="social-img"></a>
                <a href="https://www.twitch.tv/nurialiano" target="_blank" rel="noopener noreferrer" class="social-link"><img src="../media/img/icons/twitch.svg" alt="twitch" id="twitch" class="social-img"></a>
                <a href="https://github.com/NuriaLiano" target="_blank" rel="noopener noreferrer" class="social-link"><img src="../media/img/icons/github.svg" alt="github" id="github" class="social-img"></a>
                <a href="https://gitlab.com/Nuria_Liano" target="_blank" rel="noopener noreferrer" class="social-link"><img src="../media/img/icons/gitlab.svg" alt="gitlab" id="gitlab" class="social-img"></a>
                <a href="https://discord.com/users/689209701895766049" target="_blank" rel="noopener noreferrer" class="social-link"><img src="../media/img/icons/discord.svg" alt="discord" id="discord" class="social-img"></a>
            </div>
        </section>
        <button id="back-btn"><a href="../index.html">Volver al inicio</a></button>
    </main>
    <footer>
            <div class="footer-container">
                <div class="developer">
                    <p>Desarrollado por <span>Nuria Liaño</span></p>
                    <div class="dev-imgs">
                        <p>con mucha</p>
                        <img src="../media/img/icons/beer.png" alt="beer icon" id="beer" title="cervezuca">
                        <p>y</p>
                        <img src="../media/img/icons/metal.png" alt="metal icon" id="metal" title="metal">
                    </div>
                    <div class="location">
                        <p>en</p>
                        <img src="../media/img/icons/cantabria.png" alt="cantabria flag" id="cantabria" title="Cantabria">
                    </div>
                </div>
                
            </div>
        </footer>
</body>
</html>
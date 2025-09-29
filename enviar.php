<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = strip_tags(trim($_POST["nome"]));
    $phone = $_POST['phone'];
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensagem = trim($_POST["mensagem"]);

    $to = "contato@valemaqrefrigeracao.online";
    $subject = "Contato do site - $nome";

    $body = "Nome: $nome\n";
    $body .= "E-mail: $email\n";
    $body .= "Telefone: $phone\n\n";
    $body .= "Mensagem:\n$mensagem\n";

    $headers = "From: Site Valemaq <contato@valemaqrefrigeracao.online>\r\n";
    $headers .= "Reply-To: $nome <$email>\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Enviado com sucesso!";
    } else {
        http_response_code(500);
        echo "Erro ao enviar a mensagem.";
    }
} else {
    http_response_code(403);
    echo "Método não permitido.";
}
?>

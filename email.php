<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = strip_tags(trim($_POST["nome"]));
    $phone = $_POST['phone'];
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensagem = trim($_POST["mensagem"]);

    $to = "email_do_seu_avo@exemplo.com";  // email do VÔ aqui
    $subject = "Contato do site - $nome";
    $body = "Nome: $nome\nE-mail: $email\nTelefone: $phone\n\nMensagem:\n$mensagem";
    $headers = "From: $nome <$email>";

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

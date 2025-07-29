<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];

  $to = "seuavo@email.com";
  $subject = "Novo contato do site";
  $message = "Nome: $name\nEmail: $email\nTelefone: $phone";

  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    echo "Mensagem enviada com sucesso.";
  } else {
    echo "Erro ao enviar.";
  }
}
?>
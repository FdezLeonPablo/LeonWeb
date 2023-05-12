document.addEventListener('DOMContentLoaded', function () {
    const toggleModeButton = document.querySelector('.toggle-mode');

    toggleModeButton.addEventListener('click', function () {
        const bodyElement = document.querySelector('body');
        const chatbotContainer = document.getElementById("chatbot-container");

        if (bodyElement.classList.contains('dark-mode')) {
            bodyElement.classList.remove('dark-mode');
            bodyElement.classList.add('light-mode');

            // Cambiar el tema del chatbot a light
            chatbotContainer.classList.remove('chatbot-dark');
            chatbotContainer.classList.add('chatbot-light');
        } else {
            bodyElement.classList.remove('light-mode');
            bodyElement.classList.add('dark-mode');

            // Cambiar el tema del chatbot a dark
            chatbotContainer.classList.remove('chatbot-light');
            chatbotContainer.classList.add('chatbot-dark');
        }
    });
});
$(document).ready(function () {
    // Función para manejar el envío de mensajes y la respuesta del bot
    function processMessage() {
        var message = $("#user-input").val();
        $("#chatbot-messages").append("<div class='user-message'>" + message + "</div>");

        $.post("/get_response", { prompt: message }, function (data) {
            var response = data.response;
            $("#chatbot-messages").append("<div class='bot-message'>" + response + "</div>");
        });

        $("#user-input").val("");
    }

    // Evento de clic en el botón "Enviar"
    $("#send-button").click(function (e) {
        e.preventDefault();
        processMessage();
    });

    // Evento de tecla para el campo de entrada
    $("#user-input").keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            processMessage();
        }
    });
});

// Chatbot show/hide functionality
const chatbotContainer = document.getElementById("chatbot-container");
document.getElementById("open-chatbot").addEventListener("click", function () {
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
        chatbotContainer.style.display = "flex";
    } else {
        chatbotContainer.style.display = "none";
    }
});

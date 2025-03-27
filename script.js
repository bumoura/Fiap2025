document.getElementById("groupForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const names = [
        document.getElementById("nome1").value,
        document.getElementById("nome2").value,
        document.getElementById("nome3").value,
        document.getElementById("nome4").value,
        document.getElementById("nome5").value
    ];
    const message = document.getElementById("historia").value;

    const data = {
        names: names,
        message: message
    };

    try {
        const response = await fetch("https://fsdt-contact.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Enviado com sucesso!");
            document.getElementById("groupForm").reset();
        } else {
            alert("Ocorreu um erro ao enviar os dados.");
        }
    } catch (error) {
        alert("Erro ao conectar com o servidor.");
    }
});

function abrirEnvelope() {

    const envelope = document.querySelector(".envelope");

    envelope.classList.add("aberto");

    setTimeout(() => {
        envelope.classList.add("subir");
    }, 2000);

    setTimeout(() => {
        window.location.href = "carta.html";
    }, 3500);

}

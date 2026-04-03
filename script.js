function whatsapp(){
    let numero = "244934919736";
    let mensagem = "Olá, quero mais informações sobre a conta Visa.";

    window.open(`https://wa.me/${numero}?text=${mensagem}`);
}
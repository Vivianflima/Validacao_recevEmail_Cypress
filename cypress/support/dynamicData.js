export function generateDynamicEmail(name) {
    const domain = 'mailinator.com'; 
    return `${name}@${domain}`;
}
  
export function generateDynamicName() {
    // Gerar um nome dinâmico aleatório
    const randomNumber = Math.floor(Math.random() * 1000); // Gera um número aleatório entre 0 e 999
    return `Teste${randomNumber}`;
}

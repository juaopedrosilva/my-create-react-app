 const options = {
    icon: 'error', 
    title: 'Erro ao adicionar pedido...',
}

export const CLIENT_ID_ERROR =  { 
    ...options,
    text: 'ID do clientn ão corresponde.'
}

export const CLIENT_OBSERVATION_ERROR = {
    ...options,
    text: 'A observação não pode estar vazia.'
}

export const CLIENT_PAYMENT_ERROR = {
    ...options,
    text: 'Selecione uma forma de pagamento'
}
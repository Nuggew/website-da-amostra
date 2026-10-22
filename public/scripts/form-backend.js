const maxYearsOfServiceRequesting = 2;

function generateMaxDate(){
    const today = new Date();
    var maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() + maxYearsOfServiceRequesting);
    maxDate.setMonth(today.getMonth());
    maxDate.setDate(today.getDate());
    return maxDate;
}

function validateName(name){
    const regex = /^[a-zA-Z\u00C0-\u01FF]+([ \-\'][a-zA-Z\u00C0-\u01FF]+)+$/; // Estrutura para "Nome Nome Nome" ou "Nome do(a) Nome Nome"
    const trimmedName = name.trim();
    return regex.test(trimmedName);
}

function validateDate(date){ 
    return new Date(date).getFullYear() <= generateMaxDate().getFullYear() && new Date(date).getFullYear() >= new Date().getFullYear();
}

function validateEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Estrutura para "nome@email.com"
    return regex.test(email);
}
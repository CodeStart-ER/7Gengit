var kodersArray = [
]
const saveKoder = () => {
    let koderName = document.getElementById("koder-name").value;
    let koderLastName = document.getElementById("koder-last-name").value;
    let koderDeliveredPractices = document.getElementById("koder-delivered-practices").value;
    let koderAssistances = document.getElementById("koder-assistances").value;
    
    let koderObject = {koderName,koderLastName,koderDeliveredPractices,koderAssistances}
    
    console.log(koderObject)
    kodersArray.push(koderObject);
    printKoders();
}
const printKoders = () => {
    document.getElementById("koders-wrapper").innerHTML = ""
    kodersArray.forEach((koder,index) => {
        let koderFullName = koder.koderName + " " + koder.koderLastName;
        let koderAssistances = koder.koderAssistances;
        let koderDeliveredPractices = koder.koderDeliveredPractices;
        let currentContent = document.getElementById("koders-wrapper").innerHTML;  
        let newContent = `
            <tr id='koder-${index}'>
                <td>${index + 1}</td>
                <td><span class="text-uppercase">${koderFullName}</span></td>
                <td>${koderAssistances}</td>
                <td>${koderDeliveredPractices}</td>
                <td>
                    <div class='btn btn-danger' id='btn-delete'>Eliminar</div>
                </td>
            </tr>
            `


            document.getElementById("koders-wrapper").innerHTML= currentContent + newContent;
           
        })

    }
const enCardKoders = () => {
    document.getElementById("koders-cards").innerHTML = ""
    kodersArray.forEach((koder,index) => {
        let koderFullName = koder.koderName + " " + koder.koderLastName;
        let koderAssistances = koder.koderAssistances;
        let koderDeliveredPractices = koder.koderDeliveredPractices;
        let currentContentCards = document.getElementById("koders-cards").innerHTML;
        let newContentCards = `
            <card id='koder-${index}'>
                <h5 class="card-title">${koderFullName}</h5>
                <div class="card">
                    <div class="card-header>"Practivas Entregadas ${koderDeliveredPractices}>
                    <div class="card-body>"Asistencias ${koderAssistances}>
                </div>
                <div class="btn btn-danger mt-3 btn-block">Eliminar</div>
                </div>

        `

        document.getElementById("koders-cards").innerHTML = currentContentCards + newContentCards;
    })
}

var saveKoderBtn = document.getElementById("submit-button");
saveKoderBtn.addEventListener("click",saveKoder);
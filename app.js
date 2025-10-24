const inputEmpresa = document.getElementById ('inputEmpresa');
 const inputEnlace = document.getElementById ('inputEnlace');
 const inputTelefono = document.getElementById ('inputTelefono');


btnguardar.addEventListener('click', () =>{
    
    const empresa = inputEmpresa.value;
    const enlace = inputEnlace.value;
    const telefono = inputTelefono.value;



 
    
    const company = {
        empresa : empresa,
        enlace,
        telefono,

    }

    console.log(company);
    const jsonString = JSON.stringify(company);
    console.log(jsonString);

    const borradorEmpresa = sessionStorage.setItem ('company', jsonString);
});
    





document.addEventListener('DOMContentLoaded', () =>{
    
    const dataLocal = sessionStorage.getItem('company');
    
    if(dataLocal){
        
        console.log(dataLocal);
        const companyz = JSON.parse(dataLocal);
        console.log('Datos parseados');
        console.log(companyz);
        console.log(companyz.empresa);
        console.log(companyz.enlace);
        console.log(companyz.telefono);
   
        inputEmpresa.value = companyz.empresa;
        inputEnlace.value = companyz.enlace;
        inputTelefono.value= companyz.telefono;
       

    }

});
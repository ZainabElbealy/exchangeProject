let countryForm = document.querySelector('.countryForm')
let countryTo = document.querySelector('.countryTo')
let amount =document.querySelector('.amount')
let result =document.querySelector('h5')
let form = document.querySelector('form')
let dataNumbers;

fetch('../Data/country-list.json')

.then(res=>res.json())
.then((data)=>{
    let i;
    // console.log(data)
    for ( i in data) {
        // console.log(i)
      let  countryFormInput = `<option value='${i}'>${i}</option>`
      let  countryTOInput = `<option value='${i}'>${i}</option>`
    countryForm.innerHTML+=countryFormInput
    countryTo.innerHTML+=countryTOInput


    }
    
})
form.addEventListener('submit',(x)=>{
    
    x.preventDefault();
    Exchange()
                     
   })

function Exchange(){
    fetch(`https://v6.exchangerate-api.com/v6/b340bbce3b714d0a533daab9/latest/${countryForm.value}`)
    .then(res=>res.json())
    .then((data)=>{
        //console.log(data)
        dataNumbers=data.conversion_rates[countryTo.value];
        
         console.log(dataNumbers)
         let countryFormV=countryForm.value;
        let countryToV=countryTo.value;
        let amountInput=amount.value;
        // console.log(countryFormInputV)
           let convert=amountInput* dataNumbers 
        result.innerHTML=`${amountInput} ${countryFormV} = ${convert} ${countryToV}`
        
        
    
    
    })
}

  
    
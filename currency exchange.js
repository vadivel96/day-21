
let emptyarray=[];


function output(event){
    event.preventDefault();
      
 
   async function httpcode() {

    function currencycode1(){
        return findingcurrencycode1()
        async function findingcurrencycode1(){
        let country=document.getElementById('typeCountry1').value;
        let restcountries=await fetch(`https://restcountries.com/v3.1/name/${country}`)
        var country1=await restcountries.json();
        var currencycode1=Object.keys(country1[0].currencies);
        currencycode1= currencycode1[0].toLowerCase();
        emptyarray.push(currencycode1)
        return currencycode1;
        
       
    }
         
    }

    

    
     function currencycode2(){
    
      return findingcurrencycode2()
      async function findingcurrencycode2(){
        let country=document.getElementById('typeCountry2').value;
        let restcountries=await fetch(`https://restcountries.com/v3.1/name/${country}`)
        var country2=await restcountries.json();
        var currencycode2=Object.keys(country2[0].currencies);
        currencycode2=currencycode2[0].toLowerCase();
        emptyarray.push(currencycode2)
        return currencycode2
        
    }
   
}

        let a = await currencycode1();
        console.log(a);
        let b = await currencycode2();
        console.log(b);
      
        let codes = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${b}/${a}.json`);
        let httpcode1 = await codes.json();
        console.log(httpcode1);

        let newdiv=document.querySelector(".new");
let card=document.createElement('div');
card.innerHTML=`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${document.getElementById('typeCountry1').value}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${document.getElementById('typeCountry2').value}</h6>
  <p class="card-text">
      ${httpcode1.a}  equal to 1${b}
      </br>
  last updated:${httpcode1.date}
  </p>

</div>

</div>`
newdiv.append(card);

    }

 
httpcode();



}







function output(){
 
      function currencycode1(){
       event.preventDefault();
        return findingcurrencycode1()
        async function findingcurrencycode1(){
        let country=document.getElementById('typeCountry1').value;
        let restcountries=await fetch(`https://restcountries.com/v3.1/name/${country}`)
        var country1=await restcountries.json();
        var currencycode1=Object.keys(country1[0].currencies);
        currencycode1= currencycode1[0].toLowerCase();
        return currencycode1;
       
    }
         
    }

    

    
     function currencycode2(){
      event.preventDefault();
      return findingcurrencycode2()
      async function findingcurrencycode2(){
        let country=document.getElementById('typeCountry2').value;
        let restcountries=await fetch(`https://restcountries.com/v3.1/name/${country}`)
        var country2=await restcountries.json();
        var currencycode2=Object.keys(country2[0].currencies);
        currencycode2=currencycode2[0].toLowerCase();
        return currencycode2
        
    }
   
}

    async function httpcode() {
        let a = await currencycode1();
        console.log(a);
        let b = await currencycode2();
        console.log(b);
        let codes = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${b}/${a}.json`);
        let httpcode1 = await codes.json();
        console.log(httpcode1);

    }

 
httpcode();

}

console.log('im the first ')

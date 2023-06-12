const currencyFirst = document.getElementById('currencyFirst');
const currencySecond = document.getElementById('currencySecond');
const count = document.getElementById('count');
const equal = document.getElementById('equal');
const exchangeRate = document.getElementById('exchangeRate');

updateRate();

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/210d6d9893dead63844dd5d7/latest/${currencyFirst.value}`).then((res)=>res.json()).then((data)=>{
        console.log(data)
        const rate=data.conversion_rates[currencySecond.value]

        equal.innerText=(count.value *rate).toFixed(2);
        exchangeRate.textContent=`1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`
    })
};


currencyFirst.addEventListener('change',updateRate);
currencySecond.addEventListener('change',updateRate);
count.addEventListener('input',updateRate);
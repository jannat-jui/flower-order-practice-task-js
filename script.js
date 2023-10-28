const snowWhitePriceField = document.getElementById('snow-white-price');
const snowWhitePriceFieldValueString = snowWhitePriceField.innerText;
const snowWhitePriceFieldValue = parseFloat(snowWhitePriceFieldValueString);

const snowredPriceField = document.getElementById('snow-red-price');
const snowredPriceFieldValueString = snowredPriceField.innerText;
const snowredPriceFieldValue = parseFloat(snowredPriceFieldValueString);

const snowPinkField = document.getElementById('snow-pink-price');
const snowPinkFieldString = snowPinkField.innerText;
const snowPinkFieldValue = parseFloat(snowPinkFieldString);

const totalField = document.getElementById('total-amount');
const totalFieldValueString = totalField.innerText;
const totalFieldValue = parseFloat(totalFieldValueString);


const grandFiled = document.getElementById('grand-total');
const grandFiledValueString = grandFiled.innerText;
const grandFiledValue = parseFloat(grandFiledValueString);





document.getElementById('snow-white-addCart').addEventListener('click', function(){
    const showItemname = document.createElement('p');
    const snowWhiteText = document.getElementById('snow-white').innerText;
    showItemname.innerText= snowWhiteText;
    showItemname.classList.add('text-center');
    showItemname.classList.add('mt-4');
    showItemname.classList.add('text-xl');
    showItemname.classList.add('font-semibold');


    const outputTheTitle = document.getElementById('add-title');
    outputTheTitle.appendChild(showItemname);

    const totalPriceValue = totalFieldValue + snowWhitePriceFieldValue;
    totalField.innerText = totalPriceValue;

    grandFiled.innerText = totalPriceValue;
 
    
})


document.getElementById('snow-red-btn').addEventListener('click', function(){
    const showItemname = document.createElement('p');
    const snowWhiteText = document.getElementById('snow-red').innerText;
    showItemname.innerText= snowWhiteText;
    showItemname.classList.add('text-center');
    showItemname.classList.add('mt-4');
    showItemname.classList.add('text-xl');
    showItemname.classList.add('font-semibold');


    const outputTheTitle = document.getElementById('add-title');
    outputTheTitle.appendChild(showItemname);

    const totalPriceValue = totalFieldValue + parseFloat(snowWhitePriceField.innerText) + snowredPriceFieldValue;
    totalField.innerText = totalPriceValue;

    grandFiled.innerText = totalPriceValue;
 
    
})


document.getElementById('snow-pink-btn').addEventListener('click', function(){
    const showItemname = document.createElement('p');
    const snowWhiteText = document.getElementById('snow-pink-value').innerText;
    showItemname.innerText= snowWhiteText;
    showItemname.classList.add('text-center');
    showItemname.classList.add('mt-4');
    showItemname.classList.add('text-xl');
    showItemname.classList.add('font-semibold');


    const outputTheTitle = document.getElementById('add-title');
    outputTheTitle.appendChild(showItemname);

    const totalPriceValue = totalFieldValue + parseFloat(snowWhitePriceField.innerText) + snowredPriceFieldValue + parseFloat(snowPinkField.innerText);
    totalField.innerText = totalPriceValue;

    grandFiled.innerText = totalPriceValue;
 
    
})
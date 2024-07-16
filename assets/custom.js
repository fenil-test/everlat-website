let product__description = document.querySelector('.product__description');
let product__description1 = document.querySelector('.product__description-item1');
let product__description2 = document.querySelector('.product__description-item2');


product__description1.addEventListener('click',()=>{
    product__description.style.height = 'auto'
    product__description2.style.display = 'block';    
    product__description1.style.display = 'none';    
});

product__description2.addEventListener('click',()=>{
    product__description.style.height = '145px'
    product__description2.style.display = 'none';    
    product__description1.style.display = 'block';    
});
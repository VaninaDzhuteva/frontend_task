// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(){
    scrollFunction();
}
//Get the id of the button
const scrollBtn = document.getElementById('scrollBtn');
//Deteck button appearance
const scrollFunction = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollBtn.style.display = 'block';
    } else{
        scrollBtn.style.display = 'none';
    }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

scrollBtn.addEventListener('click', function(){
    topFunction();
});

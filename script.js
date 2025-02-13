hiddenSections = document.querySelectorAll('.hidden');
buttons = document.querySelectorAll('.project-buttons');

hiddenSections.forEach(div=>{
    div.style.display = "none";
});

// default: project acorn is selected and highlighted to communicate that it is selected
document.getElementById('acorn').style.display = "block";
document.getElementById('default').classList.toggle('selected');

buttons.forEach(button=>{
    button.addEventListener('click', function(){
        buttonSection = this.getAttribute('data-section');
        // console.log("section", buttonSection)
        divSection = document.getElementById(buttonSection)

        // hide all other info sections and remove selection indicators
        hiddenSections.forEach(div=>{
            div.style.display = "none";
        });
        
        buttons.forEach(button=>{
            button.classList.remove('selected');
        });
        
        // show selection indicator and enable display of information for selected project
        document.getElementById(buttonSection).style.display = "block";
        button.classList.toggle('selected');
    } );
});


var slideIdx = 1;
showSlide(slideIdx);

function switchSlide(x){
    showSlide(slideIdx += x)
}

function showSlide(x){
    var i;
    var slides = document.getElementsByClassName("slides");
    var totalSlides = slides.length;

    if (x > totalSlides) {
        slideIdx = 1
    }
    if (x < 1){
        slideIdx = totalSlides
    }
    for(i = 0; i < totalSlides; i++){
        // slides[i].style.display = "none";
        slides[i].classList.remove('active');
    }
    // slides[slideIdx-1].style.display = "block"
    slides[slideIdx-1].classList.add('active');
}
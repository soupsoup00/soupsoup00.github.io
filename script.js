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
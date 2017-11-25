function myFunction(){
    // Declare variables 
    var input, filter, ul, li, a, i; 
    input = document.getElementById('myInput');
    filter = input.nodeValue.toUpperCase();
    ul = document.getElementById('myUL');
    li = ul.getElementsByTagName('li');
}

// Loop through all list items, and hide those who don't match the search query

for (var i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1){
        li[i].style.display = "";
    }
    else {
        li[i].style.display = "none"; 
    }
}

/************************************* 
* Test CheckBoxes/Radio Buttons Script
* 
**************************************/

// Loop through each form and handle submit event

for (var i=0; i<document.forms.length;i++){
    var form = document.forms[i];
    form.addEventListener('submit', function(e){
        e.preventDefault();
        var results = ''; 
        
        // Loop through all checkboxes to if checked
        
        var checkboxes = form.querySelectorAll("input[type='checkbox]"); 
        for (var k = 0; k < checkboxes.length; k++) {
            results += checkboxes [k].id + '=' + checkboxes[k].checked + '\n'; 
                 }
        
        // Loop through all radio buttons to display value 
        var radiobuttons = form.querySelectorAll("input[type='radio']:checked"); 
        for (var m = 0; m < radiobuttons.length; m++){
            results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n'; 
        }
        // Alert Results
        alert (results); 
    });
}

// Hover function

$('.MyDiv').on('mouseenter mouseleave mouseup', function(e) {
    $(this).toggleClass('Highlight');
     $(this).css('cursor','pointer');
       if(e.type == 'mouseup'){

       }

});

// Loop through each form and handle submit event

for (var i=0; i<document.forms.length; i++){
    var form = document.forms[i];
    form.addEventListener('submit', function(e){
     e.preventDefault();
     var results = '';    
    })
}

const button = document.querySelector( "#shareBtn" );
const tooltip = document.querySelector( ".social-media-links" );

button.addEventListener( "click", function(){
    tooltip.removeAttribute( "hidden" );
});

document.addEventListener('click', function(event) {
    if( !button.contains(event.target) && !tooltip.contains(event.target) ){
        tooltip.setAttribute( "hidden", true );
    }
});
const button = document.querySelector( "#btn1" );
const tooltip = document.querySelector( ".social-media-links" );
const shareLinksDiv = document.querySelector( ".mobile-share-links" );
const authorDiv = document.querySelector( ".author" );
const articleDetails = document.querySelector( ".article-details" );

button.addEventListener( "click", function(){
    const isMobile = ( window.screen.width <= 820 );

    if( isMobile ){
        shareLinksDiv.style.display = "block";
        authorDiv.style.display = "none";
        articleDetails.classList.toggle( "share-links-visible" );
    } else {
        tooltip.removeAttribute( "hidden" );
        articleDetails.classList.toggle( "share-links-visible" );
    }
});

document.addEventListener('click', function(event) {
    if( !button.contains(event.target) && !tooltip.contains(event.target) ){
        tooltip.setAttribute( "hidden", true );
    }
});
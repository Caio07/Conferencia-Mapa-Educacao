var toogleMenu = document.querySelectorAll('.toggle-menu'),
    wrapper    = document.querySelector('.wrapper');

// criando evento de click para abrir o menu
for (var i = 0; i < toogleMenu.length; i++){
    toogleMenu[i].addEventListener('click', menuAction);
}

// função auxiliar que abre e fecha o menu
function menuAction() {
    if(wrapper.classList.contains('show-menu')){
        wrapper.classList.remove('show-menu');
    }
    else {
        wrapper.classList.add('show-menu');
    }
}

$(document).ready(function(){
	$('.navbar-toggle').click(function(){
		$(this).toggleClass('open');
	});
});


function popupOpenClose(popup) {
    
    /* Add div inside popup for layout if one doesn't exist */
    if ($(".wrapper-popup").length == 0){
        $(popup).wrapInner("<div class='wrapper-popup'></div>");
    }
    
    /* Open popup */
    $(popup).show();

    /* Close popup if user clicks on background */
    $(popup).click(function(e) {
        if ( e.target == this ) {
            if ($(popup).is(':visible')) {
                $(popup).hide();
            }
        }
    });

    /* Close popup and remove errors if user clicks on cancel or close buttons */
    $(popup).find("button[name=close]").on("click", function() {
        if ($(".formElementError").is(':visible')) {
            $(".formElementError").remove();
        }
        $(popup).hide();
    });
}

$(document).ready(function() {
    $("[data-js=open]").on("click", function() {
        popupOpenClose($(this).next(".popup"));
    });
});

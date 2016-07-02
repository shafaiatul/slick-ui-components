(function() {
    var modalTrigger = document.getElementById('modal-trigger');
    var modal = document.getElementById('modal');
    var modalClose = document.getElementById('close-modal');

    //Detect the click #modal-trigger
    modalTrigger.addEventListener('click', function(event) {
        //Open the modal - add the 'is-visible' class
        event.preventDefault();
        modal.setAttribute('class', 'is-visible');
    });
    //Detect the click #close-modal
    modalClose.addEventListener('click', function(event){
        //Remove the class 'is-visible' to close the Modal
        modal.removeAttribute('class', 'is-visible');
    });

    //CLose the Modal window on releasing the ESC key
    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 27){ //if the keycode is ESC keycode
            //Remove the class 'is-visible' to close the Modal
            modal.removeAttribute('class', 'is-visible');
        }
    });

})();

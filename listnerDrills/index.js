function imageSelector(){
    $('.thumbnail').on('click keypress', function(event){
        const image = $(event.currentTarget).find('img');
        $('.hero img').attr('src', image.attr('src')).attr('alt', image.attr('alt'));
        console.log('clicked2');
    });
}
$(imageSelector);
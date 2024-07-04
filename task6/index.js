document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body'); 
    let displayedImage = null;
    let path;

    document.querySelectorAll('.cover img').forEach(image => {
        image.addEventListener('click', function() {
            const value = this.id; 
           
             if(value == "Istanbul"){
                path = './Place/' + value + '.jpeg';
             }
             else{
                path = './Place/' + value + '.jpg';
             }

            if (displayedImage) {
                displayedImage.src = path;
            } else {
                div = document.createElement('div');
                div.classList.add('container');
                displayedImage = document.createElement('img');
                displayedImage.classList.add('image');
                displayedImage.src = path;
                div.appendChild(displayedImage);

                deleteImage = document.createElement('img');
                deleteImage.classList.add('delete');
                deleteImage.src=('dustbin.png');
                deleteImage.style.width = '50px';
                deleteImage.style.height = '50px';
                deleteImage.addEventListener('click', function(){
                    body.removeChild(div);
                    displayedImage = null;
                });
                div.appendChild(deleteImage);

                body.appendChild(div);
            }
        });
    });


});

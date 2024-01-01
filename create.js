$(document).ready(function(){
    const main = $('#main');

    const list = {
        'Wasabi Search Engine': 'https://wasabi-shop.netlify.app'
    };
    const colors = ['#0000b1','#0cb100','#9900b1','#b10000'];

    let bubble;
    let bubbletext;
    let color;
    for(const key of Object.keys(list)){
        bubble = $('<div class="bubble rounded-circle text-center position-relative">');
        bubbletext = $('<div class="bubble-text fw-medium">');

        bubbletext.text(key);
        bubble.append(bubbletext);

        color = colors[Math.floor(Math.random()*colors.length)];
        bubble.css({'opacity': '0%', 'background-color': color});
        bubble.click(function(){
            var win = window.open(list[key], '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        });
        main.append(bubble);
        bubble.animate({opacity: 1}, 1000);
    }
});
const carouselSlide = document.querySelector('.carousel--slider');
const carouselImages = document.querySelectorAll('.carousel--container img');

function animated_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    let text = textNode.data;



    setInterval(() => {
        text = text[text.length - 1] + text.substring(0 , text.length - 1);
        textNode.data = text;
    },300);
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const linkNodes = $$('.list--link');

linkNodes.forEach((link , index) => {

    link.onclick = function(e) {
        e.preventDefault();
    }
});

const ListItems = $$('.list--item');
ListItems.forEach((item , index) => {
    item.onclick = function(e) {
        var prevNode = $('.list--item.active');
        if(prevNode) {
            prevNode.classList.remove('active');
        }


        this.classList.add('active');
    }

});





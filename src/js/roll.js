document.addEventListener('DOMContentLoaded', function() {
    var proximos = document.querySelectorAll('.proximo');
    var anteriores = document.querySelectorAll('.anterior');

    proximos.forEach(function(proximo) {
        proximo.addEventListener('click', function() {
            var container = this.parentNode;
            var proximoItem = container.getElementsByClassName('item')[0];
            var proximoItemWidth = proximoItem.offsetWidth;

            gsap.to(container, {scrollLeft: container.scrollLeft + proximoItemWidth, duration: 0.5, ease: "power2.out"});
        });
    });

    anteriores.forEach(function(anterior) {
        anterior.addEventListener('click', function() {
            var container = this.parentNode;
            var proximoItem = container.getElementsByClassName('item')[0];
            var proximoItemWidth = proximoItem.offsetWidth;

            gsap.to(container, {scrollLeft: container.scrollLeft - proximoItemWidth, duration: 0.5, ease: "power2.out"});
        });
    });
});

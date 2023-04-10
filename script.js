var over = document.querySelector("#overlay")
var scroll = document.querySelector("#scroll")
over.addEventListener("mousemove", function (dets) {
    scroll.style.left = (dets.x) + 'px'
    scroll.style.top = (dets.y) + 'px'
    scroll.style.opacity = 1

})
over.addEventListener("mouseleave", function (dets) {
    scroll.style.left = (dets.clientX) + 'px'
    scroll.style.top = (dets.clientY) + 'px'
    scroll.style.opacity = 0
})
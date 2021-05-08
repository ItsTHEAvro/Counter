let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener("click", function(item) {
        const classes = item.currentTarget.classList;
        if (classes.contains('decrease')) {
            count--;

        } else if (classes.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green"
        } else if (count < 0) {
            value.style.color = "#cf1020"
        } else {
            value.style.color = "#000000"
        }
        value.textContent = count;
    })
});
lastFocused = '';

function giveFocus(id) {
    label = document.getElementById('label-' + id);
    label.style.animation = '0.25s fadeUp';
    window.setTimeout(function() {
        label.style.height = '17.5px';
        document.getElementById(id).focus();
    }, 240)
    lastFocused = id;
}

function removeFocus() {
    if (document.getElementById(lastFocused).value.length < 1) {
        otherLabel = document.getElementById('label-' + lastFocused);
        otherLabel.style.animation = '0.25s fadeDown';
        window.setTimeout(function() {
            otherLabel.style.height = '41px';
        }, 240)
    }
}

function collapseManager(icon) {
    icon = document.getElementById(icon);
    icon.innerText = (icon.innerText == 'keyboard_arrow_down') ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
}

hideText = false;

function getQuotation() {
    hideText = true;
    document.getElementById('quote-text').style.display = 'none';
    document.getElementById('quote-form').style.display = 'flex';
    document.getElementById('quote-img').style.minHeight = '565px';
}

responsive = function() {
    if (window.innerWidth > 825) {
        document.getElementById('quote-text').style.display = 'block';
    } else {
        if (hideText) {
            document.getElementById('quote-text').style.display = 'none';
        }
    }
}

window.addEventListener("resize", function() {
    responsive();
})

function openMenu() {
    modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function closeMenu() {
    document.getElementById('menu').innerText = 'menu';
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
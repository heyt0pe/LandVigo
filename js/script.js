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
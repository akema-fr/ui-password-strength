function estimatePassword() {
    var password = document.querySelector('#input-password').value || '';
    var password_strength = {score: 0};

    if (password.length > 0) {
        password_strength = zxcvbn(password);
    }

    return password_strength.score;
}

function updateLabel(score) {
    var labels = document.querySelectorAll('#password-strength-labels > option');
    strength = Array.prototype.map.call(labels, function (option) {
        return {
            label: option.label,
            tone: option.className
        };
    });

    var feedback = document.getElementById('password-strength');

    console.log(strength, strength[score]);
    feedback.value = strength[score].label;
    feedback.className = strength[score].tone;
}
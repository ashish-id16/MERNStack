document.addEventListener('DOMContentLoaded', function() {

    const box = document.querySelector('.box-model-example');

    const mt = document.getElementById('margin-top');
    const mr = document.getElementById('margin-right');
    const mb = document.getElementById('margin-bottom');
    const ml = document.getElementById('margin-left');

    const mtValue = document.getElementById('mt-value');
    const mrValue = document.getElementById('mr-value');
    const mbValue = document.getElementById('mb-value');
    const mlValue = document.getElementById('ml-value');

    function updateMargin() {
        box.style.marginTop = mt.value + "px";
        box.style.marginRight = mr.value + "px";
        box.style.marginBottom = mb.value + "px";
        box.style.marginLeft = ml.value + "px";

        mtValue.textContent = mt.value + "px";
        mrValue.textContent = mr.value + "px";
        mbValue.textContent = mb.value + "px";
        mlValue.textContent = ml.value + "px";
    }

    mt.addEventListener('input', updateMargin);
    mr.addEventListener('input', updateMargin);
    mb.addEventListener('input', updateMargin);
    ml.addEventListener('input', updateMargin);


    const borderSlider = document.getElementById('border');
    const borderValue = document.getElementById('border-value');

    borderSlider.addEventListener('input', function () {
        const value = this.value + 'px';
        box.style.borderWidth = value;
        borderValue.textContent = value;
    });

    const paddingSlider = document.getElementById('padding');
    const paddingValue = document.getElementById('padding-value');

    paddingSlider.addEventListener('input', function () {
        const value = this.value + 'px';
        box.style.padding = value;
        paddingValue.textContent = value;
    });

});

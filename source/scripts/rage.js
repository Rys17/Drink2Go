const rangeSliderInit = () => {
  const range = document.querySelector('.rangescale');
  const inputMin = document.getElementById('min-price');
  const inputMax = document.getElementById('max-price');

  if (!range || !inputMin || !inputMax) {

    return;
  }
  const inputs = [inputMin, inputMax];

  noUiSlider.create(range, {
    start: [0, 900],
    connect: true,
    range: {
      'min': 0,
      'max': 1000
    },
    step: 1,
  });

  range.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = parseInt(values[handle], 10);
  });

  inputMin.addEventListener('change', function () {
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () {
    range.noUiSlider.set([null, this.value]);
  });

};

export {
  rangeSliderInit
};

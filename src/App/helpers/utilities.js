export const getResolutionFileImg = file => {
  const promise = new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e) {
      const image = new Image();

      image.src = e.target.result;

      image.onload = function () {
        resolve({ width: this.width, height: this.height });
      };
    };
  });
  return promise;
};

// get text width
export const getTextWidth = (text, font) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  context.font = font || getComputedStyle(document.body).font;

  return context.measureText(text).width;
};

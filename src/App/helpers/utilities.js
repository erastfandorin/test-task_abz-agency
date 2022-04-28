const getResolutionFileImg = file => {
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

export default getResolutionFileImg;

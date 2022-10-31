(() => {
  ("use strict");

  const get = (element) => document.querySelector(element);
  class ScrollVideo {
    constructor() {
      this.container = document.documentElement;
      this.canvas = get(".canvas");
      this.ctx = this.canvas.getContext("2d");
      this.width = 1292;
      this.height = 969;
      this.imagePath = "./assets/ezgif-frame-";
      this.imageExtenstion = ".jpg";
      this.imageCount = 145;
      this.initialNumber = 0;
      this.image = new Image();
      this.images = [];

      this.setImageArray();
      this.setImageToCanvas();
      this.scrollEvent();
    }

    // 1번 문제
    setImageArray() {
      for (let i = 1; i <= this.imageCount; i++) {
        let fileName = "";
        this.image = new Image();
        if (i < 10) fileName += "00";
        else if (i < 100) fileName += "0";
        fileName += i + this.imageExtenstion;
        this.image.src = this.imagePath + fileName;
        this.images.push(this.image);
      }
    }

    // 2번 문제
    setImageToCanvas() {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.image.src = this.imagePath + "001" + this.imageExtenstion;
      this.image.onload = () =>
        this.ctx.drawImage(this.image, 0, 0, this.width, this.height);
    }

    updateCanvas(index) {
      if (!this.images[index]) {
        this.image.src = this.images[this.imageCount - 1].currentSrc;
      } else {
        this.image.src = this.images[index].currentSrc;
      }
      this.ctx.drawImage(this.image, 0, 0, this.width, this.height);
    }

    // 3번 문제
    scrollEvent() {
      window.addEventListener("scroll", () => {
        const scrollTop = this.container.scrollTop;
        const endScroll = this.container.scrollHeight - window.innerHeight;
        const scrollPosition = scrollTop / endScroll;
        // 해당 변수를 수정
        const imageIndex = Math.min(
          this.imageCount - 1,
          Math.ceil(scrollPosition * this.imageCount)
        );

        requestAnimationFrame(() => this.updateCanvas(imageIndex + 1));
      });
    }
  }

  new ScrollVideo();
})();

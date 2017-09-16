class Modal {
  /**
    * Create a new Modal instance
    *
    * @param {string} selector
    */

  constructor(selector) {
    this.self = document.querySelector(`[data-modal="${selector}"]`);
    this.content = document.querySelector(`[data-modal-inner="${selector}"]`);
    this.triggers = document.querySelectorAll(`[data-modal-trigger="${selector}"]`);
    this.isOpen = false;
    this.openTimer = 250;
    this.openDelayTimer = null;

    this.init();
  }

  /**
    * Initialize the modal
    */

  init() {
    // eslint-disable-next-line
    for (const trigger of this.triggers) {
      trigger.addEventListener('click', (e) => {
        if (this.isOpen) {
          e.preventDefault();
          this.close();
        } else {
          e.preventDefault();
          this.open();
        }
      });
    }
  }

  /**
    * Open the modal
    */

  open() {
    // Only open the modal if delay timer has expired
    if (this.openDelayTimer === null) {
      this.isOpening = true;
      this.self.style.display = 'block';

      this.openDelayTimer = setTimeout(() => {
        clearTimeout(this.openDelayTimer);
        this.openDelayTimer = null;
        this.isOpening = false;
        this.isOpen = true;
      }, this.openTimer);
    }
  }

  /**
    * Close the modal
    */

  close() {
    // Close modal if delay timer is expired
    if (this.openDelayTimer === null) {
      this.isClosing = true;
      this.content.style.animation = 'slide-out 0.5s forwards';
      this.self.style.opacity = 0;

      this.openDelayTimer = setTimeout(() => {
        clearTimeout(this.openDelayTimer);
        this.openDelayTimer = null;
        this.isClosing = false;
        this.isOpen = false;
        this.self.style.display = 'none';
        this.self.style.opacity = 1;
        this.content.style.animation = '';
      }, this.openTimer);
    }
  }
}

export default Modal;

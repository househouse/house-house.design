<template>
  <transition name="modal-slide">
    <article
      class="u-stack-modal u-flexbox u-flex-column c-modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <header class="c-modal__header u-flexbox u-align-center u-justify-between" id="modalTitle">
        <h2 class="c-heading c--3 u-padding-top-xsmall">
          <slot name="header">Default Headline</slot>
        </h2>
        <button class="c-modal__close u-flexbox u-text-size-large" type="button" @click="close">×</button>
      </header>
      <section class="c-modal__body c-text-content" id="modalDescription" v-scroll-lock="open">
        <slot name="body">Default body text</slot>
      </section>
      <footer class="c-modal__footer">
        <slot name="footer">Default footer text</slot>
      </footer>
    </article>
  </transition>
</template>


<script>
export default {
  name: 'SideModal',
  data() {
    return {
      open: false,
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>


<style lang="scss" scoped>
.modal-slide-enter,
.modal-slide-leave-to {
  opacity: 0.5;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transform: translate(100%, 0);
}

.modal-slide-enter-to,
.modal-slide-leave {
  opacity: 1;
  transform: translate(0, 0);
}

.modal-slide-enter-active {
  transition: 150ms cubic-bezier(0.4, 0, 1, 1);
}
.modal-slide-leave-active {
  transition: 250ms cubic-bezier(0, 0, 0.2, 1);
}
</style>

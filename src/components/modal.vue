<template lang="pug">
transition(name="modal-slide")

    article.u-stack-modal.u-flexbox.u-flex-column.c-modal(role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription")

        header.c-modal__header.u-flexbox.u-align-center.u-justify-between(id="modalTitle")
            h2.c-heading.c--3.u-padding-top-xsmall
                slot(name="header") Default Headline
            button.c-modal__close.u-flexbox.u-text-size-large(type="button" @click="close") ×

        section.c-modal__body.c-text-content(id="modalDescription" v-scroll-lock="open")
            slot(name="body") Default body text

        footer.c-modal__footer
            slot(name="footer") Default footer text
</template>


<script>
export default {
  name: 'modal',
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

.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: 250ms cubic-bezier(1, 0, 0, 1);
}
</style>

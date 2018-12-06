<template lang="pug">
  transition(name="modal-slide")
      article.modal.u-stack-modal.u-context(role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription")

          header.modal-header(id="modalTitle")
              slot(name="header")
                | This is the default tile!
              button.btn-close(type="button" @click="close")
                | ×

          section.modal-body.c-text-content(id="modalDescription")
              slot(name="body")
                | I'm the default body!

          footer.modal-footer
              slot(name="footer")
                | I'm the default footer!
</template>

<script>
  export default {
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 33vw;
    overflow-x: auto;
    background: var(--white);
    box-shadow: 0 0 5em rgba(0, 0, 0, 0.15);
  }

  .modal-header,
  .modal-footer,
  .modal-body {
    padding: 2vw 3vw;
  }

  .modal-header,
  .modal-footer {
    display: flex;
    align-items: center;
  }

  .modal-header {
    justify-content: space-between;
    background-color: var(--grey-light);
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 0;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
  }

  .modal-slide-enter,
  .modal-slide-leave-to {
    opacity: 0.5;
    transform: translate(100%, 0);
  }

  .modal-slide-enter-to,
  .modal-slide-leave {
    opacity: 1;
    transform: translate(0, 0);
  }

  .modal-slide-enter-active,
  .modal-slide-leave-active {
    transition: 200ms ease-in-out;
  }
</style>

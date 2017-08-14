<script src="./c-modal.js"></script>
<style src="./c-modal.scss" lang="scss" scoped></style>

<template>
    <aside data-modal={{ modal_name }} class="c-modal u-stack-modal">
    <!--
        article(data-modal-inner='#{modal_name}').c-modal__content.u-stack-basic.u-padding-left-md.u-padding-left-lg--small-up.u-padding-right-md.u-padding-right--small-up.u-padding-top-lg.u-padding-bottom-lg

            header.u-flexbox.u-align-middle.u-width-full.u-margin-bottom-lg
                h2.u-flex.u-bold #{modal_title}
                button(data-modal-trigger='#{modal_name}').c-button.u-flex-shrink.js-modal-hide.u-circle.u-border-accent.u-color-accent ×

            div.c-text-content
                if block
                    block
                else
                    p No content provided yet :(

        div.c-modal__shade.u-stack-under.u-color-swap.js-modal-hide(role='presentation', tab-index='-1')
    -->
    </aside>
</template>

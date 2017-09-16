<script src="./c-card.js"></script>
<style src="./c-card.scss" lang="scss" scoped></style>

<template lang="html">
    <article class="c-card c-faux-link u-context u-clip u-corners u-gradient u-align-center u-stack-basic">

        <a class="c-faux-link__overlay" href="#{card_link}" aria-hidden="true">
            Find out more about {{ card_title }}
        </a>

        <div class="u-context u-stack-basic u-margin-bottom-lg u-padding-left-md u-padding-right-md u-color-light">

            <h2 class="u-margin-bottom-md u-bold">
                <span class="u-padding-bottom-xs u-squiggle"></span>
            </h2>

            <p class="u-uppercase u-text-size-small u-half-transparent u-tracked-loose">
                {{ card_subtitle }}
            </p>

        </div>

        <!-- <div class="c-card__image u-position u-top-0 u-bottom-0 u-left-0 u-right-0 u-stack-under u-bg-cover u-bg-center u-half-transparent" data-style="background-image:url('{{ card_image }}');" role="presentation"></div> -->

    </article>
</template>

<script src="./v-not-found.js"></script>
<style src="./v-not-found.scss" lang="scss" scoped></style>

<template lang="html">
    <article lass="v-not-found" style="padding-top:20vh; padding-bottom:25vh">

        <div class="c-text-content u-measure-wide u-margin-horizontal-fill u-padding-left-md u-padding-right-md">

            <h1 class="u-context u-glitch u-align-center" data-glitch="Uh oh!" style="font-size:5rem">
                {{ title }}
            </h1>

            <p class="u-align-center">
                {{ msg }}
            </p>

        </div>

    </article>
</template>

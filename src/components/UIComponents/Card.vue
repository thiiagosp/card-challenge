<template>
    <div v-bind:class="cardGridClass" class="card" v-lazy:background-image="backgroundImage">
        <div class="card-body">
            <div class="card-overlay">
                <p class="card__subtitle">{{ card.subtitle }}</p>
                <p class="card__title">{{ card.title }}</p>
                <p class="card__text">{{ card.text }}</p>
                <button class="card__button">Explore More</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.img {
    width: 200px;
    height: 200px;
}
.card {
    border-radius: 8px;
    min-height: 360px;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    font-family: "Open Sans";
    text-align: center;
    position: relative;
    .card-body {
        height: 100%;
        width: 100%;
        word-wrap: break-word;
        background-color: rgba(20, 20, 20, 0.5);
        .card-overlay {
            width: 100%;
            left:50%;
            top:50%;
            -webkit-transform: translate(-50%, -20%);
            -moz-transform: translate(-50%, -20%);
            transform: translate(-50%, -20%);
            position: absolute;
        }
    }
    &:first-child & {
        .card-overlay {
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }
        &__text {
            opacity: 1;
        }
    }

    &__title,
    &__subtitle {
        display: block;
        color: #fff;
        text-align: center;
        font-family: "Open Sans";
        text-transform: uppercase;
        margin: 0;
        width: 100%;
        -webkit-animation: slide-top-return 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
        animation: slide-top-return 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    &__title {
        font-size: 32px;
        line-height: 34px;
        font-weight: bold;
        margin: 10px 0;
        text-transform: uppercase;
    }
    &__subtitle {
        font-weight: 400;
        font-size: 19px;
        line-height: 21px;
    }
    &__text {
        color: #fff;
        text-align: center;
        margin: 0 auto;
        max-width: 250px;
        opacity: 0;
        -webkit-animation: fade-in-bottom-return 1s cubic-bezier(0.39, 0.575, 0.565, 1)
            both;
        animation: fade-in-bottom-return 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    &__button {
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 3px;
        color: #fff;
        margin: 0 auto;
        padding: 10px 15px;
        font-weight: bold;
        opacity: 0;
        -webkit-animation: fade-in-return 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: fade-in-return 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    &:hover:not(:first-child) & {
        &__subtitle,
        &__title {
            -webkit-animation: slide-top .7s ease-in-out both;
            animation: slide-top .7s ease-in-out both;
        }
        &__text {
            -webkit-animation: fade-in-bottom 1s cubic-bezier(0.39, 0.575, 0.565, 1)
                both;
            animation: fade-in-bottom 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
        &__button {
            -webkit-animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
            animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
    }
}

@media (min-width: 768px) {
    .card {
        &:first-child {
            height: 760px;
        }
        .card-body {
            // padding-top: 120px;
        }
        &__text {
            max-width: 450px;
        }
    }
}
</style>
<script>
export default {
    props: {
        card: Object
    },
    computed: {
        cardGridClass() {
            return `grid__item${this.card.class}`;
        },
        backgroundImage() {
            return `/static/images/${this.card.imageUrl}`;
        }
    }
};
</script>

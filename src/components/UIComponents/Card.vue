<template>
    <div v-bind:class="cardGridClass" class="card" v-bind:style="{ 'backgroundImage': 'url(assets/images/'+ card.imageUrl +')' }">
        <div class="card-body">
          <img src="'./assets/images/Lagoa.jpg'" alt="" class="img">
            <p class="card__subtitle">{{ card.subtitle }}</p>
            <p class="card__title">{{ card.title }}</p>
            <p class="card__text">{{ card.text }}</p>
            <button class="card__button">Explore More</button>
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
	font-family: 'Open Sans';
	text-align: center;
	.card-body {
		height: 100%;
		width: 100%;
		padding-top: 120px;
		background-color: rgba(20, 20, 20, .5);
	}
		&:first-child & {
			&__text {
				opacity: 1;
			}
		}

		&__title, &__subtitle {
			display: block;
			color: #fff;
			text-align: center;
			font-family: 'Open Sans';
			text-transform: uppercase;
			margin: 0;
			width: 100%;
			-webkit-animation: slide-top-return 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
				animation: slide-top-return 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
		}
		&__title {
			font-size: 32px;
			font-weight: bold;
			margin: 10px 0;
			text-transform: uppercase;
		}
		&__subtitle {
			font-weight: 400;
			font-size: 19px;
		}
		&__text {
			color: #fff;
			text-align: center;
			margin: 0 auto;
			max-width: 450px;
			opacity: 0;
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
		}
		&:hover & {
			&__subtitle, &__title {
				-webkit-animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
				animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
			}
			&__text {
				-webkit-animation: fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
				animation: fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
			}
			&__button {
				-webkit-animation: fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
				animation: fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
			}
		}
	}

@media (max-width: 768px) {
	.card {
		width: 300px;
		height: 100px;
		margin: 70px auto;
		padding: 100px 0;
		.card-body {
			padding-top: 100px;
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
      cardGridClass: function () {
        return `grid__item${this.card.class}`;
      },
      cardImageUrl: function () {
        return `url()`
      }
    }
};
</script>

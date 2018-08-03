<template>
    <div class="grid">
        <Card v-for="card in cards" :key="card.title" :card="card"></Card>
    </div>
</template>
<style lang="scss">
.grid {
    margin: 80px 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    &__item {
        min-height: 300px;
        &__full {
            height: 520px;
            grid-column: 1 / span 4;
        }
        &__first-half {
            grid-column: 1 / span 2;
        }
        &__second-half {
            grid-column: 3 / span 2;
        }
    }
}

@media (max-width: 768px) {
  .grid {
        margin: 50px auto;
        &__item {
            grid-column: 2 / span 2;
            height: 300px;
            width: 300px;
            &:first-child & {
                .card__text {
                    opacity: 1;
                }
            }
            &__full, &__first-half, &__second-half {
                height: 300px;
                width: 300px;
                grid-column: 2 / span 2;
            }
        }
    }
}
</style>
<script>
import Card from '@/components/UIComponents/Card.vue';
export default {
    components: {
        Card
    },
    data() {
        return {
            cards: []
        };
    },
    created() {
        this.cards = this.getCards();
    },
    methods: {
        getCards: function () {
            return [
                {
                    title: 'Valtech_',
                    subtitle: 'Front-end',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '__full',
                    imageUrl: 'Lagoa.jpg'
                },
                {
                    title: 'Venice',
                    subtitle: 'Italy',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '__first-half',
                    imageUrl: 'Venice.jpg'
                },
                {
                    title: 'Berlin',
                    subtitle: 'Germany',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '',
                    imageUrl: 'Berlin.jpg'
                },
                {
                    title: 'Barcelona',
                    subtitle: 'Spain',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '',
                    imageUrl: 'Barcelona.jpg'
                },
                {
                    title: 'Paris',
                    subtitle: 'France',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '',
                    imageUrl: 'Paris.jpg'
                },
                {
                    title: 'Amsterdam',
                    subtitle: 'Netherlands',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '',
                    imageUrl: 'Amsterdam.jpg'
                },
                {
                    title: 'London',
                    subtitle: 'United Kindom',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '__second-half',
                    imageUrl: 'London.jpg'
                }
            ];
        }
    }
};
</script>

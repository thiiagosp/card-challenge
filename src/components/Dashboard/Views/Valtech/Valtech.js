import Card from '@/components/UIComponents/Card/Card.vue';
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
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '__full',
                    imageUrl: 'Lagoa.jpg'
                },
                {
                    title: 'Venice',
                    subtitle: 'Italy',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '__first-half',
                    imageUrl: 'Venice.jpg'
                },
                {
                    title: 'Berlin',
                    subtitle: 'Germany',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '',
                    imageUrl: 'Berlin.jpg'
                },
                {
                    title: 'Barcelona',
                    subtitle: 'Spain',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '',
                    imageUrl: 'Barcelona.jpg'
                },
                {
                    title: 'Paris',
                    subtitle: 'France',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '',
                    imageUrl: 'Paris.jpg'
                },
                {
                    title: 'Amsterdam',
                    subtitle: 'Netherlands',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '',
                    imageUrl: 'Amsterdam.jpg'
                },
                {
                    title: 'London',
                    subtitle: 'United Kindom',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu iaculis libero.',
                    class: '__second-half',
                    imageUrl: 'London.jpg'
                }
            ];
        }
    }
};

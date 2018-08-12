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

<template>

    <div>
       <div class="slider">              <!-- on se sert d'un 'props' ici -->
            <img v-for="image in images" :src="image" class="slider-item">
        </div>
    </div>

</template>


<script>
    export default {
        // Déclarer les props ici
        // Un props est 'read-only' dans ce composant
        props: ['images'],
        data() {
            return {
                sliderImages: ''
            }
        },
        // méthode appelée automatiquement au chargement du composant
        mounted() {
            this.sliderImages = this.$props.images; // on y accède par this.$props
        }
    }
</script>
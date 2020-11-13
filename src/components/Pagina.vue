<template>
    <section id="content">
        <h2 class="subheader">P&aacute;gina de prueba</h2>
        <h2>{{ id_desde_url }}</h2>
    </section>
</template>

<script>
export default {
    name: 'Pagina',
    mounted() { // Se ejecuta al cargar el componente
        this.id_desde_url = this.$route.params.id;
    },
    data() {
        return {
            id_desde_url: null
        };
    }
}
</script>
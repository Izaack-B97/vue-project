<template>
    <section id="content">
        <h2 class="subheader">P&aacute;gina de prueba</h2>
        <h2>{{ id_desde_url }}</h2>
        <button @click="actualizarNombre()">Actualizar Nombre</button>
        <button @click="redirigirRuta()">Redirigir</button>
        <h4>{{ nombre }}</h4>
    </section>
</template>

<script>
export default {
    name: 'Pagina',

    // Start Hooks

    created() {
        console.log('Componente creado');
    },

    mounted() { // Se ejecuta al montar el componentge
        this.id_desde_url = this.$route.params.id;
        console.log('Componente montado');
    },

    updated() {
        console.log('Componente actualizado');
    },

    destroyed() {
        console.log('Componente eliminado');
    },

    // End hooks

    data() {
        return {
            id_desde_url: null,
            nombre: 'Isaac Bustamante'
        };
    },

    // Aqui van mis metodos personalizados
    methods: {
        actualizarNombre() {
            this.nombre = 'Ararat Ibarrola';
            console.log(this.nombre);
        },

        redirigirRuta() {
            // Redireccion
            this.$router.push('/blog');
            // this.$router.push({ name: 'pagina', params:{ id: 'Redirigir' } });
        }
    } 
}
</script>
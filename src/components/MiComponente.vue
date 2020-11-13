<template>
    <section id="content">
        <h2>{{ titulo }}</h2>
        <hr>
        <h1>Este es mi componente</h1>
        <h2>{{ subtitulo }}</h2>
    </section>
</template>

<script>
export default {
    name: 'MiComponente',
    data() {
        return {
            titulo: 'Mi Componente',
            subtitulo: 'Soy el subtitulo de mi compoenete'
        }
    }
}
</script>
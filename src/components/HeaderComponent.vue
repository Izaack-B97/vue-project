<template>
    <div>
        <header id="header">
            <div class="center">
                <!-- LOGO -->
                <div id="logo">
                    <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Curso</strong>Vue
                    </span>
                </div>
                
                <!-- MENU -->
                <nav id="menu">
                    <ul>
                        <li>
                            <router-link to='/home'>Inicio</router-link>
                        </li>
                        <li>
                            <router-link to='/blog'>Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/formulario">Formulario</router-link>
                        </li>
                        <li>
                            <router-link to="/pagina">Pagina 1</router-link>
                        </li>
                        <li>
                            <router-link to="/mi-componente">Pagina 2</router-link>
                        </li>                            
                    </ul>
                </nav>

                <!--LIMPIAR FLOTADOS-->
                <div class="clearfix"></div>
            </div>
        </header>

    </div>
</template>

<script>
export default {
    name: 'HeaderComponent', 
    data() {
        return {

        }
    }
}
</script>
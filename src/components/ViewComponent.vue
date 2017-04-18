<template>
    <div class="section">
        <div class="container">
            <div class="row">
                <app-sidebar></app-sidebar>
                <app-content></app-content>
            </div>
        </div>
    </div>
</template>

<script>
    import ContentComponent from "./ContentComponent.vue";
    import SidebarComponent from "./SidebarComponent.vue";
    export default {
        data () {
            return {}
        },
        components: {
            'app-content': ContentComponent,
            'app-sidebar': SidebarComponent
        }
    }
</script>

<style scoped>
</style>

<template>
    <div class="section">
        <slot></slot>
    </div>
</template>

<script>
    import ContentComponent from "./ContentComponent.vue";
    import SidebarComponent from "./SidebarComponent.vue";
    export default {
        data () {
            return {
            }
        },
        components: {
            'app-content': ContentComponent,
            'app-sidebar': SidebarComponent
        }
    }
</script>

<style scoped>
</style>

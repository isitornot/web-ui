<template>
    <div class="section">
        <ol class="breadcrumb">
            <li v-for="(crumb, index) in breadcrumbs"><a href="#" :class="{active: isLastBreadcrumb}">{{ crumb.text }}</a></li>
        </ol>
        <slot></slot>
    </div>
</template>

<script>
    import ContentComponent from "./ContentComponent.vue";
    import SidebarComponent from "./SidebarComponent.vue";
    export default {
        data () {
            return {
                breadcrumbs: [
                    {text: "Root"},
                    {text: "Parent"},
                    {text: "Child"},
                    {text: "Grandchild"}
                ]
            }
        },
        methods: {
            isLastBreadcrumb(idx) {
                return idx == (this.breadcrumbs.length - 1);
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

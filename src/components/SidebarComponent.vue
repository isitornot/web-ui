<template>
    <div class="section">
        <div class="panel panel-default">
        <!-- Mostly placeholders for now. These should all be separate components -->
            <div class="panel-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis.
            </div>
        </div>

        <ul class="list-inline list-bracketed">
            <li class="list-inline-item" v-for="tag in tags">
                <a href="#">{{ tag }}</a></li>
        </ul>

        <div class="panel panel-default">
            <div class="panel-heading">Discover Other Communities</div>
            <div class="panel-body"><app-communities summary :max="15"></app-communities>
                <router-link to="/communities" class="btn btn-default btn-xs" role="button">See All</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import CommunityComponent from "./CommunityComponent.vue";
    export default {
        data () {
            return {
                tags: ["tag1", "tag2", "tag3", "tag4", "tag5"]
            }
        },
        components: {
            "app-communities": CommunityComponent
        }
    }
</script>

<style scoped>
    .list-bracketed {
        font-size: small;
        padding-left: 1em;
    }
    .list-bracketed li:before {
        content: "[";
    }
    .list-bracketed li:after {
        content: "]";
    }
</style>

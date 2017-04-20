<template>
    <div class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><span>{{ title }}</span></a>
            </div>
            <div class="collapse navbar-collapse" id="navbar-ex-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li :class="{active: currentPath === '/'}">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li :class="{active: currentPath === '/about'}">
                         <router-link to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: "IsItOrNot"
            }
        },
        computed: {
            currentPath () {
                return this.$route.path;
            }
        },
    }
</script>

<style scoped>
</style>

<template>
    <nav class="navbar navbar-app navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">IsIt <span class="community-title">{{ title }}</span> OrNot</a>
            </div>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="nav navbar-nav navbar-right">
                    <li :class="{active: currentPath === '/'}">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li :class="{active: currentPath === '/about'}">
                        <router-link to="/about">About</router-link>
                    </li>
                </ul>
                <form class="navbar-form navbar-right search-form" role="search">
                    <input type="text" class="form-control" placeholder="Search" />
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                title: "       ",
                searchIsActive: false
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
nav.navbar-app {
    background: #fff;
    border-color: #ccc;
    box-shadow: 0 0 2px 0 #ccc;
}
nav.navbar-app li.divider {
    background: #ccc;
}
.community-title {
    text-decoration: underline;
    white-space: pre;
}
.navbar-brand {
    font-variant: small-caps;
}
</style>

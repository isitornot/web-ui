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
                <a class="navbar-brand" href="#">IsIt <span class="community-title">{{ communityTitle }}</span> OrNot</a>
            </div>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="nav navbar-nav navbar-right">
                    <li v-for="entry in navEntries">
                        <router-link :to="entry.path">{{ entry.name }}</router-link>
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
            return {};
        },
        computed: {
            communityTitle () {
                if ('slug' in this.$route.params) {
                    return this.$route.params.slug;
                }
                return "     ";
            },
            navEntries () {
                /* This seems to be using a member not listed in the API
                   I'm not sure if it includes dynamic route, so this might
                   need to be changed. Works for the time being.
                 */
                let entries = [];
                for (const route of this.$router.options.routes) {
                    if (route.meta && 'navName' in route.meta) {
                        entries.push({
                            path: route.path,
                            name: route.meta['navName']
                        });
                    }
                }
                return entries;
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

<template>
    <div v-if="slug" class="panel panel-default">
        <div class="row panel-heading">
            <div class="col-md-1"><img :src="community.icon" class="img-responsive img-thumbnail" id="icon"/></div>
            <div class="col-md-8"><h3 class="panel-title">{{ community.name }}</h3></div>
        </div>
        <div class="row panel-body">
            <div class="col-md-7 col-md-offset-1" v-html="description"></div>
        </div>
    </div>
    <div v-else class="jumbotron">
        <h1>Welcome to IsItOrNot</h1>
        <h3>A community created information site.</h3>
        <p>You can find some communities over on the left or create your own to get started.</p>
        <p><router-link class="btn btn-primary btn-lg" role="button" to="/communities/create">Create a Community</router-link></p>
    </div>
</template>

<script>
    import marked from "marked";

    export default {
        data () {
            return {
                community: {
                    name: "",
                    description: "",
                    icon: ""
                }
            }
        },
        props: {
            slug: {
                type: String,
                required: false
            }
        },
        computed: {
            description() {
                return marked(this.community.description);
            }
        },
        mounted () {
            if (this.slug) {
                this.$root.CommunityService.get(this.slug)
                    .then(response => {
                        if (response.status == 200) {
                            this.community = response.data;
                        }
                    })
                    .catch(err => {alert(err)});
            }
        }
    }
</script>

<style scoped>
</style>

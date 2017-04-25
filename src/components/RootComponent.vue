<template>
    <div v-if="slug">
        <p>This is a community {{ slug }}</p>
    </div>
    <div v-else class="jumbotron">
        <h1>Welcome to IsItOrNot</h1>
        <h3>A community created information site.</h3>
        <p>You can find some communities over on the left or create your own to get started.</p>
        <p><router-link class="btn btn-primary btn-lg" role="button" to="/communities/create">Create a Community</router-link></p>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        props: {
            slug: {
                type: String,
                required: false
            }
        }
    }
</script>

<style scoped>
</style>

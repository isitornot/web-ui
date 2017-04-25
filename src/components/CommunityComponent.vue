<template>
    <!-- Render a short summary in a list. This prevents generation and parsing of both the short and full versions -->
    <ul v-if="summary" class="list-inline">
        <li class="list-inline-item"
            v-for="community in communities.slice(0, this.max == 0 ? communities.length : this.max)">
            <router-link :to="{name: 'community', params: {slug: community.slug}}">
                <abbr :title="community.name">{{ community.slug }}</abbr>
            </router-link>
        </li>
    </ul>

    <!-- Full view -->
    <div v-else class="section">
        <div class="row" id="create">
            <router-link to="/communities/create" class="btn btn-default" role="button">Create a Community</router-link>
        </div>
        <div class="row">
            <table class="table table-hover">
                <tbody>
                <tr v-for="community in communities.slice(0, this.max == 0 ? communities.length : this.max)">
                    <router-link :to="{name: 'community', params: {slug: community.slug}}">
                    <td><img class="community-icon" :class="{'default-icon': community.icon.length == 0}" :src="community.icon"></td><td>{{ community.name }}</td>
                </router-link>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                communities: [],
            }
        },
        props: {
            max: {
                type: Number,
                required: false,
                validator(value) {
                    return value >= 0;
                }
            },
            summary: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        created() {
            this.fetchCommunities()
        },
        methods: {
            fetchCommunities() {
                return this.$root.CommunityService.getAll(this.max)
                    .then(response => {this.communities = response.data.communities})
                    .catch(err => {alert(err.message);})
            }
        }
    }
</script>

<style scoped>
    .community-icon {
        height: 32px;
        margin: 0px 8px;
    }
    .default-icon {
        content: url('../images/default-community-icon.png');
    }
    #create {
        margin-bottom: 2em;
    }
</style>

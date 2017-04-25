<template>
    <form class="form-horizontal" method="post" @submit.prevent="submit">
        <fieldset>
            <legend>Create a New Community</legend>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-1">
                    <button class="btn btn-default" :disabled="notReady" type="submit">Create</button>
                </div>
            </div>
            <div class="form-group" :class="slugState">
                <label class="control-label col-md-2" for="slug">Name</label>
                <div class="col-md-9">
                    <input id="slug" name="slug" placeholder="Enter a short community name to be used in URLs"
                           class="form-control" required type="text" @input="debounceSlug" v-model.trim="slugValue"/>
                    <span class="help-block">This is the unique, URL friendly name for your community. It must start
                    with a letter and may contain letters, numbers, dash (-), and period (.). This will appear in
                    URLs (http://mycommunity.isitornot.com) and is abbreviated community lists.</span>
                </div>
            </div>
            <div class="form-group" :class="nameState">
                <label class="control-label col-md-2" for="name">Display Name</label>
                <div class="col-md-9">
                    <input id="name" name="name" placeholder="Enter an optional display name"
                           class="form-control" type="text" @input="debounceName" v-model.trim="nameValue"/>
                    <span class="help-block">The display name may contain any character and will be display in
                    in most places instead of the slug. You'll still want to keep it short.</span>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-md-2" for="icon">Icon</label>
                <div class="col-md-6">
                    <input id="icon" name="icon" class="form-control" type="file" ref="icon" @change="previewFile()"/>
                    <span class="help-block">An icon that represents your community. This is best when it's approximately
                    square and 64 or 32 pixels wide.</span>
                </div>
                <div class="col-md-1">
                    <img ref="preview" :class="{hidden: !previewLoaded}" class="image-responsive img-thumbnail preview"/>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-md-2 markdown-editor" for="description">Description</label>
                <div class="col-md-9">
                    <span class="help-block">A longer description of the community. Can be plain text or Markdown.
                        Include any information you'd like potential members or contributors to know.</span>
                    <input id="description" name="description" ref="description"
                           placeholder="Enter an optional long description" class="form-control" type="textarea"/>
                </div>
            </div>
        </fieldset>
    </form>
</template>

<script>
    import SimpleMDE from "simplemde/dist/simplemde.min";
    import _ from "lodash";
    export default {
        data () {
            return {
                slugValue: "",
                nameValue: "",
                previewLoaded: false,
                descriptionEditor: null,
                debounceSlug: _.debounce(() => this.validateSlug(), 500),
                debounceName: _.debounce(() => this.validateName(), 500),
                slugError: 0,  // <0 is success, 0 is pending/no data, >0 is error
                nameError: 0   // <0 is success, 0 is pending/no data, >0 is warning
            }
        },
        mounted () {
            this.descriptionEditor = new SimpleMDE({
                element: this.$refs.description
            })
        },
        methods: {
            validateSlug () {
                if (this.slugValue.length < 1) {
                    this.slugError = 0;
                } else if (this.slugValue.match(/^[a-zA-Z][a-zA-Z0-9.-]*$/) == null) {
                    this.slugError = 1;
                } else {
                    this.$root.CommunityService.get(this.slugValue)
                        .then(response => {this.slugError = response.status == 404 ? -1 : 1})
                        .catch(err => {this.slugError = 1});
                }
            },
            validateName () {
                if (this.nameValue.length < 1) {
                    this.nameError = 0;
                } else if (this.nameValue.match(/^.{1,32}$/) == null) {
                    this.nameError = 1;
                } else {
                    this.nameError = -1;
                }
            },
            previewFile() {
                let file = this.$refs.icon.files[0];
                let reader = new FileReader();

                reader.addEventListener("load", () => {
                    this.$refs.preview.src = reader.result;
                    this.previewLoaded = true;
                } , false);
                if (file) {
                    reader.readAsDataURL(file);
                }
            },
            submit() {
                this.$root.CommunityService.create({
                    slug: this.slugValue,
                    name: this.nameValue,
                    description: this.descriptionEditor.value(),
                    icon: this.$refs.preview.src,
                    tags: []
                }).then(response => this.$router.push({name: 'community', params: {slug: this.slugValue}}))
                  .catch(err => {alert(err.message);});
            }
        },
        computed: {
            slugState () {
                return {
                    "has-success": this.slugError < 0,
                    "has-error": this.slugError > 0
                };
            },
            nameState () {
                return {
                    "has-success": this.nameError < 0,
                    "has-warning": this.nameError > 0
                };
            },
            notReady () {
                return this.slugError >= 0;
            }
        }
    }
</script>

<style scoped>
    img.preview {
        width: 64px;
    }
    img.hidden {
        display: none;
    }
    .markdown-editor {
        height: 10em;
    }
    .help-block {
        font-size: x-small;
    }
</style>

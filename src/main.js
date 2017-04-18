import Vue from "vue";
import ContentComponent from "./components/ContentComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import ViewComponent from "./components/ViewComponent.vue";

let vm = new Vue({
    el: "#app",
    components: {
        'app-content': ContentComponent,
        'app-footer': FooterComponent,
        'app-navbar': NavbarComponent,
        'app-sidebar': SidebarComponent,
        'app-view': ViewComponent
    }
});

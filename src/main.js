import Vue from "vue";
import VueRouter from "vue-router";

// code split components
const ContentComponent = resolve => {
    require.ensure(["./components/ContentComponent.vue"], () => {
        resolve(require("./components/ContentComponent.vue"));
    }, "group-layout");
};
const FooterComponent = resolve => {
    require.ensure(["./components/FooterComponent.vue"], () => {
        resolve(require("./components/FooterComponent.vue"));
    }, "group-layout");
};
const NavbarComponent = resolve => {
    require.ensure(["./components/NavbarComponent.vue"], () => {
        resolve(require("./components/NavbarComponent.vue"));
    }, "group-layout");
};
const SidebarComponent = resolve => {
    require.ensure(["./components/SidebarComponent.vue"], () => {
        resolve(require("./components/SidebarComponent.vue"));
    }, "group-layout");
};
const ViewComponent = resolve => {
    require.ensure(["./components/ViewComponent.vue"], () => {
        resolve(require("./components/ViewComponent.vue"));
    }, "group-layout");
};

import CommunityService from "./services/CommunityService";
import routes from "./routes";

Vue.use(VueRouter);
const router = new VueRouter({routes});
let busA = new Vue();
let vm = new Vue({
    el: "#app",
    router: router,
    components: {
        'app-content': ContentComponent,
        'app-footer': FooterComponent,
        'app-navbar': NavbarComponent,
        'app-sidebar': SidebarComponent,
        'app-view': ViewComponent
    },
    data: {
        CommunityService: new CommunityService(process.env.API_BASE),
        communityTitle: "     ",
        buses: [busA]
    }
});

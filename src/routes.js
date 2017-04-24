// Code split components
const AboutComponent = resolve => {
    require.ensure(["./components/AboutComponent.vue"], () => {
        resolve(require("./components/AboutComponent.vue"));
    }, "group-content");
};
const RootComponent = resolve => {
    require.ensure(["./components/RootComponent.vue"], () => {
        resolve(require("./components/RootComponent.vue"));
    }, "group-content");
};

const routes = [
    {path: "/",             component: RootComponent,       meta: {navName: "Home"}},
    {path: "/about",        component: AboutComponent,      meta: {navName: "About"}}
];

export default routes;

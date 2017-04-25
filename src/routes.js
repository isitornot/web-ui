// Code split components
const AboutComponent = resolve => {
    require.ensure(["./components/AboutComponent.vue"], () => {
        resolve(require("./components/AboutComponent.vue"));
    }, "group-content");
};
const CreateCommunityComponent = resolve => {
    require.ensure(["./components/CreateCommunityComponent.vue"], () => {
        resolve(require("./components/CreateCommunityComponent.vue"));
    }, "group-content");
};
const CommunityComponent = resolve => {
    require.ensure(["./components/CommunityComponent.vue"], () => {
        resolve(require("./components/CommunityComponent.vue"));
    }, "group-content");
};
const RootComponent = resolve => {
    require.ensure(["./components/RootComponent.vue"], () => {
        resolve(require("./components/RootComponent.vue"));
    }, "group-content");
};

const routes = [
    {path: "/",             component: RootComponent,       meta: {navName: "Home"}},
    {path: "/about",        component: AboutComponent,      meta: {navName: "About"}},
    {path: "/communities",  component: CommunityComponent,  meta: {navName: "Communities"}},
    {path: "/communities/create",  component: CreateCommunityComponent},
    {path: "/c/:slug",      component: RootComponent,       name: "community", props: true}
];

export default routes;

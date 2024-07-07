// vue-shim.d.ts
declare module '*.vue' {
    import { ComponentOptions } from 'vue';
    const component: ComponentOptions;
    export default component;
}

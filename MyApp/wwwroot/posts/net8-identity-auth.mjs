import Templates, { Index } from "./components/Templates.mjs"

const IdentityAuthTemplates = {
    components: { Templates },
    template:`<Templates :templates="[Index['blazor'], Index['blazor-vue'], Index['razor'], Index['mvc'], Index['razor-bootstrap'], Index['mvc-bootstrap']]" hide="demo" />`,
    setup() {
        return { Index }
    }
}

export default {
    install(app) {
    },
    components: {
        IdentityAuthTemplates,
    },
    setup() {
        return { }
    }
}

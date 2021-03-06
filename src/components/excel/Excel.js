import {$} from '@core/dom'

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
    }
    getRoot() {
        const $root = $.create('div', 'excel')
        this.components = this.components.map((Component) => {
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            $el.html(component.toHTML())
            $root.appendElem($el)
            return component
        });
        return $root
    }
    render() {
        this.$el.appendElem(this.getRoot())
        this.components.forEach((Component) => {
            Component.init()
        })
    }
}

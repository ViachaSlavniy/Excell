export class DomListener {
    constructor($root, listeners = []) {
        // if (!$root) {
        //     throw new Error('No argument root in DomListener');
        // }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListeners() {
        console.log(this.$root);
        // this.listeners.forEach()
    }

    removeDomListeners() {

    }
}

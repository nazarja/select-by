class SelectBy {
    constructor() {
        Object.freeze(this);
    }
    q(query) {
        return document.querySelector(query);
    }
    qAll(query) {
        return Array.from(document.querySelectorAll(query));
    }
    id(query) {
        return document.getElementById(query);
    }
    class(query) {
        return Array.from(document.getElementsByClassName(query));
    }
    tag(query) {
        return Array.from(document.getElementsByTagName(query));
    }
    name(query) {
        return Array.from(document.getElementsByName(query));
    }
    att(attribute, query) {
        return this.qAll(query ? `${query}[${attribute}]` : `[${attribute}]`);
    }
    all() {
        const elements = this.qAll('body *');
        return elements.filter((element) => element.nodeName !== 'SCRIPT');
    }
    empty() {
        const elements = this.all();
        return elements.filter((element) => element.children.length === 0 && element.textContent === '');
    }
    first(query) {
        return this.q(query);
    }
    last(query) {
        const elements = this.qAll(query);
        return elements.length > 0 ? elements[elements.length - 1] : null;
    }
    parent(query) {
        const element = this.q(query);
        return element ? element.parentElement : null;
    }
    firstChild(query) {
        const element = this.q(query);
        return element ? element.firstElementChild : null;
    }
    lastChild(query) {
        const element = this.q(query);
        return element ? element.lastElementChild : null;
    }
    children(query) {
        const element = this.q(query);
        return element ? Array.from(element.children) : [];
    }
    next(query) {
        const element = this.q(query);
        return element ? element.nextElementSibling : null;
    }
    prev(query) {
        const element = this.q(query);
        return element ? element.previousElementSibling : null;
    }
    index(query, index) {
        const element = this.q(query);
        if (!element || typeof index !== 'number' || (index + 1) > element.children.length)
            return null;
        return element.children[index];
    }
    range(query, start, end) {
        const elements = this.qAll(query);
        if (typeof start !== 'number' || start < 0 || start >= elements.length)
            return [];
        return typeof end === 'number' ? elements.slice(start, end) : elements.slice(start);
    }
    text(text, query) {
        const elements = this.qAll(query ? query : '*');
        return elements.filter(element => element.textContent === String(text));
    }
}
const by = new SelectBy();
export default by;

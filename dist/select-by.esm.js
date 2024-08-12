var SelectBy = /** @class */ (function () {
    function SelectBy() {
        Object.freeze(this);
    }
    SelectBy.prototype.q = function (query) {
        return document.querySelector(query);
    };
    SelectBy.prototype.qAll = function (query) {
        return Array.from(document.querySelectorAll(query));
    };
    SelectBy.prototype.id = function (query) {
        return document.getElementById(query);
    };
    SelectBy.prototype.class = function (query) {
        return Array.from(document.getElementsByClassName(query));
    };
    SelectBy.prototype.tag = function (query) {
        return Array.from(document.getElementsByTagName(query));
    };
    SelectBy.prototype.name = function (query) {
        return Array.from(document.getElementsByName(query));
    };
    SelectBy.prototype.att = function (attribute, query) {
        return this.qAll(query ? "".concat(query, "[").concat(attribute, "]") : "[".concat(attribute, "]"));
    };
    SelectBy.prototype.all = function () {
        var elements = this.qAll('body *');
        return elements.filter(function (element) { return element.nodeName !== 'SCRIPT'; });
    };
    SelectBy.prototype.empty = function () {
        var elements = this.all();
        return elements.filter(function (element) { return element.children.length === 0 && element.textContent === ''; });
    };
    SelectBy.prototype.first = function (query) {
        return this.q(query);
    };
    SelectBy.prototype.last = function (query) {
        var elements = this.qAll(query);
        return elements.length > 0 ? elements[elements.length - 1] : null;
    };
    SelectBy.prototype.parent = function (query) {
        var element = this.q(query);
        return element ? element.parentElement : null;
    };
    SelectBy.prototype.firstChild = function (query) {
        var element = this.q(query);
        return element ? element.firstElementChild : null;
    };
    SelectBy.prototype.lastChild = function (query) {
        var element = this.q(query);
        return element ? element.lastElementChild : null;
    };
    SelectBy.prototype.children = function (query) {
        var element = this.q(query);
        return element ? Array.from(element.children) : [];
    };
    SelectBy.prototype.next = function (query) {
        var element = this.q(query);
        return element ? element.nextElementSibling : null;
    };
    SelectBy.prototype.prev = function (query) {
        var element = this.q(query);
        return element ? element.previousElementSibling : null;
    };
    SelectBy.prototype.index = function (query, index) {
        var element = this.q(query);
        if (!element || typeof index !== 'number' || (index + 1) > element.children.length)
            return null;
        return element.children[index];
    };
    SelectBy.prototype.range = function (query, start, end) {
        var elements = this.qAll(query);
        if (typeof start !== 'number' || start < 0 || start >= elements.length)
            return [];
        return typeof end === 'number' ? elements.slice(start, end) : elements.slice(start);
    };
    SelectBy.prototype.text = function (text, query) {
        var elements = this.qAll(query ? query : '*');
        return elements.filter(function (element) { return element.textContent === String(text); });
    };
    return SelectBy;
}());
var by = new SelectBy();

export { by as default };

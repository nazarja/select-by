
interface ISelectBy {
    q(query: string): HTMLElement | null;
    qAll(query: string): Array<HTMLElement>;
    id(query: string): HTMLElement | null;
    class(query: string): Array<Element>;
    tag(query: string): Array<Element>;
    name(query: string): Array<Element>;
    att(attribute: string, query?: string): Array<HTMLElement>;
    all(): Array<HTMLElement>;
    empty(): Array<HTMLElement>;
    first(query: string): HTMLElement | null;
    last(query: string): HTMLElement | null;
    parent(query: string): HTMLElement | null;
    firstChild(query: string): Element | null;
    lastChild(query: string): Element | null;
    children(query: string): Array<Element>;
    next(query: string): Element | null;
    prev(query: string): Element | null;
    index(query: string, index: number): Element | null;
    range(query: string, start: number, end?: number): Array<HTMLElement>;
    text(text: string | number, query?: string): Array<HTMLElement>;
}

class SelectBy implements ISelectBy {
    constructor() {
        Object.freeze(this);
    }

    q(query: string): HTMLElement | null {
        return document.querySelector(query);
    }

    qAll(query: string): Array<HTMLElement> {
        return Array.from(document.querySelectorAll(query));
    }

    id(query: string): HTMLElement | null {
        return document.getElementById(query);
    }

    class(query: string): Array<Element> {
        return Array.from(document.getElementsByClassName(query));
    }

    tag(query: string): Array<Element> {
        return Array.from(document.getElementsByTagName(query));
    }

    name(query: string): Array<Element> {
        return Array.from(document.getElementsByName(query));
    }

    att(attribute: string, query?: string): Array<HTMLElement> {
        return this.qAll(query ? `${query}[${attribute}]` : `[${attribute}]`);
    }

    all(): Array<HTMLElement> {
        const elements: Array<HTMLElement> = this.qAll('body *');
        return elements.filter((element: HTMLElement) => element.nodeName !== 'SCRIPT');
    }

    empty(): Array<HTMLElement> {
        const elements: Array<HTMLElement> = this.all();
        return elements.filter((element: HTMLElement) => element.children.length === 0 && element.textContent === '');
    }

    first(query: string): HTMLElement | null {
        return this.q(query);
    }

    last(query: string): HTMLElement | null {
        const elements = this.qAll(query);
        return elements.length > 0 ? elements[elements.length - 1] : null;
    }

    parent(query: string): HTMLElement | null {
        const element: HTMLElement | null = this.q(query);
        return element ? element.parentElement : null;
    }

    firstChild(query: string): Element | null {
        const element: HTMLElement | null = this.q(query);
        return element ? element.firstElementChild : null;
    }

    lastChild(query: string): Element | null {
        const element: HTMLElement | null = this.q(query);
        return element ? element.lastElementChild : null;
    }

    children(query: string): Array<Element> {
        const element: HTMLElement | null = this.q(query);
        return element ? Array.from(element.children) : [];
    }

    next(query: string): Element | null {
        const element: HTMLElement | null = this.q(query);
        return element ? element.nextElementSibling : null;
    }

    prev(query: string): Element | null {
        const element: HTMLElement | null = this.q(query);
        return element ? element.previousElementSibling : null;
    }

    index(query: string, index: number): Element | null {
        const element: HTMLElement | null = this.q(query);
        if (!element || typeof index !== 'number' || (index + 1) > element.children.length) return null;
        return element.children[index]
    }

    range(query: string, start: number, end?: number): Array<HTMLElement> {
        const elements: Array<HTMLElement> = this.qAll(query);
        if (typeof start !== 'number' || start < 0 || start >= elements.length) return [];
        return typeof end === 'number' ? elements.slice(start, end) : elements.slice(start);
    }

    text(text: string | number, query?: string): Array<HTMLElement> {
        const elements = this.qAll(query ? query : '*');
        return elements.filter(element => element.textContent === String(text));
    }
}

const by: SelectBy = new SelectBy();
export default by; 
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
declare class SelectBy implements ISelectBy {
    constructor();
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
declare const by: SelectBy;
export default by;

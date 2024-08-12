# SelectBy

SelectBy aims to be a concise yet expressive DOM selector library that takes inspiration from jQuery's ability to shorthand DOM element selections. Where SelectBy differs is that each DOM selector makes use of methods which describe the selection taking place, making the intention clear and also taking the hassle out of writing out the lengthy full vanilla JavaScript selector.

## Landing Pages
npm:  
https://www.npmjs.com/package/select-by

jsdelvr:  
https://www.jsdelivr.com/package/gh/nazarja/select-by

## Installation
#### npm module / browser module

##### Node  
`npm install select-by`

- commonjs  
`const by = require('select-by')`  
- ecmascript modules  
`import by from 'select-by'`

##### Browser - place above your custom script files
jsdelvr  
```
<script src="https://cdn.jsdelivr.net/npm/select-by@1.0.0/dist/select-by.min.js"></script>
```

## Return Values
Arrays are returned for operations that return multiple values and so they can be easily used with many array protoype methods.

Only 4 return values are returned throughout all the methods available.

1. `null` : no result on single result selectors 
2. `a singular element` : results on singular result selectors
2. `an empty array` : no results on multiple result selectors
4. `an array of elements` : results on multiple result selectors

## Example Usage
`const score = by.id('score')` <-- returns an element with the id of 'score'

## Methods

### QuerySelector  
`q(query: string): HTMLElement | null;`  
```js
 by.q('#myId')
 by.q('.myClassname')
``` 
parameters: css style selector  
return value: an element or null 

### QuerySelectorAll  
`qAll(query: string): Array<HTMLElement>;`   
```js
 by.qAll('.item')
``` 
parameters: css style selector   
return value: an array of elements or an empty array 

### Select a single element by id  
`id(query: string): HTMLElement | null;`   
```js
 by.id('myId')
``` 
parameters: an element id  
return value: an element or null 

### Select elements by class name  
`class(query: string): Array<Element>;`  
```js
 by.class('myClassname')
``` 
parameters: an element class name   
return value: an array of elements or an empty array 

### Select elements by tag name  
`tag(query: string): Array<Element>;`   
```js
 by.tag('div')
``` 
parameters: an element tag name   
return value: an array of elements or an empty array 

### Select elements by their name attributes value  
`name(query: string): Array<Element>;`   
```js
 by.name('username')
``` 
parameters: an element name attribute value   
return value: an array of elements or an empty array 

### Select elements by attribute name, optionally accepts a parent element selector  
`att(attribute: string, query?: string): Array<HTMLElement>;`   
```js
 by.att('data-item')
 by.att('data-item="fruit"')
 by.att('href', '#contact')
``` 
parameters: html attribute selector [can include optional] attribute value, css style selector     
return value: an array of elements or an empty array 

### Select all elements within the body tag, except script tags  
`all(): Array<HTMLElement>;`   
```js
 by.all()
``` 
parameters: none   
return value: an array of elements or an empty array 

### Select all elements with no children and no text content  
`empty(): Array<HTMLElement>;`  
```js
 by.empty()
``` 
parameters: none   
return value: an array of elements or an empty array 

### Select the first element of its type found  
`first(query: string): HTMLElement | null;`  
```js
 by.first('.item')
``` 
parameters: css style selector   
return value: an element or null

### Select the last element of its type found  
`last(query: string): HTMLElement | null;`  
```js
 by.last('.item')
``` 
parameters: css style selector   
return value: an element or null

### Select the parent element of the given element  
`parent(query: string): HTMLElement | null;`  
```js
 by.parent('.item')
``` 
parameters: css style selector   
return value: an element or null 

### Select the first child of the given element  
`firstChild(query: string): Element | null;`  
```js
 by.firstChild('#container')
``` 
parameters: css style selector   
return value: an element or null 

### Select the last child of the given element  
`lastChild(query: string): Element | null;`  
```js
 by.lastChild('#container')
``` 
parameters: css style selector   
return value: an element or null 

### Select all children of the given element  
`children(query: string): Array<Element>;`  
```js
 by.children('#container')
``` 
parameters: css style selector   
return value: an array of elements or an empty array 

### Select the next sibling of the given element  
`next(query: string): Element | null;`  
```js
 by.next('#logo')
``` 
parameters: css style selector   
return value: an element or null 

### Select the previous sibling of the given element  
`prev(query: string): Element | null;`  
```js
 by.prev('#menu')
``` 
parameters: css style selector   
return value: an element or null 

### Select the child element of the given element by index  
`index(query: string, index: number): Element | null;`  
```js
 by.index('#container', 0)
``` 
parameters: css style selector, number     
return value: an element or null 

### Select all elements within a range of the given element, optionally accepts a range end parameter  
`range(query: string, start: number, end?: number): Array<HTMLElement>;`  
```js
 by.range('.item', 3)
 by.range('.item', 0, 2)
``` 
parameters: css style selector, number, [optional] number   
return value: an array of elements or an empty array  

### Select all elements containing the given text, optionally accepts a parent element  
`text(text: string | number, query?: string): Array<HTMLElement>;`  
```js
 by.text('Apple')
 by.text('Apple', 'li')
 by.text('Apple', '.item')
``` 
parameters: string [case sensitive] or number, [optional] css style selector    
return value: an array of elements or an empty array



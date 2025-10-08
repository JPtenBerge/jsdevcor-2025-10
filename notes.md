# Notes

## Geschiedenislesje JavaScript

- 1995/6
- Brendan Eich
  - begonnen bij Netscape
  - CEO Brave
- "we willen wat interactiviteit in de browser"
- 10 werkdagen
- W3C NOPE
- ECMAScript
  - tc39


## JavaScript engines/runtimes

- SpiderMonkey  Firefox
- V8   Chromium  Node.js Deno
- JavaScriptCore   Safari Bun $$$

setTimeout

## JavaScript vervangen??

Zijn meerdere initiatieven geweest

- Dart - Flutter
- VBScript - Internet Explorer
- WebAssembly?
  - Alle browser API-aanroepen lopen via JS
- TypeScript?
  - Trager zijn ivm type-safety? Of ze moeten alle types strippen en "gewoon de code runnen" (zie [types as comments](https://tc39.es/proposal-type-annotations/))

## Polyfills

Polyfill: als de browser het niet heeft, implementeer het dan met JS

```js
window.Temporal ??= {
	doeIets() {}
}
```

## Overloading

```js
// jQuery simuleert het:

$('div') // selecteer alle divs
$('<div>') // maak element
$(function() { }) // document ready
```

## Cypress vs Playwright

**Playwright**

- open source
- Microsoft
- TypeScript++
- batcht niet - interactie met pagina is mogelijk
- geen maffe paywalls
- native promises
- UI wordt steeds beter
- ondersteunde veel meer browsers vanaf begin

```ts
let locator = page.getByRole('heading', { name: 'Products' });
await expect(locator).toHaveText('Products');
```

**Cypress**

- Cypress inc
- open source largely
- paywall  `cy.goto('https://domein.nl');`
- Promises zijn geen native Promises - BlueBird Promises - niet awaitable
- architectuur
  - commando's batchen
- ++UI  tijdreizen   Playwright
- code lelijk  assertions   `cy.get('heading').should('have.text', 'bla');`
- TypeScript
- lange tijd enkel Chromium

## Classes

JavaScript's `#mijnVar` vs TypeScript's `private mijnVar`? Het hangt er vanaf of je dit wil ondersteunen:

```ts
(mijnService as any).mijnVar
```

TypeScript is enkel compile-time private.

### In the wild

- React: niet meer.
- Vue: niet meer.
- Svelte: nope.
- Angular: heeft ze! maar wel steeds minder:
  - route guard: vroeger een class, nu een functie
  - interceptor: vroeger een class, nu een functie
  - alle services/componenten/pipes: daar nog wel!

## Modules

- verschillende JS-bestanden samen laten werken
- `import` `export` voor expliciet gebruik van zaken
- aantal goede coding practices meteen toegepast
  - `use strict`
  - geisoleerde code

**Modules voordat we ES Modules hadden**

- ✨ namespace pattern ✨
- CommonJS - `require('./bestand.js')` - 2009
  - Node.js
  - browserify
- Asynchronous Module Definition
  - require.js  `define()`

### Wel of niet `.js` bij je import opnemen

In vanilla JS? Sure. In TypeScript? Hmm.
- 
- Voor TypeScript zelf (`tsc`) hoeft het niet
- Check vooral of alle frontendtools blijven werken:
  - prod buildtools: Vite turbopack webpack Grunt gulp Parcel
  - testtools: Jest Vitest Mocha

## Backend JS

- Node.js
  - 2009
  - gemaakt door Ryan Dahl
  - heel goed in C10k problem
  - I/O needs to be done differently - files database network
    - .NET Java  per request een nieuwe thread
    - `await`
    elke thread heeft eigen stack 1MB - 10.000.000 == 10.000GB RAM
- Deno
  - 2020
  - ook gemaakt door Ryan Dahl
  - v1 was niet compatible met npm
  - v2 is eindeiljk compatible
    - 2024 meende ik
  - geen node_modules
  - TypeScript out of the box ondersteund
  - security++
    ```sh
    node ./bla.js
    deno run --allow-read . --allow-net ./bla.ts
    ```
  - Verder wat kleinere dingetjes:
    ```sh
    deno test
    deno format
    deno lint
    ```
- Bun
  - TypeScript
  - node_modules
  - npm compatible
  - $$$
  - performance++

## Separation of concerns bij DOM-manipulatie?

Dit gaat officieel tegen separation of concerns in:

```html
<button onclick="doe();">...</button>
```

Maar [zie dit tegenargument](https://stackoverflow.com/questions/14346073/angularjs-is-ng-click-a-good-practice-why-is-there-no-ng-event-in-angularj):

>Angular is built around the belief that declarative code is better than imperative when it comes to building UIs and wiring software components together... By declaratively describing how the UI should change as your application state changes, you are freed from low level DOM manipulation tasks.


## Hoe JP up-to-date blijft

- Reddit: techsubreddits  /blazor /webdev /experienceddevs /dotnet
- YouTube: Fireship / Nick Chapsas / Theo t3.gg (let wel: lang niet altijd eens met zijn meningen)
- als ik Angular, Blazor, ... geef, krijg ik vanzelf mee dat versie 30 uit is => "what's new in ... 30" blogposts
  - plus, meestal zijn er vaste release cycles, je kan ze bijna in je agenda zetten

## Coole links

- [Jeff Atwood over oprichting StackOverflow en "having an arch-enemy" (Experts-Exchange)](https://blog.codinghorror.com/whos-your-arch-enemy/)
- [The politics of JavaScript](https://speakerdeck.com/anguscroll/the-politics-of-javascript) (let op: 2013)
- [`\d` in regexes is niet altijd `\[0-9\]`](https://stackoverflow.com/a/6479605/888093)
- [`Temporal`-proposal](https://github.com/tc39/proposal-temporal) ter vervanging van `Date`
- [Playwright](https://playwright.dev/docs/writing-tests), toffe end-to-end testing library
- [Named capture groups, whaaat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [10 things I regret about Node.js](https://www.youtube.com/watch?v=M3BM9TB-8yA)
- [Frontend framework benchmarks](https://github.com/krausest/js-framework-benchmark)

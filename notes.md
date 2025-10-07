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

## Coole links

- [Jeff Atwood over oprichting StackOverflow en "having an arch-enemy" (Experts-Exchange)](https://blog.codinghorror.com/whos-your-arch-enemy/)
- [The politics of JavaScript](https://speakerdeck.com/anguscroll/the-politics-of-javascript) (let op: 2013)
- [`\d` in regexes is niet altijd `\[0-9\]`](https://stackoverflow.com/a/6479605/888093)
- [`Temporal`-proposal](https://github.com/tc39/proposal-temporal) ter vervanging van `Date`
- [Playwright](https://playwright.dev/docs/writing-tests), toffe end-to-end testing library

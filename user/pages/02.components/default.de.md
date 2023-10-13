---
title: Komponenten
slug: components
language: de
sitemap:
  changefreq: monthly
  priority: 0.7
date: 13.10.2023
---

!!! Hier finden Sie eine Übersicht über alle verfügbaren Komponenten, die Sie einfach in Ihre Seiten einfügen können.

! Details zu den vollständigen Möglichkeiten von Spectre.css finden Sie in der [Offiziellen Spectre Dokumentation](https://picturepan2.github.io/spectre/elements.html)

Das [Quark Theme](https://github.com/getgrav/grav-theme-quark) ist das neue Standard-Theme für Grav, das mit [Spectre.css](https://picturepan2.github.io/spectre/) erstellt wurde, dem leichten, responsiven und modernen CSS-Framework. Spectre bietet grundlegende Styles für Typografie, Elemente und ein responsives Layout-System, das best practices und ein konsistentes Sprachdesign nutzt.

### Überschriften

# H1 Überschrift `40px`

## H2 Überschrift `32px`

### H3 Überschrift `28px`

#### H4 Überschrift `24px`

##### H5 Überschrift `20px`

###### H6 Überschrift `16px`

```html
# H1 Überschrift
# H1 Überschrift `40px`</small>`

<span class="h1">H1 Überschrift</span>
```

### Paragraphe

Lorem ipsum dolor sit amet, consectetur [adipiscing elit. Praesent risus leo, dictum in vehicula sit amet](#), feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.

Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.

### Markdown Semantische Text Elemente

**Bold** `**Bold**`

_Italic_ `_Italic_`

~~Deleted~~ `~~Deleted~~`

`Inline Code` `` `Inline Code` ``

> Blockquote `> Blockquote`

```js
// Code
const foo = 'bar';
function bar() {
    return foo;
}
console.log(bar());
```

```markdown
```js
// Code
const foo = 'bar';
function bar() {
    return foo;
}
console.log(bar());
\```
```

### HTML Semantische Text Elemente

<abbr>I18N</abbr> `<abbr>`

<cite>Blockquote</cite> `<cite>`

<kbd>Ctrl + S</kbd> `<kbd>`

Text<sup>Superscripted</sup> `<sup>`

Text<sub>Subscripted</sub> `<sub>`

<u>Unterstrichen</u> `<u>`

<mark>Markiert</mark> `<mark>`

<var>x = y + 2</var> `<var>`

### Blockquote

> The advance of technology is based on making it fit in so that you don't really even notice it,
> so it's part of everyday life.
>
> <cite>- Bill Gates</cite>

```markdown
> The advance of technology is based on making it fit in so that you don't really even notice it,
> so it's part of everyday life.
>
> <cite>- Bill Gates</cite>
```

### Ungeordnete Liste

- list item 1
- list item 2
  - list item 2.1
  - list item 2.2
  - list item 2.3
- list item 3

```markdown
- list item 1
- list item 2
    - list item 2.1
    - list item 2.2
    - list item 2.3
- list item 3
```

### Geordnete Liste

1. list item 1
1. list item 2
    1. list item 2.1
    1. list item 2.2
    1. list item 2.3
1. list item 3

```markdown
1. list item 1
1. list item 2
    1. list item 2.1
    1. list item 2.2
    1. list item 2.3
1. list item 3
```

### Tabellen

| Name                     |           Genre           |   Veröffentlichung |
|:-------------------------|:-------------------------:|-------------------:|
| The Shawshank Redemption |       Crime, Drama        |   14. Oktober 1994 |
| The Godfather            |       Crime, Drama        |      24. März 1972 |
| Schindler's List         | Biography, Drama, History |    4. Februar 1994 |
| No Genre                 |                           |        7. Mai 1990 |
| Se7en                    |   Crime, Drama, Mystery   | 22. September 1995 |

### Anmerkungen

Die Anmerkungssymbole sind eigentlich vom `markdown-notices` Plugin bereitgestellt, aber sie sind nützlich genug, um sie hier aufzunehmen:

! Diese ist eine Warnung

!! Dies ist eine Fehlermeldung

!!! Dies ist eine Standardbenachrichtigung

!!!! Dies ist eine Erfolgsmeldung

```markdown
! Diese ist eine Warnung

!! Dies ist eine Fehlermeldung

!!! Dies ist eine Standardbenachrichtigung

!!!! Dies ist eine Erfolgsmeldung
```

### Details

Details sind eine gute Möglichkeit, Inhalte zu verbergen, die nicht wichtig für den Hauptfluss des Dokuments sind. Sie sind auch eine gute Möglichkeit, dem Benutzer zusätzliche Informationen ohne Verwirrung der Seite bereitzustellen.

[details="Klicken Sie hier, um weitere Informationen anzuzeigen"]
Hier ist zusätzliche Informationen, die Sie durch Klicken auf die Schaltfläche aufdecken können.
[/details]

### Akkordeon

[ui-accordion independent=false open=1]
[ui-accordion-item title="Section 1"]
Bacon ipsum dolor amet beef burgdoggen shoulder, meatball prosciutto kevin brisket chicken turkey. Kevin rump pancetta short loin capicola brisket landjaeger fatback picanha pork belly ribeye. Strip steak chuck turducken kevin t-bone ribeye cupim capicola alcatra rump. Venison pork chop biltong cupim pig rump meatloaf sausage pork. Strip steak kevin tongue brisket ball tip, venison turducken flank frankfurter corned beef pancetta fatback drumstick ham. Drumstick pastrami leberkas meatball flank tongue turkey ground round pork belly doner frankfurter porchetta jowl.
[/ui-accordion-item]
[ui-accordion-item title="Section 2"]
Short loin swine shankle flank picanha andouille burgdoggen landjaeger hamburger drumstick. Beef ham tail, tri-tip flank ham hock meatball picanha corned beef t-bone shank turkey ball tip shoulder. Flank corned beef chicken, meatloaf venison ball tip ham hock tail salami jowl short ribs pork belly drumstick. Meatball chicken hamburger beef filet mignon doner pork picanha pork chop fatback rump ham tri-tip ball tip landjaeger. Sausage leberkas shoulder tongue short loin shankle. Prosciutto tri-tip frankfurter shoulder drumstick capicola. Pork loin shank strip steak pork belly tongue cow.
[/ui-accordion-item]
[ui-accordion-item title="Section 3"]
Bacon ipsum dolor amet beef burgdoggen shoulder, meatball prosciutto kevin brisket chicken turkey. Kevin rump pancetta short loin capicola brisket landjaeger fatback picanha pork belly ribeye. Strip steak chuck turducken kevin t-bone ribeye cupim capicola alcatra rump. Venison pork chop biltong cupim pig rump meatloaf sausage pork. Strip steak kevin tongue brisket ball tip, venison turducken flank frankfurter corned beef pancetta fatback drumstick ham. Drumstick pastrami leberkas meatball flank tongue turkey ground round pork belly doner frankfurter porchetta jowl.
[/ui-accordion-item]
[/ui-accordion]

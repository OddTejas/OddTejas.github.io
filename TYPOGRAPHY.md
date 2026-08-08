# OddHouse typography system

Typography values are stored in the `:root` block at the top of
`assets/css/style.css`. Use the existing variables instead of writing a new
`font-size` directly inside a selector.

The variable describes the role of the text, not the page on which it appears.
Text with the same purpose should use the same variable across the website.

## Default text

### `--text-body`

Use for regular paragraphs, explanations, and article text. It is the default
size applied to every `p` element.

```css
p {
    font-size: var(--text-body);
}
```

### `--text-section-lead`

Use for `h2` headings and prominent introductions to a section. It is the
default size applied to every `h2` element.

```css
h2 {
    font-size: var(--text-section-lead);
}
```

## Page hierarchy

### `--text-display`

Use for the largest text on a page: hero statements and main page titles. A
page should usually have only one display-sized block.

Current use: `.heroText` and `#headingText`.

### `--text-subtitle`

Use directly below a display title when the page needs a secondary title or
short description.

Current use: `#subtext` on the mathematics article.

### `--text-introduction`

Use for a longer introductory statement that should be more prominent than
body copy but less prominent than a heading.

### `--text-section-title`

Use when a section title needs slightly more emphasis than the default `h2`.
Do not use it for every heading; `--text-section-lead` remains the normal `h2`
size.

### `--text-section-label`

Use for short labels that introduce a content group, such as “About me” or
“Featured.”

### `--text-feature-title`

Use for the title of a major featured area, such as “The Desk.” This should be
rare so it remains visually meaningful.

## Interface text

### `--text-logo`

Use only for the OddHouse site logo or wordmark.

### `--text-link`

Use for prominent navigation links. Ordinary links inside paragraphs should
inherit the surrounding body size.

### `--text-footer`

Use for footer content and other compact site-level information.

### `--text-sm`

Use for captions, metadata, dates, and minor supporting information.

## Cards

### `--text-card-title`

Use for normal card headings.

### `--text-card-body`

Use for descriptions inside cards.

### `--text-card-link`

Use for a card's action link when it needs to be smaller than the description.

### `--text-maths-card-title`

Use only when a mathematics card needs its existing specialized title scale.
Prefer `--text-card-title` for new general-purpose cards.

### `--text-maths-heading`

Use for the existing mathematics “Wanderings” heading. Prefer
`--text-section-lead` for new ordinary mathematics headings.

## Choosing a size

Use this order when adding text:

1. Regular paragraph: `--text-body`
2. `h2` or normal section heading: `--text-section-lead`
3. Main page title or hero statement: `--text-display`
4. Navigation or site interface: use the matching interface variable
5. Card content: use the matching card variable
6. Specialized size: use one only when the normal hierarchy does not work

Do not choose a variable merely because its numerical size looks right. Choose
it because its role matches the content. If two pieces of text have the same
role, they should normally use the same variable.

## Example

```html
<section>
    <p class="sectionLabel">Featured</p>
    <h2>A mathematical wandering</h2>
    <p>An explanation written at the normal reading size.</p>
</section>
```

```css
.sectionLabel {
    font-size: var(--text-section-label);
}
```

The `h2` and `p` do not need extra font-size classes because their shared
defaults already apply.


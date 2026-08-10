# OddHouse Photography Gallery

## The idea

The photography section should feel like entering a quiet art gallery, not opening another social-media feed. It should encourage visitors to pause, look closely, and move forward deliberately.

The gallery will use the existing cream background as a full-screen exhibition wall, with very little interface around the photographs.

## Guiding principles

- No infinite scrolling or automatically loaded photographs.
- No autoplay, likes, counters, cards, or other social-media conventions.
- Show only three or four photographs at a time.
- Let the visitor decide when to enter the next room.
- Give every photograph enough empty space to feel intentional.
- Preserve the natural aspect ratio of each photograph.
- Keep captions quiet and concise.
- Use no decorative shadows, heavy borders, or distracting controls.

## Rooms rather than a timeline

Photographs should be grouped into small visual rooms rather than arranged as a chronological timeline. A room can be based on a feeling, subject, or visual quality, such as:

- Light
- Streets
- People
- Details
- Quiet places

The year and location may still appear in a caption, but chronology should not control the experience.

Each room contains three or four photographs. One image should usually be dominant, while the others act as supporting observations.

## Desktop composition

A room should aim to fit within one calm, cream-coloured screen:

`` text
OddHouse                                      Photography

                         LIGHT

          ┌──────────────────────────────────┐
          │                                  │
          │        Main photograph           │
          │                                  │
          └──────────────────────────────────┘

          Smaller photograph   Smaller photograph

← Previous room              1 / 4              Next room →
``

The layout does not need to be symmetrical. Images can be slightly offset, as if they were mounted on a gallery wall. The dominant photograph should receive the most space without forcing every image into the same dimensions.

## Mobile behaviour

The gallery should not force three or four photographs into a single phone viewport. They would become too small to appreciate.

On mobile:

- Stack the photographs in one column.
- Allow normal scrolling within the current room.
- Keep generous space between photographs.
- End clearly after the third or fourth photograph.
- Show the next-room control only at the end.

This permits scrolling without creating a doom-scroll experience. Every room remains finite and deliberate.

## Navigation

Navigation should be minimal and written as text:

```text
← Previous room       Room 1 of 4       Next room →
```

Nothing should advance automatically. Moving to another room must always be a conscious action by the visitor.

The footer does not need to appear inside every room. It can appear after the visitor exits the gallery or at the clear end of the photography section.

## Captions

Captions should support the image without explaining it completely. A consistent format could be:

```text
Photograph title
Hyderabad · 2025
```

Titles may be omitted when they feel artificial. Location and year alone are enough.

## Technical direction

The first version can live on a single HTML page. JavaScript can replace the current room when the visitor selects **Previous room** or **Next room**, avoiding the need to maintain many separate HTML pages.

The learning path should remain gradual:

1. Make one button replace one photograph.
2. Store several photograph paths in an array.
3. Track the current photograph with a number.
4. Render three or four photographs as one room.
5. Group rooms by name and add previous/next navigation.

On the web, the full-screen gallery wall can use the small viewport height unit so mobile browser controls are handled more reliably:

```css
.galleryRoom {
  min-height: 100svh;
  box-sizing: border-box;
  background: var(--bg);
}
```

This is a direction rather than a finished implementation. The first useful experiment is one room containing three photographs, with no JavaScript beyond a button that moves to a second room.

## Intended feeling

The gallery should feel quiet, finite, and personal: a place where photographs are encountered rather than consumed.

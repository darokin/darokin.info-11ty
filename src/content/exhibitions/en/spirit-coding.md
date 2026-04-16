---
layout: layouts/base.njk
lang: en
title: "Spirit Coding"
tags: ["exhibition"]
date: 2023-05-01
period: MAY-JULY 2023
summary: Immersive and interactive solo show in a new 300sqm venue.
place: La Galerie Parallele - Reims
relatedArtworks: ["in-pace", "rorschach-printer"]
permalink: /en/exhibitions/spirit-coding/index.html
---
## Spirit Coding

Immersive and interactive solo show in a new 300sqm space with multiple digital installations, videos, sculptures, paintings and prints.

Curated by MATxZEKKY. Inauguration of La Galerie Parallele, rue de Talleyrand - Reims.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis suscipit diam, quis interdum odio faucibus id.

### Related artworks
<ul class="related-list">
{% for item in collections.artworks | relatedBySlug(relatedArtworks, "en") %}
  <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>

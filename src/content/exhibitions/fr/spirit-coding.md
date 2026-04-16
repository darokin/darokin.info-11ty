---
layout: layouts/base.njk
lang: fr
title: "Spirit Coding"
tags: ["exhibition"]
date: 2023-05-01
period: MAI-JUIL 2023
summary: Solo show immersif et interactif dans un espace de 300m2.
place: La Galerie Parallele - Reims
relatedArtworks: ["in-pace", "rorschach-printer"]
permalink: /expositions/spirit-coding/index.html
---
## Spirit Coding

Solo show immersif et interactif dans un nouvel espace de 300m2, avec installations numeriques, videos, sculptures, peintures et prints.

Commissariat d'exposition par MATxZEKKY. Inauguration de La Galerie Parallele, rue de Talleyrand - Reims.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis suscipit diam, quis interdum odio faucibus id.

### Oeuvres liees
<ul class="related-list">
{% for item in collections.artworks | relatedBySlug(relatedArtworks, "fr") %}
  <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}
</ul>

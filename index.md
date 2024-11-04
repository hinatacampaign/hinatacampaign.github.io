---
title: Hinatazaka Campaign
---
## MV

{% assign mvs = site.pages | where: "layout", "videojs" | where: "category", "mv" %}
{% for v in mvs %}
- <a href="{{ v.url }}" target="_blank">{{ v.title }}</a>
{% endfor %}

## CM

{% assign cms = site.pages | where: "layout", "videojs" | where: "category", "cm" %}
{% for v in cms %}
- <a href="{{ v.url }}" target="_blank">{{ v.title }}</a>
{% endfor %}

## Movie

{% assign tvs = site.pages | where: "layout", "videojs" | where: "category", "movies" %}
{% for v in tvs %}
- <a href="{{ v.url }}" target="_blank">{{ v.title }}</a>
{% endfor %}

## TV

{% assign tvs = site.pages | where: "layout", "videojs" | where: "category", "tv" %}
{% for v in tvs %}
- <a href="{{ v.url }}" target="_blank">{{ v.title }}</a>
{% endfor %}

## SR

{% assign srs = site.pages | where: "layout", "videojs" | where: "category", "sr" %}
{% for v in srs %}
- <a href="{{ v.url }}" target="_blank">{{ v.title }}</a>
{% endfor %}
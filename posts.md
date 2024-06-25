---
layout: posts
title: Posts
description: Here be writings
permalink: /posts
---

<ul>
  {% for post in site.posts %}
    <li>
        <span>
            <i>
                <time datetime="2022-01-28" pubdate="">
                    {{ post.date | date: "%b %-d, %Y" }}
                </time>
            </i>
        </span>
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

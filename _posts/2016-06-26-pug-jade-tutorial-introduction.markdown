---
layout: post
title:  "Pug/Jade Tutorial - Introduction - Part 1"
date:   2016-06-26 10:33:19
categories: tutorial pug jade
---
Development time is an important factor in today's fast paced coding environment. Preprocessors have been introduced as a way of reducing the amount of code needed to be written in an attempt to speed up development time.

There are numerous types of preprocessors. We have CSS preprocessors such as Sass, Less and Stylus. Javascript preprocessors such as CoffeeScript, LiveScript and TypeScript. 

There are also HTML templating languages such as HAML and the one I am going to be writing about [Pug](https://github.com/pugjs/pug) (formerly known as [Jade](http://jade-lang.com/reference/code/)).

I have been using Pug/Jade for the past few years in work, and have decided to write up what I have learnt about the templating language in this time as there is not much documentation about the language out there. If I can help one person from these tutorials then I think it will have been worthwhile.

<div class="callout primary">
  <p>I will refer to the language as Pug going forward, but note that these tutorials are also valid with Jade.</p>
</div>

## Pug Syntax

Pug is a clean language to write. Indentation and whitespace is important when coding in this language as it will affect how the HTML is rendered once compiled.

To put HTML elements inside one another, you will need to indent the code within Pug. The example below shows how not indenting the code correctly will affect the compiled HTML.

*The following Pug:*
{% highlight jade %}
.container
  h1 Page Title
  p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit lacinia auctor. Nullam aliquet tortor mauris, et vehicula purus mollis sed.
{% endhighlight %}

*Compiles into this HTML:*
{% highlight html %}
<div class="container">
  <h1>Page Title</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit lacinia auctor. Nullam aliquet tortor mauris, et vehicula purus mollis sed.</p>
</div>
{% endhighlight %}

*However, if you do not add indentation to the code, as shown here:*
{% highlight jade %}
.container
h1 Page Title
p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit lacinia auctor. Nullam aliquet tortor mauris, et vehicula purus mollis sed.
{% endhighlight %}

*The code will compile into the following HTML:*
{% highlight html %}
<div class="container"></div>
<h1>Page Title</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit lacinia auctor. Nullam aliquet tortor mauris, et vehicula purus mollis sed.</p>
{% endhighlight %}

As you can see the `<h1>` and `<p>` tags are no longer within the container `<div>`. This shows that indentation is an important factor to take note of when you start coding in Pug. 

## Benefits of Pug

### Speed

As Pug is a templating language, the main benefit is speed of coding. There will be an initial learning curve to undertake, but once you grasp the simple syntax you will be able to blitz through lines of code in rapid time, which should improve any coders productivity.

The following example shows how the syntax is shorter and quicker to code than your standard HTML.

*Pug:*
{% highlight jade %}
.container
{% endhighlight %}

*Renders to the following HTML:*
{% highlight html %}
<div class="container"></div>
{% endhighlight %}

As you can see it is much shorter and will definitely improve your productivity when you learn the syntax.

### Readability

As the syntax requires indentation and no closing tags are required (these will automatically be generated when it compiles into HTML), it makes it much easier to read through hundreds of lines of code.

### Other

There are other benefits such as mixins which allow you to write reusable pieces of code, and in built helpers such as markdown and coffeescript helpers that allow you to write these languages straight into your Pug code. However, I will cover these in more detail in upcoming parts of this series.

## Overview

Hopefully this introduction to Pug has given you a basic understanding into the language and the reasons why people are using this templating language. If you have any questions about Pug then leave a comment below and I will do my best to answer them.


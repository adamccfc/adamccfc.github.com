---
layout: post
title:  "Simple CSS Only Responsive Menu"
date:   2016-01-17 19:45:00
categories: css responsive web design tutorial
---
I have created a simple responsive css only navigation menu, that is easily cusotmisable with some CSS knowledge. This tutorial will explain the code used to build the navigation in the example below.

<p data-height="211" data-theme-id="0" data-slug-hash="RrZomP" data-default-tab="result" data-user="AdamCCFC" class='codepen'>See the Pen <a href='http://codepen.io/AdamCCFC/pen/RrZomP/'>CSS Only Responsive Menu</a> by Adam Morgan (<a href='http://codepen.io/AdamCCFC'>@AdamCCFC</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

*To see the menu working responsively you may be better viewing it on [codepen](http://codepen.io/AdamCCFC/pen/RrZomP).*

## HTML

First we will start with the HTML used to create the navigation. *Please note that when coding the navigation initially, I used the HTML preprocessor language known as [Jade](http://jade-lang.com/).

{% prism html %}
<header>
  <a href="/"><img src="http://placehold.it/350x150" class="logo"/></a>
  <nav>
    <input type="checkbox" id="menu"/>
    <label for="menu"><i class="fa fa-bars"></i></label>
    <ul>
      <li><a href="#">Products</a></li>
      <li><a href="#">Why Us</a></li>
      <li><a href="#">Customers</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Work for Us</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
{% endprism %}

The menu has been placed within the `<header>` tag. This has allowed us to separate the image (which you can use to place your logo) and the navigation from one another.

To make the mobile navigation clickable on smaller devices we have used a checkbox to allow the dropdown to be displayed whether the checkbox is checked or not.

## CSS

Now the navigation has been built, we need to add styles to make it function correctly. Use the following styles to get the menu functioning as per the example.

{% prism css %}
body {
  font-family: 'Lato', sans-serif;
}
header {
  background-color: #456990;
  width: 100%;
}
.logo {
  margin: 10px;
  height: 50px;
  display: inline;
}
@media (max-width: 320px) {
  .logo {
    margin: 10px 0;
    height: 45px;
  }
}
nav {
  display: inline;
  float: right;
  /* Hides the input checkbox and it's label */
}
@media (max-width: 800px) {
  nav {
    position: relative;
    display: inline;
    padding: 0;
    background: none;
  }
  nav input[type='checkbox'] + label {
    margin: 0;
  }
  nav input[type=checkbox]:checked ~ ul {
    display: inline-block;
    position: absolute;
    top: 58px;
    left: -75px;
    padding: 10px 18px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    background-color: #456990;
    z-index: 2;
  }
  nav input[type=checkbox]:checked ~ ul:after {
    width: 0px;
    height: 0px;
    position: absolute;
    top: -7px;
    right: 8px;
    content: '';
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #456990;
  }
}
nav ul {
  display: inline-block;
  display: inline;
  float: right;
  margin: 25px 0 0;
}
@media (max-width: 800px) {
  nav ul {
    display: none;
  }
}
nav ul li {
  display: inline;
  margin-right: 20px;
}
@media (max-width: 800px) {
  nav ul li {
    margin: 5px 0px 5px 0px;
    float: none;
    display: block;
  }
}
nav ul li a {
  color: #ffffff;
  text-decoration: none;
}
nav ul li a:hover {
  color: #ffffff;
  text-decoration: underline;
}
nav input {
  display: none;
}
nav i.fa {
  display: none;
}
@media (max-width: 800px) {
  nav i.fa {
    display: block;
  }
}
nav label {
  display: none;
}
@media (max-width: 800px) {
  nav label {
    display: block;
    cursor: pointer;
    padding: 25px;
    color: #ffffff;
    font-size: 28px;
  }
}
{% endprism %}

The magic happens when the screen size gets to smaller than 800px. The label is displayed for the checkbox, and when the label is clicked, the menu appears. This is done with the `:checked` pseudo-class and the `~` (tiled) CSS selector. 

What happens is when the checkbox is checked, the sibling class of `ul` gets set to `display: inline-block;`. This is how the menu gets displayed when the checkbox gets checked.

### Your Thoughts

If you have any suggestions on how to improve the code, or modifications that you have made whilst creating your own responsive menu leave a comment below.
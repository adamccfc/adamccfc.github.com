---
layout: post
title:  "Styling Checkboxes with CSS & FontAwesome"
date:   2016-05-04 10:33:19
categories: web tutorial
---
The default checkbox style that browsers display may not suit the style of your website. This tutorial will teach you how to create a custom checkbox that will fit in with the style of your website by using CSS and [FontAwesome](http://fortawesome.github.io/Font-Awesome/icons/).

<div class="callout warning">
  <p>Please note that this will not currently work in Firefox.</p>
</div>

First of all we're going to start by creating some simple checkboxes with HTML. To do this we will use the following code:

{% prism html %}
<input type="checkbox">
<input type="checkbox">
<input type="checkbox">
<input type="checkbox">
{% endprism %}

Next we're going to style these checkboxes. The first thing we're going to want to change is the browsers default styles. To do this we use the CSS property `appearance`. To make this compatible with different browsers we will have to use different vendor prefixes for the appearance property. You can read more about vendor prefixes [here](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix).

Use the following code to remove the browsers default styles:

{% prism css %}
input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
}
{% endprism %}

Now the checkboxes should have disappeared as there is no styling for them. We must now create the styles for them. I have used the following as an example:

{% prism css %}
input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  border: 2px solid #9bc1f3;
}
{% endprism %}

This creates the boxed shape for the checkbox with rounded corners. 

The final step we need to take is adding a FontAwesome icon to the checkbox when it is checked. We can do this in CSS by using the `:after` and `:checked` CSS psuedo classes.

{% prism css %}
input[type="checkbox"]:checked:after {
  display: block;
  outline: none;
  content: "\f00c";
  font-family: FontAwesome;
  color: #fff;
  position: absolute;
  font-size: 18px;
  margin-left: 4px;
  margin-top: 4px;
}
{% endprism %}

You can see the fully working example of this code below:

<p data-height="266" data-theme-id="0" data-slug-hash="dMwGNZ" data-default-tab="css,result" data-user="AdamCCFC" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/AdamCCFC/pen/dMwGNZ/">Styling Checkboxes with CSS & FontAwesome</a> by Adam Morgan (<a href="http://codepen.io/AdamCCFC">@AdamCCFC</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

*Please bear in mind that the example above is coded using SCSS*

---
layout: post
title:  "CSS & HTML Only Accordion"
date:   2015-10-16 15:09:00
categories: tutorials css html accordion
---

**Using only CSS and HTML you can build a beautifully sleek accordion for your website.**

This tutorial will teach you how to build an accordion that has been built using CSS and HTML. There are lots of methods you can use to build an accordion, especially with the use of Javascript. However, some people may have Javascript turned off so the accordion will not work properly.

We are going to be using hidden input checkboxes to display the content, so when the label for that input box is checked, we can then display the content within the article tag by using tilde `~` CSS selector.

### The HTML Markup

First off, start by creating a list.

{% highlight html %}
  <ul class="accordion">
    <li></li>
    <li></li>
    <li></li>
  </ul>
{% endhighlight %}

Each `<li>` tag will contain the title and content of the accordion.

Next you want to create the structure for each accordion. Inside the `<li>` tags you need to add an `<input>` `<label>` and `<article>` tag.

{% highlight html %}
  <ul class="accordion">
      <li>
          <input type="checkbox" name="checkbox" id="accordion1" value="value">
          <label for="accordion1" class="accordion">Accordion header 1</label>
          <article>
              <p>First bunch of text</p>
              <p>Second bunch of text</p>
          </article>
      </li>
      <li>
          <input type="checkbox" name="checkbox" id="accordion2" value="value">
          <label for="accordion2">Accordion header 2</label>
          <article>
              <p>First bunch of text</p>
              <p>Second bunch of text</p>
          </article>
      </li>
      <li>
          <input type="checkbox" name="checkbox" id="accordion3" value="value">
          <label for="accordion3">Accordion header 3</label>
          <article>
              <p>First bunch of text</p>
              <p>Second bunch of text</p>
          </article>
      </li>
  </ul>
{% endhighlight %}

You now have the right HTML markup to create the accordion.

### The CSS Markup

If you currently look at your accordion with no styling, you will see that you have just a bunch of text. You now need to add some styles to get it looking and functioning properly.

First you will need to start off with styling the `<ul>`:

{% highlight css %}
  ul.accordion {
    position: relative;
    list-style: none;
    padding: 0;
    width: 300px;
  }
{% endhighlight %}

*Note - If you want to make the accordion responsive, set the width as 100%*

We will now start to style the labels. This is where the user will click on to reveal the content that will be hidden within the accordion. You will want to give this element the cursor propert to `pointer` to indicate to the user that they can click on this element.

Here is the following code I have used to style the labels:

{% highlight css %}
  ul.accordion li label {
    padding: 20 px;
    color: #f3f3f3;
    font-size: 20 px;
    font-weight: 600;
    width: 100 % ;
    background-color: #3b5369;
    display: block;
    border-bottom: 1px solid # 32485 d;
    cursor: pointer;
  }

  ul.accordion li label:after {
    content: '\f054';
    font-family: FontAwesome;
    position: absolute;
    right: -15 px;
    transition: transform 0.5 s;
  }
{% endhighlight %}
*Note - I am using a font awesome icon to reinforce to the user that they can click on the element*

We now want to style the `<article>` tag. This is where the content within the accordion will be displayed.

{% highlight css %}
  ul.accordion article {
    display: none;
    padding: 20 px;
    width: 100 % ;
    height: 0 px;
    background-color: #f3f3f3;
    color: #32485d;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  ul.accordion article p {
    margin-bottom: 10px;
    font-size: 14px;
  }
{% endhighlight %}

Your accordion should now be starting to look nice. However there will be inputs displayed. We next want to hide these with the following code:

{% highlight css %}
  ul.accordion input {
    display: none;
  }
{% endhighlight %}

Now they have been hidden you will want to add the functionality to the accordion. You can do this with the following code:

{% highlight css %}
  ul.accordion input[type= checkbox]: checked ~ article {
    display: block;
  }

  ul.accordion input[type = checkbox]: checked ~ label:after {
    transform: rotate(90 deg);
    -webkit-transform: rotate(90 deg);
    -ms-transform: rotate(90 deg);
  }
{% endhighlight %}

This basically says that when you click the label display the article section. I have also added some transforms to the font-awesome icon to move when you click the label.

Here is all of the CSS markup together:

{% highlight css %}
ul.accordion {
  position: relative;
  list-style: none;
  padding: 0;
  width: 300px;
}

ul.accordion li label {
  padding: 20 px;
  color: #f3f3f3;
  font-size: 20 px;
  font-weight: 600;
  width: 100 % ;
  background-color: #3b5369;
  display: block;
  border-bottom: 1px solid # 32485 d;
  cursor: pointer;
}

ul.accordion li label: after {
  content: '\f054';
  font-family: FontAwesome;
  position: absolute;
  right: -15 px;
  transition: transform 0.5 s;
}

ul.accordion article {
  display: none;
  padding: 20 px;
  width: 100 % ;
  height: 0 px;
  background-color: #f3f3f3;
  color: #32485d;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

ul.accordion article p {
  margin-bottom: 10px;
  font-size: 14px;
}

ul.accordion input {
  display: none;
}

ul.accordion input[type= checkbox]: checked~article {
  display: block;
  height: 100 %; -webkit-transition: all 0.5 s ease-in-out; 
  -moz-transition: all 0.5 s ease-in-out; 
  -o-transition: all 0.5 s ease-in-out;
  - ms-transition: all 0.5 s ease-in-out;
  transition: all 0.5 s ease-in -out;
}

ul.accordion input[type = checkbox]: checked~label: after {
  transform: rotate(90 deg);
  -webkit-transform: rotate(90 deg);
  -ms-transform: rotate(90 deg);
}
{% endhighlight %}

You can see a live preview of this accordion working here:

<p data-height="269" data-theme-id="0" data-slug-hash="WQELRE" data-default-tab="result" data-user="AdamCCFC" class='codepen'>See the Pen <a href='http://codepen.io/AdamCCFC/pen/WQELRE/'>HTML & CSS Accordion</a> by Adam Morgan (<a href='http://codepen.io/AdamCCFC'>@AdamCCFC</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

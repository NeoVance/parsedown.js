#Parsedown.js WIP
------------

Parsedown.js is a Markdown parser for JavaScript.

#### Example

```javascript
// Parse some text
text = 'Hello **Parsedown.js**';
result = Parsedown.instance().parse(text);
// or
result = new Parsedown().parse(text);

// Use JQuery to put the html directly into an element.
$('#parsed-container').html(result);

// Or use it in your MVC
```

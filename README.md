# Tweet Your Science CSV to HTML formatter

This is a simple webform for converting a CSV file to an HTML list.

Designed in a couple of hours to be easy to use it isn't an engineering marvel letting the following javascript libraries do the heavy lifting:

* [HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate)
* [CSV-JS](https://github.com/gkindel/CSV-JS)
* [Mustache templating engine](https://github.com/janl/mustache.js)


## Quick start

Download or clone this repository and open `index.html` in the `public_html` folder.
Then upload a valid CSV file and submit the form.

The the output will be placed in two sections. The first is a syntax highlighted code section and the second is a preview section. Copy either of these sections to use.


## Editing or changing the template

To change the output find the template section in `index.html`:

<script id="tys-template-list" type="text/template">
    ... template stuff here with curly braces {{ around things }}...
</script>

The template is formatted using the [Mustache syntax](https://github.com/janl/mustache.js) and you should refer to that to get an understanding of how it works. But in essence though the items surrounded by `{{}}` are replaced by data from the CSV file.

The script takes the first row from the CSV file and makes them into a variable for the template so you can use any items from that row.

I've also put a few comments in `main.js` if you're keen to find out how it works at the back end.

## Problems

Flick me a message or tweet on [@00pasta](https://twitter.com/00pasta)
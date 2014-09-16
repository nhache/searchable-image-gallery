searchable-image-gallery
========================
jQuery plugin to create a dynamically searchable image gallery
Adding jQuery
-------------
Add the jQuery library (e.g. via the Google API) to your html file (just before the closing body tag ```</body>```):
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```
Adding the plugin
-----------------
Add the link to the plugin file just below the jQuery library:
```
<script src="jQuery.search-gallery-plugin.js"></script>
```
Setting up the html
-------------------
Using the plugin is straightforward. Create an image gallery using the following format:
```
<div id="img-gallery">
	<img src="example1.jpg" alt="example_tag">
	<img src="example2.jpg" alt="example_tag, another_example_tag">
	<img src="example3.jpg" alt="and_yet_another_example_tag">
</div>
```
The alt attribute should contain the searchable tags, seperated by commas.

To make use of the search functionality you also require a form in the following fomat:
```
<form id="search-term">
	<div class="input-group">
		<input type="text" placeholder="Enter your search term(s) here">
		<button type="submit">Search</button>
	</div>
</form>
```
I also created a code snippet to control search results:
```
<div class="search-overview">
	<p>Your search:</p>
	<span class="no-tags">No tags yet</span>
	<span class="no-results">No search results</span>
	<span class="tags"></span>
</div>
```
Calling the plugin
------------------
Calling the plugin is straightforward. Insert this code snippet after the other javascript files:
```
<script type="text/javascript">
  $('#image-gallery').searchGallery();
</script>
```
Et voilà.

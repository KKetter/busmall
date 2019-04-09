# **Bus Mall**  *"Beep Beep"*
### Key Features
- The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.
In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.

- Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.

- To do this, you'll want a constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image (to be used for display purposes), its filepath, the number of times it has been shown, and the number of times it has been clicked. You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.

- After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting) and also display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".


# 

### User Stories

 1) As a user, I want to see 3 unique products at a time, preferably side-by-side.

 2) As a user I dont want to see the same products from the previous selection round.

 3) As a user I want to track the nubmer of times a product is dispalyed.

 4) As a user I want to track the number of times a product is selected.

 5) As a user, I want clear instructions on how to use the site.


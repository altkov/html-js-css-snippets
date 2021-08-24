# html js css snippets

1. menu-active is jQuery plugin that highlight the active item in your menu.

How to use:

Select menu items (or links) and call menuActive function.

    $('.your-menu-items').menuActive();

The function have one argument - the options object that includes:

method, string, values: 'equal', 'search'

The method of comparasion of menu item link and the page link

'equal' for exact compare url of the page and the link in menu item

usage: 
  
    $('.your-menu-items').menuActive('equal')

just leave it empty to call 'search' method that will search the link in memu item in the page link. 

This method highlights active menu item if child url is opened.

Like on page https://site.com/parent/child the menu item with link https://site.com/parent will be highlighted


class, string, takes any string, default: 'active'

The class that will be added to menu item

The active menu item will have class 'active', to change it use class property of options object

Does not support dropdown menus (but you can try)

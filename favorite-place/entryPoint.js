define(['core/widget/Widget',
        'core/widget/menu/Menu',
        'core/widget/menu/MenuItem'], 

function(Widget, Menu, MenuItem) {

    'use strict';

    /**
     * Extension entry point.
     */
    return function main() {
        var menuItem = new MenuItem({
            title: 'Favorite',
            tooltip: 'Save your favorite places',
            iconUrl: 'extensions/favorite-place/image/star.png'
        });
        
        /** @type {Menu} */
        var menu = Widget.findById('main-menu');
        menu.addMenuItem(menuItem);
    };
});

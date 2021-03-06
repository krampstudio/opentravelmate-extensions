/**
 * Place finder entry point.
 *
 * @author marc.plouhinec@gmail.com (Marc Plouhinec)
 */

define([
    '../core/widget/Widget',
    '../core/widget/menu/Menu',
    '../core/widget/menu/MenuItem',
    './menu-panel/externalController'
], function(Widget, Menu, MenuItem, externalController) {
    'use strict';

    /**
     * Extension entry point.
     */
    return function main() {
        // Add a menu item
        var menuItem = new MenuItem({
            title: 'Find place',
            tooltip: 'Find a place',
            iconUrl: 'extensions/place-finder/image/ic_btn_find_place.png'
        });
        var menu = /** @type {Menu} */ Widget.findById('main-menu');
        menu.addMenuItem(menuItem);

        // Initialize the externalController
        externalController.init();

        // Listen to the menu item click event
        menuItem.onClick(function() {
            // Show the place finder web view.
            externalController.showWebView();
        });

        // Listen to the web view close button
        externalController.onClose(function() {
            externalController.removeWebView();
        });
    };
});

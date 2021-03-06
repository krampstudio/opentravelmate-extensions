/**
 * Define the main view entry point.
 *
 * @author marc.plouhinec@gmail.com (Marc Plouhinec)
 */

define([
    '../widget/webview/webview',
    '../extension/extensionManager'
], function(webview, extensionManager) {
    'use strict';

    /**
     * Extension entry point.
     */
    return function main() {
        // Layout the widgets
        webview.layout();

        // Start the extensions
        extensionManager.startExtensions();
    };
});

geotab.addin.DriveAddin = () => {
    'use strict';

    const elAddin = document.getElementById("driveAddin");

    return {
        /**
         * initialize() is called only once when the Add-In is first loaded. Use this function to initialize the
         * Add-In's state such as default values or make API requests (MyGeotab or external) to ensure interface
         * is ready for the user.
         * @param {object} freshApi - The GeotabApi object for making calls to MyGeotab.
         * @param {object} freshState - The page state object allows access to URL, page navigation and global group filter.
         * @param {function} initializeCallback - Call this when your initialize route is complete. Since your initialize routine
         *        might be doing asynchronous operations, you must call this method when the Add-In is ready
         *        for display to the user.
         */
        initialize(freshApi, freshState, initializeCallback) {

            // Loading translations if available
            if (freshState.translate) {
                freshState.translate(elAddin || '');
            }

            // MUST call initializeCallback when done any setup
            initializeCallback();
        },

        focus(freshApi, freshState) { },
        blur(freshApi, freshState) { }
    };
};
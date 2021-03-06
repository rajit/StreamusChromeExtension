﻿define([
    'background/collection/streamItems',
    'text!template/addToStreamButton.html'
], function (StreamItems, AddToStreamButtonTemplate) {
    'use strict';

    var AddToStreamButtonView = Backbone.Marionette.ItemView.extend({
        
        tagName: 'button',
        className: 'button-icon colored',
        template: _.template(AddToStreamButtonTemplate),
        
        attributes: {
            title: chrome.i18n.getMessage('add')
        },
        
        events: {
            'click': 'addToStream',
            'dblclick': 'addToStream'
        },
        
        addToStream: _.debounce(function () {
            StreamItems.addByVideo(this.model, false);

            //  Don't allow dblclick to bubble up to the list item and cause a play.
            return false;
        }, 100, true)

    });

    return AddToStreamButtonView;
});
// commonHeaderLinks

// Helper
Template.commonHeaderLinks.helpers({
    canExit: function() {
        return Meteor.isCordova;
    },
});

// Events
Template.commonHeaderLinks.events({
    'click #header-exit-app': function(event) {
        console.log('E - click #header-exit-app');

        if(Meteor.isCordova) {
            event.preventDefault();

            navigator.app.exitApp();
        }
    }
});
/*
  READ THESE COMMENTS AS A PART OF STEP TWO

  To manage switching among the different views in this application, 
  we have implemented a "view switcher" in the `app` component. 

  There are three key parts to the view switcher:
    1. The `view` property defined on `AppCtrl`
    2. The `changeView` function defined on `AppCtrl`
    3. The `ng-switch` directive (used in this component's HTML template)

  The value of the `view` property will determine which view gets rendered inside
  the component with the `ng-switch` directive. You can set the initial value of
  `view` inside `AppCtrl`, determining what view gets rendered "by default".

  If you haven't modified this code yet, the view switcher observes the following rules:
  - The default view is 'feed'
  - If the view is set to 'feed', the `<feed>` component is displayed
  - If the view is set to any other value, the `<post>` component is displayed
  - The `changeView` function should change the value of `view` within `AppCtrl`.

  You'll make some refactors and additions to this view switcher throughout the
  next steps of the assessment. When you're ready, return to the README.
*/

angular.module('app')
.controller('AppCtrl', function() {
  this.view = 'feed';
  this.changeView = (option) => {
    this.view = option;
  }
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});

angular.module('ngCollapse', [])

  .directive('ngCollapse', function() {
    return {
      templateUrl: 'collapse.html',
      restrict: 'E',
      transclude: true,
      scope:{
        'height': '@'
      },
      controller: ['$scope', '$element', function($scope, $element) {
        $scope.expanded = false
        $scope.expandable = false

        $scope.collapse = function () {
          if($element.height() >= $scope.height && $scope.expanded === false){
            $scope.expandable = true
          }
        }

        $scope.contracted = {
          'max-height': $scope.showMoreHeight + 'px',
          'overflow': 'hidden'
        }

      }]
    }
  })

angular.module("ngCollapse").run(["$templateCache", function($templateCache) {$templateCache.put("collapse.html","<span>\n  <div ng-style=\'contracted\' ng-transclude></div>\n  <div ng-show=\'expanded\' ng-transclude></div>\n  <a ng-hide=\'expanded || !expandable\' ng-click=\'expanded = !expanded && collapse()\'>Show More</a>\n  <a ng-show=\'expanded && expandable\' ng-click=\'expanded = !expanded && collapse()\'>Show Less</a>\n</span>\n");}]);
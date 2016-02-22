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

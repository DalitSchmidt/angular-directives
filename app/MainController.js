app.controller('MainController', ['$scope', function( $scope ) {
    $scope.data = [
        {
            id: 2456,
            name: 'Blue',
            hex: '#080cee'
        },
        {
            id: 4958,
            name: 'Red',
            hex: '#ee0914'
        },
        {
            id: 3245,
            name: 'Black',
            hex: '#000'
        }
    ]
    $scope.active = null

    $scope.getColorInfo = function( color_id ) {
        return {
            rgb: Math.random(),
            hsl: 'wrgf3rf',
            description: 'eruoghaeri gheru gheirghae ruayueyurfv'
        }
    }

    $scope.setNewColor = function( color_id ) {
        $scope.active = $scope.getColorInfo( color_id )
    }
}])
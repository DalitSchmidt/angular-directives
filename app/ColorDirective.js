app.directive('color', function() {
    return {
        restrict: 'E',
        scope: true,
        template: `<span>{{ color.hex }}</span>`,
        link: function( scope, element, attrs ) {
            $(element).on('click', function() {
                $('.color').removeClass('active')
                $(element).addClass('active')
                console.log( attrs.hex )
            })
        }
    }
})
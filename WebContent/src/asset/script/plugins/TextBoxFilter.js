require.config({
    paths: {
    	/* lib */
        'jquery': '/src/asset/script/lib/jquery-1.10.2',
    }
});
define( [ 'jquery' ], function ( $ ) {
    'use strict';
    var onFilterComplete = function () {}, countTotal = function () {
            return -1;
        }, countShown = function () {
            return -1;
        }, countHidden = function () {
            return -1;
        },
        ele_container = "",
        filterComplete = false,
        shown = -1,
        hidden = -1;

    var config = {
        globalMatch: true,
        casesensitive: true,
        highlight: true,
        initialNoFilterIfNoMatch: true,
        highlightClass: "filter-highlight",
        matchClass: "filter-match"
    };

    var filter = function ( element, container ) {
        setElementContainer( container );
        element = makeIdIfUnknown( element );
        container = makeIdIfUnknown( container );
        filterComplete = false;
        countTotal = function () {
            var c = 0;
            $( container + ' > li' ).each( function () {
                c++;
            } );
            return c;
        };
        countShown = function () {
            return shown;
        };
        countHidden = function () {
            return hidden;
        };

        var value = $.trim( $( element ).val() );

        if ( value.length > 1 ) {
            filterContains( value, container );
        } else {
            filterStartsWith( value, container );
        }
    };

    var makeIdIfUnknown = function ( str ) {
        if ( typeof str === 'string' ) {
            if ( str.substring( 0, 1 ) != '#' && str.substring( 0, 1 ) != '.' ) {
                str = '#' + str;
            }
        }
        return str;
    };

    var getProperty = function ( key ) {
        switch ( key ) {
        case 'total':
            return countTotal();
        case 'shown':
            return countShown();
        case 'hidden':
            return countHidden();
        case 'filterComplete':
            return filterComplete;
        default:
            return eval( 'config.' + key );
        }
    };

    var attachTo = function ( element, container ) {
        setElementContainer( container );
        var el = makeIdIfUnknown( element );
        var co = makeIdIfUnknown( container );
        $( el ).bind( 'keyup', function () {
            filter( el, co );
        } );

    };

    var filterContains = function ( value, container ) {
        filterContainsOrStartsWith( value, container, 'contains' );
    };

    var filterStartsWith = function ( value, container ) {
        filterContainsOrStartsWith( value, container, 'start' );
    };

    var filterContainsOrStartsWith = function ( value, container, whichone ) {
        removeHighlights( container );

        if ( value === '' ) {
            var count = 0;
            $( container + ' > li' ).fadeIn( function () {
                count++;
                //STEP: Run onFilterComplete once and only after all filtering is complete
                if ( count == $( container + ' > li' ).length ) {
                    if ( $.isFunction( onFilterComplete ) ) {
                        onFilterComplete();
                    }
                    filterComplete = true;
                    shown = count;
                    hidden = 0;
                }
            } );
        } else {
            var arShow = [],
                arHide = [];

            //STEP: Gonna loop here through all the LI items, and evaluate each one in loop...adding to either show or hide array
            $( container + ' > li' ).each( function () {
                // if ( $( this ).children( ":first" ).length == 0 ) {
                //     return;
                // }
                var ele = $( this ); //.children( ":first" );
                var x = $.trim( ele.text() ),
                    rgxp = new RegExp( '(' + escapeForRegEx( value ) + ')', getRgxpModifiers() );
                if ( !config.casesensitive ) {
                    value = value.toLowerCase();
                    x = x.toLowerCase();
                }
                switch ( whichone ) {
                case 'start':
                    //rgxp = new RegExp('\\b(' + escapeForRegEx(value) + ')', getRgxpModifiers());
                    //Since \\b fails, if single quote is the start of character
                    rgxp = new RegExp( '^(' + escapeForRegEx( value ) + ')', getRgxpModifiers() );
                    if ( x.indexOf( value ) === 0 ) {
                        arShow[ arShow.length ] = this;
                    } else {
                        arHide[ arHide.length ] = this;
                    }
                    break;
                default:
                    if ( x.indexOf( value ) >= 0 ) {
                        arShow[ arShow.length ] = this;
                    } else {
                        arHide[ arHide.length ] = this;
                    }
                }
                ele.html( ele.text().replace( rgxp, '<span class="' + getRgxpClass() + '">$1</span>' ) );
            } );


            var completeOverride = false;
            //STEP: We have analyzed the list and put ones to hide/show in arHide/arShow.  Now, we hide/show them, but only under certain conditions.
            if ( ( arShow.length === 0 && whichone == 'start' && config.initialNoFilterIfNoMatch ) === false ) {
                var i;
                shown = arShow.length;
                hidden = arHide.length;
                var countS = 0,
                    countH = 0;
                for ( i = 0; i < arShow.length; i++ ) {
                    $( arShow[ i ] ).fadeIn( function () {
                        countS++;
                    } );
                }
                for ( i = 0; i < arHide.length; i++ ) {
                    $( arHide[ i ] ).fadeOut( function () {
                        countH++;
                    } );
                }
            } else {
                shown = arHide.length + arShow.length;
                hidden = 0;
                completeOverride = true;
            }

            //STEP: Finally, run onFilterComplete, if the caller defined one
            var intId = setInterval( function () {
                var isComplete = countS == shown && countH == hidden;

                if ( isComplete || completeOverride ) {
                    clearInterval( intId );
                    if ( $.isFunction( onFilterComplete ) ) {
                        onFilterComplete();
                    }
                    filterComplete = true;
                }
            }, 100 );
        }
    };

    var escapeForRegEx = function ( str ) {
        return str.replace( /([()[{*+.$^\\|?])/g, '\\$1' );
    };

    var removeHighlights = function ( container ) {
        //TODO: Must be able to handle HTML as part of the value.
        $( container + ' > li' ).each( function () {
            var ele = $( this );
            var rgxp = new RegExp( '<span class="' + getRgxpClass() + '">', getRgxpModifiers() );
            ele.html( ele.text().replace( rgxp, '' ) );
            rgxp = new RegExp( '</span>', getRgxpModifiers() );
            ele.html( ele.text().replace( rgxp, '' ) );
        } );
    };

    var setEvent = function ( event, fn ) {
        if ( $.isFunction( fn ) ) {
            switch ( event.toLowerCase() ) {
            case 'onfiltercomplete':
                onFilterComplete = fn;
                break;
            }
        }
    };

    var getElementContainer = function () {
        return ele_container;
    };

    var setElementContainer = function ( v ) {
        ele_container = v;
    };

    var setConfig = function ( obj ) {
        var key;
        for ( key in obj ) {
            if ( Object.prototype.hasOwnProperty.call( obj, key ) ) {
                config[ key ] = obj[ key ];
            }
        }
    };

    var getRgxpModifiers = function () {
        if ( config.casesensitive && config.globalMatch ) {
            return 'gm';
        } else if ( config.casesensitive && !config.globalMatch ) {
            return 'm';
        } else if ( !config.casesensitive && config.globalMatch ) {
            return 'gim';
        } else if ( !config.casesensitive && !config.globalMatch ) {
            return 'im';
        }
    };

    var getRgxpClass = function () {
        return ( config.highlight ) ? config.matchClass + ' ' + config.highlightClass : config.matchClass;
    };

    return {
        filter: filter,
        attachTo: attachTo,
        getProperty: getProperty,
        setEvent: setEvent,
        getContainer: getElementContainer,
        setConfig: setConfig
    };
} );

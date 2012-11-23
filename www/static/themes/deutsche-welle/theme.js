(function(){

    // Deutsche Welle Theme
    // -------------

    Datawrapper.Themes.DeutscheWelle = $.extend(true, {}, Datawrapper.Themes.Base, {

        hpadding: 0,
        vpadding: 10,

        colors: {
            palette: ['#DC0F6E', '#009BFF', '#82B905', '#82141E', '#E14614', '#C8D205', '#EB8C14'],
            positive: '#009BFF',
            negative: '#DC0F6E',
            background: '#E6E3E0'
        },

        horizontalGrid: {
            stroke: '#D2CEC7'
        }
    });

}).call(this);
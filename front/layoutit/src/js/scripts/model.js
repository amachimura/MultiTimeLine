var Ball = Backbone.Model.extend({
    defaults: {
    "char": "t",
    "time": 0 
    }
});

var Balls = Backbone.Collection.extend({
    model: Ball
});

var LimitLine = Backbone.Model.extend({
    defaults: {
    "time": 0,
    }
});

var Lines = Backbone.Collection.extend({
    model: LimitLine
});

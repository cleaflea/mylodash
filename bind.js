var myObj = {

    specialFunction: function () {
        console.log("specialFunction");
    },

    anotherSpecialFunction: function () {
        console.log("anotherSpecialFunction");
    },

    getAsyncData: function (cb) {
        cb();
    },

    render: function () {
        var that = this;
        this.getAsyncData(function () {
            //if we use this will call undefined is not a function error
            //so we have to assign this -> that to pass the context inside the innert function
            //this.specialFunction();
            //this.anotherSpecialFunction();
            that.specialFunction();
            that.anotherSpecialFunction();
        });
    },

    renderbind: function() {
        this.getAsyncData(function () {
            this.specialFunction();
            this.anotherSpecialFunction();
        }.bind(this));
    }
};

myObj.render();
myObj.renderbind();

var foo = {
    x: 3
}

var bar = function(){
    console.log(this.x);
}

bar(); // undefined

var boundFunc = bar.bind(foo);

boundFunc(); // 3
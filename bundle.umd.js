(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    function rollupFun() {
        console.log('rollup bundle');
    }

    rollupFun();

}));

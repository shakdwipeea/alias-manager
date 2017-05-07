goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9544__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9545__i = 0, G__9545__a = new Array(arguments.length -  0);
while (G__9545__i < G__9545__a.length) {G__9545__a[G__9545__i] = arguments[G__9545__i + 0]; ++G__9545__i;}
  args = new cljs.core.IndexedSeq(G__9545__a,0);
} 
return G__9544__delegate.call(this,args);};
G__9544.cljs$lang$maxFixedArity = 0;
G__9544.cljs$lang$applyTo = (function (arglist__9546){
var args = cljs.core.seq(arglist__9546);
return G__9544__delegate(args);
});
G__9544.cljs$core$IFn$_invoke$arity$variadic = G__9544__delegate;
return G__9544;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9547__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9548__i = 0, G__9548__a = new Array(arguments.length -  0);
while (G__9548__i < G__9548__a.length) {G__9548__a[G__9548__i] = arguments[G__9548__i + 0]; ++G__9548__i;}
  args = new cljs.core.IndexedSeq(G__9548__a,0);
} 
return G__9547__delegate.call(this,args);};
G__9547.cljs$lang$maxFixedArity = 0;
G__9547.cljs$lang$applyTo = (function (arglist__9549){
var args = cljs.core.seq(arglist__9549);
return G__9547__delegate(args);
});
G__9547.cljs$core$IFn$_invoke$arity$variadic = G__9547__delegate;
return G__9547;
})()
;

return null;
});

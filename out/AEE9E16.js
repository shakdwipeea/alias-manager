goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8623__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8624__i = 0, G__8624__a = new Array(arguments.length -  0);
while (G__8624__i < G__8624__a.length) {G__8624__a[G__8624__i] = arguments[G__8624__i + 0]; ++G__8624__i;}
  args = new cljs.core.IndexedSeq(G__8624__a,0);
} 
return G__8623__delegate.call(this,args);};
G__8623.cljs$lang$maxFixedArity = 0;
G__8623.cljs$lang$applyTo = (function (arglist__8625){
var args = cljs.core.seq(arglist__8625);
return G__8623__delegate(args);
});
G__8623.cljs$core$IFn$_invoke$arity$variadic = G__8623__delegate;
return G__8623;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8626__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8627__i = 0, G__8627__a = new Array(arguments.length -  0);
while (G__8627__i < G__8627__a.length) {G__8627__a[G__8627__i] = arguments[G__8627__i + 0]; ++G__8627__i;}
  args = new cljs.core.IndexedSeq(G__8627__a,0);
} 
return G__8626__delegate.call(this,args);};
G__8626.cljs$lang$maxFixedArity = 0;
G__8626.cljs$lang$applyTo = (function (arglist__8628){
var args = cljs.core.seq(arglist__8628);
return G__8626__delegate(args);
});
G__8626.cljs$core$IFn$_invoke$arity$variadic = G__8626__delegate;
return G__8626;
})()
;

return null;
});

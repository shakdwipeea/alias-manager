goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9975__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9976__i = 0, G__9976__a = new Array(arguments.length -  0);
while (G__9976__i < G__9976__a.length) {G__9976__a[G__9976__i] = arguments[G__9976__i + 0]; ++G__9976__i;}
  args = new cljs.core.IndexedSeq(G__9976__a,0);
} 
return G__9975__delegate.call(this,args);};
G__9975.cljs$lang$maxFixedArity = 0;
G__9975.cljs$lang$applyTo = (function (arglist__9977){
var args = cljs.core.seq(arglist__9977);
return G__9975__delegate(args);
});
G__9975.cljs$core$IFn$_invoke$arity$variadic = G__9975__delegate;
return G__9975;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9978__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9979__i = 0, G__9979__a = new Array(arguments.length -  0);
while (G__9979__i < G__9979__a.length) {G__9979__a[G__9979__i] = arguments[G__9979__i + 0]; ++G__9979__i;}
  args = new cljs.core.IndexedSeq(G__9979__a,0);
} 
return G__9978__delegate.call(this,args);};
G__9978.cljs$lang$maxFixedArity = 0;
G__9978.cljs$lang$applyTo = (function (arglist__9980){
var args = cljs.core.seq(arglist__9980);
return G__9978__delegate(args);
});
G__9978.cljs$core$IFn$_invoke$arity$variadic = G__9978__delegate;
return G__9978;
})()
;

return null;
});

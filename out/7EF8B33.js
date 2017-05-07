goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9836__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9837__i = 0, G__9837__a = new Array(arguments.length -  0);
while (G__9837__i < G__9837__a.length) {G__9837__a[G__9837__i] = arguments[G__9837__i + 0]; ++G__9837__i;}
  args = new cljs.core.IndexedSeq(G__9837__a,0);
} 
return G__9836__delegate.call(this,args);};
G__9836.cljs$lang$maxFixedArity = 0;
G__9836.cljs$lang$applyTo = (function (arglist__9838){
var args = cljs.core.seq(arglist__9838);
return G__9836__delegate(args);
});
G__9836.cljs$core$IFn$_invoke$arity$variadic = G__9836__delegate;
return G__9836;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9839__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9840__i = 0, G__9840__a = new Array(arguments.length -  0);
while (G__9840__i < G__9840__a.length) {G__9840__a[G__9840__i] = arguments[G__9840__i + 0]; ++G__9840__i;}
  args = new cljs.core.IndexedSeq(G__9840__a,0);
} 
return G__9839__delegate.call(this,args);};
G__9839.cljs$lang$maxFixedArity = 0;
G__9839.cljs$lang$applyTo = (function (arglist__9841){
var args = cljs.core.seq(arglist__9841);
return G__9839__delegate(args);
});
G__9839.cljs$core$IFn$_invoke$arity$variadic = G__9839__delegate;
return G__9839;
})()
;

return null;
});
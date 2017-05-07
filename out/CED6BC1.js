goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8714__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8715__i = 0, G__8715__a = new Array(arguments.length -  0);
while (G__8715__i < G__8715__a.length) {G__8715__a[G__8715__i] = arguments[G__8715__i + 0]; ++G__8715__i;}
  args = new cljs.core.IndexedSeq(G__8715__a,0);
} 
return G__8714__delegate.call(this,args);};
G__8714.cljs$lang$maxFixedArity = 0;
G__8714.cljs$lang$applyTo = (function (arglist__8716){
var args = cljs.core.seq(arglist__8716);
return G__8714__delegate(args);
});
G__8714.cljs$core$IFn$_invoke$arity$variadic = G__8714__delegate;
return G__8714;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8717__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8718__i = 0, G__8718__a = new Array(arguments.length -  0);
while (G__8718__i < G__8718__a.length) {G__8718__a[G__8718__i] = arguments[G__8718__i + 0]; ++G__8718__i;}
  args = new cljs.core.IndexedSeq(G__8718__a,0);
} 
return G__8717__delegate.call(this,args);};
G__8717.cljs$lang$maxFixedArity = 0;
G__8717.cljs$lang$applyTo = (function (arglist__8719){
var args = cljs.core.seq(arglist__8719);
return G__8717__delegate(args);
});
G__8717.cljs$core$IFn$_invoke$arity$variadic = G__8717__delegate;
return G__8717;
})()
;

return null;
});

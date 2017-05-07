goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8339__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8340__i = 0, G__8340__a = new Array(arguments.length -  0);
while (G__8340__i < G__8340__a.length) {G__8340__a[G__8340__i] = arguments[G__8340__i + 0]; ++G__8340__i;}
  args = new cljs.core.IndexedSeq(G__8340__a,0);
} 
return G__8339__delegate.call(this,args);};
G__8339.cljs$lang$maxFixedArity = 0;
G__8339.cljs$lang$applyTo = (function (arglist__8341){
var args = cljs.core.seq(arglist__8341);
return G__8339__delegate(args);
});
G__8339.cljs$core$IFn$_invoke$arity$variadic = G__8339__delegate;
return G__8339;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8342__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8343__i = 0, G__8343__a = new Array(arguments.length -  0);
while (G__8343__i < G__8343__a.length) {G__8343__a[G__8343__i] = arguments[G__8343__i + 0]; ++G__8343__i;}
  args = new cljs.core.IndexedSeq(G__8343__a,0);
} 
return G__8342__delegate.call(this,args);};
G__8342.cljs$lang$maxFixedArity = 0;
G__8342.cljs$lang$applyTo = (function (arglist__8344){
var args = cljs.core.seq(arglist__8344);
return G__8342__delegate(args);
});
G__8342.cljs$core$IFn$_invoke$arity$variadic = G__8342__delegate;
return G__8342;
})()
;

return null;
});

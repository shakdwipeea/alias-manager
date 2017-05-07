goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8438__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8439__i = 0, G__8439__a = new Array(arguments.length -  0);
while (G__8439__i < G__8439__a.length) {G__8439__a[G__8439__i] = arguments[G__8439__i + 0]; ++G__8439__i;}
  args = new cljs.core.IndexedSeq(G__8439__a,0);
} 
return G__8438__delegate.call(this,args);};
G__8438.cljs$lang$maxFixedArity = 0;
G__8438.cljs$lang$applyTo = (function (arglist__8440){
var args = cljs.core.seq(arglist__8440);
return G__8438__delegate(args);
});
G__8438.cljs$core$IFn$_invoke$arity$variadic = G__8438__delegate;
return G__8438;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8441__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8442__i = 0, G__8442__a = new Array(arguments.length -  0);
while (G__8442__i < G__8442__a.length) {G__8442__a[G__8442__i] = arguments[G__8442__i + 0]; ++G__8442__i;}
  args = new cljs.core.IndexedSeq(G__8442__a,0);
} 
return G__8441__delegate.call(this,args);};
G__8441.cljs$lang$maxFixedArity = 0;
G__8441.cljs$lang$applyTo = (function (arglist__8443){
var args = cljs.core.seq(arglist__8443);
return G__8441__delegate(args);
});
G__8441.cljs$core$IFn$_invoke$arity$variadic = G__8441__delegate;
return G__8441;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8657__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8658__i = 0, G__8658__a = new Array(arguments.length -  0);
while (G__8658__i < G__8658__a.length) {G__8658__a[G__8658__i] = arguments[G__8658__i + 0]; ++G__8658__i;}
  args = new cljs.core.IndexedSeq(G__8658__a,0);
} 
return G__8657__delegate.call(this,args);};
G__8657.cljs$lang$maxFixedArity = 0;
G__8657.cljs$lang$applyTo = (function (arglist__8659){
var args = cljs.core.seq(arglist__8659);
return G__8657__delegate(args);
});
G__8657.cljs$core$IFn$_invoke$arity$variadic = G__8657__delegate;
return G__8657;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8660__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8661__i = 0, G__8661__a = new Array(arguments.length -  0);
while (G__8661__i < G__8661__a.length) {G__8661__a[G__8661__i] = arguments[G__8661__i + 0]; ++G__8661__i;}
  args = new cljs.core.IndexedSeq(G__8661__a,0);
} 
return G__8660__delegate.call(this,args);};
G__8660.cljs$lang$maxFixedArity = 0;
G__8660.cljs$lang$applyTo = (function (arglist__8662){
var args = cljs.core.seq(arglist__8662);
return G__8660__delegate(args);
});
G__8660.cljs$core$IFn$_invoke$arity$variadic = G__8660__delegate;
return G__8660;
})()
;

return null;
});

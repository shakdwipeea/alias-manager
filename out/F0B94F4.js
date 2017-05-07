goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10100__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10101__i = 0, G__10101__a = new Array(arguments.length -  0);
while (G__10101__i < G__10101__a.length) {G__10101__a[G__10101__i] = arguments[G__10101__i + 0]; ++G__10101__i;}
  args = new cljs.core.IndexedSeq(G__10101__a,0);
} 
return G__10100__delegate.call(this,args);};
G__10100.cljs$lang$maxFixedArity = 0;
G__10100.cljs$lang$applyTo = (function (arglist__10102){
var args = cljs.core.seq(arglist__10102);
return G__10100__delegate(args);
});
G__10100.cljs$core$IFn$_invoke$arity$variadic = G__10100__delegate;
return G__10100;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10103__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10104__i = 0, G__10104__a = new Array(arguments.length -  0);
while (G__10104__i < G__10104__a.length) {G__10104__a[G__10104__i] = arguments[G__10104__i + 0]; ++G__10104__i;}
  args = new cljs.core.IndexedSeq(G__10104__a,0);
} 
return G__10103__delegate.call(this,args);};
G__10103.cljs$lang$maxFixedArity = 0;
G__10103.cljs$lang$applyTo = (function (arglist__10105){
var args = cljs.core.seq(arglist__10105);
return G__10103__delegate(args);
});
G__10103.cljs$core$IFn$_invoke$arity$variadic = G__10103__delegate;
return G__10103;
})()
;

return null;
});

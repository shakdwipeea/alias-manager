goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9097__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9098__i = 0, G__9098__a = new Array(arguments.length -  0);
while (G__9098__i < G__9098__a.length) {G__9098__a[G__9098__i] = arguments[G__9098__i + 0]; ++G__9098__i;}
  args = new cljs.core.IndexedSeq(G__9098__a,0);
} 
return G__9097__delegate.call(this,args);};
G__9097.cljs$lang$maxFixedArity = 0;
G__9097.cljs$lang$applyTo = (function (arglist__9099){
var args = cljs.core.seq(arglist__9099);
return G__9097__delegate(args);
});
G__9097.cljs$core$IFn$_invoke$arity$variadic = G__9097__delegate;
return G__9097;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9100__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9101__i = 0, G__9101__a = new Array(arguments.length -  0);
while (G__9101__i < G__9101__a.length) {G__9101__a[G__9101__i] = arguments[G__9101__i + 0]; ++G__9101__i;}
  args = new cljs.core.IndexedSeq(G__9101__a,0);
} 
return G__9100__delegate.call(this,args);};
G__9100.cljs$lang$maxFixedArity = 0;
G__9100.cljs$lang$applyTo = (function (arglist__9102){
var args = cljs.core.seq(arglist__9102);
return G__9100__delegate(args);
});
G__9100.cljs$core$IFn$_invoke$arity$variadic = G__9100__delegate;
return G__9100;
})()
;

return null;
});

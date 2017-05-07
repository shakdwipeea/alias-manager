goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9015__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9016__i = 0, G__9016__a = new Array(arguments.length -  0);
while (G__9016__i < G__9016__a.length) {G__9016__a[G__9016__i] = arguments[G__9016__i + 0]; ++G__9016__i;}
  args = new cljs.core.IndexedSeq(G__9016__a,0);
} 
return G__9015__delegate.call(this,args);};
G__9015.cljs$lang$maxFixedArity = 0;
G__9015.cljs$lang$applyTo = (function (arglist__9017){
var args = cljs.core.seq(arglist__9017);
return G__9015__delegate(args);
});
G__9015.cljs$core$IFn$_invoke$arity$variadic = G__9015__delegate;
return G__9015;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9018__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9019__i = 0, G__9019__a = new Array(arguments.length -  0);
while (G__9019__i < G__9019__a.length) {G__9019__a[G__9019__i] = arguments[G__9019__i + 0]; ++G__9019__i;}
  args = new cljs.core.IndexedSeq(G__9019__a,0);
} 
return G__9018__delegate.call(this,args);};
G__9018.cljs$lang$maxFixedArity = 0;
G__9018.cljs$lang$applyTo = (function (arglist__9020){
var args = cljs.core.seq(arglist__9020);
return G__9018__delegate(args);
});
G__9018.cljs$core$IFn$_invoke$arity$variadic = G__9018__delegate;
return G__9018;
})()
;

return null;
});

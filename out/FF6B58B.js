goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10459__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10460__i = 0, G__10460__a = new Array(arguments.length -  0);
while (G__10460__i < G__10460__a.length) {G__10460__a[G__10460__i] = arguments[G__10460__i + 0]; ++G__10460__i;}
  args = new cljs.core.IndexedSeq(G__10460__a,0);
} 
return G__10459__delegate.call(this,args);};
G__10459.cljs$lang$maxFixedArity = 0;
G__10459.cljs$lang$applyTo = (function (arglist__10461){
var args = cljs.core.seq(arglist__10461);
return G__10459__delegate(args);
});
G__10459.cljs$core$IFn$_invoke$arity$variadic = G__10459__delegate;
return G__10459;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10462__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10463__i = 0, G__10463__a = new Array(arguments.length -  0);
while (G__10463__i < G__10463__a.length) {G__10463__a[G__10463__i] = arguments[G__10463__i + 0]; ++G__10463__i;}
  args = new cljs.core.IndexedSeq(G__10463__a,0);
} 
return G__10462__delegate.call(this,args);};
G__10462.cljs$lang$maxFixedArity = 0;
G__10462.cljs$lang$applyTo = (function (arglist__10464){
var args = cljs.core.seq(arglist__10464);
return G__10462__delegate(args);
});
G__10462.cljs$core$IFn$_invoke$arity$variadic = G__10462__delegate;
return G__10462;
})()
;

return null;
});

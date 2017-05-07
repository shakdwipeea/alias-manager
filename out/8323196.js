goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8363__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8364__i = 0, G__8364__a = new Array(arguments.length -  0);
while (G__8364__i < G__8364__a.length) {G__8364__a[G__8364__i] = arguments[G__8364__i + 0]; ++G__8364__i;}
  args = new cljs.core.IndexedSeq(G__8364__a,0);
} 
return G__8363__delegate.call(this,args);};
G__8363.cljs$lang$maxFixedArity = 0;
G__8363.cljs$lang$applyTo = (function (arglist__8365){
var args = cljs.core.seq(arglist__8365);
return G__8363__delegate(args);
});
G__8363.cljs$core$IFn$_invoke$arity$variadic = G__8363__delegate;
return G__8363;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8366__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8367__i = 0, G__8367__a = new Array(arguments.length -  0);
while (G__8367__i < G__8367__a.length) {G__8367__a[G__8367__i] = arguments[G__8367__i + 0]; ++G__8367__i;}
  args = new cljs.core.IndexedSeq(G__8367__a,0);
} 
return G__8366__delegate.call(this,args);};
G__8366.cljs$lang$maxFixedArity = 0;
G__8366.cljs$lang$applyTo = (function (arglist__8368){
var args = cljs.core.seq(arglist__8368);
return G__8366__delegate(args);
});
G__8366.cljs$core$IFn$_invoke$arity$variadic = G__8366__delegate;
return G__8366;
})()
;

return null;
});

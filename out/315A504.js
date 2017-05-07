goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10114__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10115__i = 0, G__10115__a = new Array(arguments.length -  0);
while (G__10115__i < G__10115__a.length) {G__10115__a[G__10115__i] = arguments[G__10115__i + 0]; ++G__10115__i;}
  args = new cljs.core.IndexedSeq(G__10115__a,0);
} 
return G__10114__delegate.call(this,args);};
G__10114.cljs$lang$maxFixedArity = 0;
G__10114.cljs$lang$applyTo = (function (arglist__10116){
var args = cljs.core.seq(arglist__10116);
return G__10114__delegate(args);
});
G__10114.cljs$core$IFn$_invoke$arity$variadic = G__10114__delegate;
return G__10114;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10117__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10118__i = 0, G__10118__a = new Array(arguments.length -  0);
while (G__10118__i < G__10118__a.length) {G__10118__a[G__10118__i] = arguments[G__10118__i + 0]; ++G__10118__i;}
  args = new cljs.core.IndexedSeq(G__10118__a,0);
} 
return G__10117__delegate.call(this,args);};
G__10117.cljs$lang$maxFixedArity = 0;
G__10117.cljs$lang$applyTo = (function (arglist__10119){
var args = cljs.core.seq(arglist__10119);
return G__10117__delegate(args);
});
G__10117.cljs$core$IFn$_invoke$arity$variadic = G__10117__delegate;
return G__10117;
})()
;

return null;
});

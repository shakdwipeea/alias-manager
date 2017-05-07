goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13110__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13111__i = 0, G__13111__a = new Array(arguments.length -  0);
while (G__13111__i < G__13111__a.length) {G__13111__a[G__13111__i] = arguments[G__13111__i + 0]; ++G__13111__i;}
  args = new cljs.core.IndexedSeq(G__13111__a,0);
} 
return G__13110__delegate.call(this,args);};
G__13110.cljs$lang$maxFixedArity = 0;
G__13110.cljs$lang$applyTo = (function (arglist__13112){
var args = cljs.core.seq(arglist__13112);
return G__13110__delegate(args);
});
G__13110.cljs$core$IFn$_invoke$arity$variadic = G__13110__delegate;
return G__13110;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13113__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13114__i = 0, G__13114__a = new Array(arguments.length -  0);
while (G__13114__i < G__13114__a.length) {G__13114__a[G__13114__i] = arguments[G__13114__i + 0]; ++G__13114__i;}
  args = new cljs.core.IndexedSeq(G__13114__a,0);
} 
return G__13113__delegate.call(this,args);};
G__13113.cljs$lang$maxFixedArity = 0;
G__13113.cljs$lang$applyTo = (function (arglist__13115){
var args = cljs.core.seq(arglist__13115);
return G__13113__delegate(args);
});
G__13113.cljs$core$IFn$_invoke$arity$variadic = G__13113__delegate;
return G__13113;
})()
;

return null;
});

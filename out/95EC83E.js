goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10196__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10197__i = 0, G__10197__a = new Array(arguments.length -  0);
while (G__10197__i < G__10197__a.length) {G__10197__a[G__10197__i] = arguments[G__10197__i + 0]; ++G__10197__i;}
  args = new cljs.core.IndexedSeq(G__10197__a,0);
} 
return G__10196__delegate.call(this,args);};
G__10196.cljs$lang$maxFixedArity = 0;
G__10196.cljs$lang$applyTo = (function (arglist__10198){
var args = cljs.core.seq(arglist__10198);
return G__10196__delegate(args);
});
G__10196.cljs$core$IFn$_invoke$arity$variadic = G__10196__delegate;
return G__10196;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10199__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10200__i = 0, G__10200__a = new Array(arguments.length -  0);
while (G__10200__i < G__10200__a.length) {G__10200__a[G__10200__i] = arguments[G__10200__i + 0]; ++G__10200__i;}
  args = new cljs.core.IndexedSeq(G__10200__a,0);
} 
return G__10199__delegate.call(this,args);};
G__10199.cljs$lang$maxFixedArity = 0;
G__10199.cljs$lang$applyTo = (function (arglist__10201){
var args = cljs.core.seq(arglist__10201);
return G__10199__delegate(args);
});
G__10199.cljs$core$IFn$_invoke$arity$variadic = G__10199__delegate;
return G__10199;
})()
;

return null;
});

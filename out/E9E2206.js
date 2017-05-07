goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8307__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8308__i = 0, G__8308__a = new Array(arguments.length -  0);
while (G__8308__i < G__8308__a.length) {G__8308__a[G__8308__i] = arguments[G__8308__i + 0]; ++G__8308__i;}
  args = new cljs.core.IndexedSeq(G__8308__a,0);
} 
return G__8307__delegate.call(this,args);};
G__8307.cljs$lang$maxFixedArity = 0;
G__8307.cljs$lang$applyTo = (function (arglist__8309){
var args = cljs.core.seq(arglist__8309);
return G__8307__delegate(args);
});
G__8307.cljs$core$IFn$_invoke$arity$variadic = G__8307__delegate;
return G__8307;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8310__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8311__i = 0, G__8311__a = new Array(arguments.length -  0);
while (G__8311__i < G__8311__a.length) {G__8311__a[G__8311__i] = arguments[G__8311__i + 0]; ++G__8311__i;}
  args = new cljs.core.IndexedSeq(G__8311__a,0);
} 
return G__8310__delegate.call(this,args);};
G__8310.cljs$lang$maxFixedArity = 0;
G__8310.cljs$lang$applyTo = (function (arglist__8312){
var args = cljs.core.seq(arglist__8312);
return G__8310__delegate(args);
});
G__8310.cljs$core$IFn$_invoke$arity$variadic = G__8310__delegate;
return G__8310;
})()
;

return null;
});

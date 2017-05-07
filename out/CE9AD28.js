goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8097__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8098__i = 0, G__8098__a = new Array(arguments.length -  0);
while (G__8098__i < G__8098__a.length) {G__8098__a[G__8098__i] = arguments[G__8098__i + 0]; ++G__8098__i;}
  args = new cljs.core.IndexedSeq(G__8098__a,0);
} 
return G__8097__delegate.call(this,args);};
G__8097.cljs$lang$maxFixedArity = 0;
G__8097.cljs$lang$applyTo = (function (arglist__8099){
var args = cljs.core.seq(arglist__8099);
return G__8097__delegate(args);
});
G__8097.cljs$core$IFn$_invoke$arity$variadic = G__8097__delegate;
return G__8097;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8100__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8101__i = 0, G__8101__a = new Array(arguments.length -  0);
while (G__8101__i < G__8101__a.length) {G__8101__a[G__8101__i] = arguments[G__8101__i + 0]; ++G__8101__i;}
  args = new cljs.core.IndexedSeq(G__8101__a,0);
} 
return G__8100__delegate.call(this,args);};
G__8100.cljs$lang$maxFixedArity = 0;
G__8100.cljs$lang$applyTo = (function (arglist__8102){
var args = cljs.core.seq(arglist__8102);
return G__8100__delegate(args);
});
G__8100.cljs$core$IFn$_invoke$arity$variadic = G__8100__delegate;
return G__8100;
})()
;

return null;
});

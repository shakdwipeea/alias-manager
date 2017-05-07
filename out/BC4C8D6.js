goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8828__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8829__i = 0, G__8829__a = new Array(arguments.length -  0);
while (G__8829__i < G__8829__a.length) {G__8829__a[G__8829__i] = arguments[G__8829__i + 0]; ++G__8829__i;}
  args = new cljs.core.IndexedSeq(G__8829__a,0);
} 
return G__8828__delegate.call(this,args);};
G__8828.cljs$lang$maxFixedArity = 0;
G__8828.cljs$lang$applyTo = (function (arglist__8830){
var args = cljs.core.seq(arglist__8830);
return G__8828__delegate(args);
});
G__8828.cljs$core$IFn$_invoke$arity$variadic = G__8828__delegate;
return G__8828;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8831__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8832__i = 0, G__8832__a = new Array(arguments.length -  0);
while (G__8832__i < G__8832__a.length) {G__8832__a[G__8832__i] = arguments[G__8832__i + 0]; ++G__8832__i;}
  args = new cljs.core.IndexedSeq(G__8832__a,0);
} 
return G__8831__delegate.call(this,args);};
G__8831.cljs$lang$maxFixedArity = 0;
G__8831.cljs$lang$applyTo = (function (arglist__8833){
var args = cljs.core.seq(arglist__8833);
return G__8831__delegate(args);
});
G__8831.cljs$core$IFn$_invoke$arity$variadic = G__8831__delegate;
return G__8831;
})()
;

return null;
});

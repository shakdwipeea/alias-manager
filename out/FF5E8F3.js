goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8524__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8525__i = 0, G__8525__a = new Array(arguments.length -  0);
while (G__8525__i < G__8525__a.length) {G__8525__a[G__8525__i] = arguments[G__8525__i + 0]; ++G__8525__i;}
  args = new cljs.core.IndexedSeq(G__8525__a,0);
} 
return G__8524__delegate.call(this,args);};
G__8524.cljs$lang$maxFixedArity = 0;
G__8524.cljs$lang$applyTo = (function (arglist__8526){
var args = cljs.core.seq(arglist__8526);
return G__8524__delegate(args);
});
G__8524.cljs$core$IFn$_invoke$arity$variadic = G__8524__delegate;
return G__8524;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8527__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8528__i = 0, G__8528__a = new Array(arguments.length -  0);
while (G__8528__i < G__8528__a.length) {G__8528__a[G__8528__i] = arguments[G__8528__i + 0]; ++G__8528__i;}
  args = new cljs.core.IndexedSeq(G__8528__a,0);
} 
return G__8527__delegate.call(this,args);};
G__8527.cljs$lang$maxFixedArity = 0;
G__8527.cljs$lang$applyTo = (function (arglist__8529){
var args = cljs.core.seq(arglist__8529);
return G__8527__delegate(args);
});
G__8527.cljs$core$IFn$_invoke$arity$variadic = G__8527__delegate;
return G__8527;
})()
;

return null;
});

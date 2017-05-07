goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7670__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7671__i = 0, G__7671__a = new Array(arguments.length -  0);
while (G__7671__i < G__7671__a.length) {G__7671__a[G__7671__i] = arguments[G__7671__i + 0]; ++G__7671__i;}
  args = new cljs.core.IndexedSeq(G__7671__a,0);
} 
return G__7670__delegate.call(this,args);};
G__7670.cljs$lang$maxFixedArity = 0;
G__7670.cljs$lang$applyTo = (function (arglist__7672){
var args = cljs.core.seq(arglist__7672);
return G__7670__delegate(args);
});
G__7670.cljs$core$IFn$_invoke$arity$variadic = G__7670__delegate;
return G__7670;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7673__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7674__i = 0, G__7674__a = new Array(arguments.length -  0);
while (G__7674__i < G__7674__a.length) {G__7674__a[G__7674__i] = arguments[G__7674__i + 0]; ++G__7674__i;}
  args = new cljs.core.IndexedSeq(G__7674__a,0);
} 
return G__7673__delegate.call(this,args);};
G__7673.cljs$lang$maxFixedArity = 0;
G__7673.cljs$lang$applyTo = (function (arglist__7675){
var args = cljs.core.seq(arglist__7675);
return G__7673__delegate(args);
});
G__7673.cljs$core$IFn$_invoke$arity$variadic = G__7673__delegate;
return G__7673;
})()
;

return null;
});

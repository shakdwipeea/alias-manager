goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9396__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9397__i = 0, G__9397__a = new Array(arguments.length -  0);
while (G__9397__i < G__9397__a.length) {G__9397__a[G__9397__i] = arguments[G__9397__i + 0]; ++G__9397__i;}
  args = new cljs.core.IndexedSeq(G__9397__a,0);
} 
return G__9396__delegate.call(this,args);};
G__9396.cljs$lang$maxFixedArity = 0;
G__9396.cljs$lang$applyTo = (function (arglist__9398){
var args = cljs.core.seq(arglist__9398);
return G__9396__delegate(args);
});
G__9396.cljs$core$IFn$_invoke$arity$variadic = G__9396__delegate;
return G__9396;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9399__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9400__i = 0, G__9400__a = new Array(arguments.length -  0);
while (G__9400__i < G__9400__a.length) {G__9400__a[G__9400__i] = arguments[G__9400__i + 0]; ++G__9400__i;}
  args = new cljs.core.IndexedSeq(G__9400__a,0);
} 
return G__9399__delegate.call(this,args);};
G__9399.cljs$lang$maxFixedArity = 0;
G__9399.cljs$lang$applyTo = (function (arglist__9401){
var args = cljs.core.seq(arglist__9401);
return G__9399__delegate(args);
});
G__9399.cljs$core$IFn$_invoke$arity$variadic = G__9399__delegate;
return G__9399;
})()
;

return null;
});

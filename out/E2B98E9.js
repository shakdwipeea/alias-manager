goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11501__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11502__i = 0, G__11502__a = new Array(arguments.length -  0);
while (G__11502__i < G__11502__a.length) {G__11502__a[G__11502__i] = arguments[G__11502__i + 0]; ++G__11502__i;}
  args = new cljs.core.IndexedSeq(G__11502__a,0);
} 
return G__11501__delegate.call(this,args);};
G__11501.cljs$lang$maxFixedArity = 0;
G__11501.cljs$lang$applyTo = (function (arglist__11503){
var args = cljs.core.seq(arglist__11503);
return G__11501__delegate(args);
});
G__11501.cljs$core$IFn$_invoke$arity$variadic = G__11501__delegate;
return G__11501;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11504__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11505__i = 0, G__11505__a = new Array(arguments.length -  0);
while (G__11505__i < G__11505__a.length) {G__11505__a[G__11505__i] = arguments[G__11505__i + 0]; ++G__11505__i;}
  args = new cljs.core.IndexedSeq(G__11505__a,0);
} 
return G__11504__delegate.call(this,args);};
G__11504.cljs$lang$maxFixedArity = 0;
G__11504.cljs$lang$applyTo = (function (arglist__11506){
var args = cljs.core.seq(arglist__11506);
return G__11504__delegate(args);
});
G__11504.cljs$core$IFn$_invoke$arity$variadic = G__11504__delegate;
return G__11504;
})()
;

return null;
});

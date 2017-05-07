goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11161__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11162__i = 0, G__11162__a = new Array(arguments.length -  0);
while (G__11162__i < G__11162__a.length) {G__11162__a[G__11162__i] = arguments[G__11162__i + 0]; ++G__11162__i;}
  args = new cljs.core.IndexedSeq(G__11162__a,0);
} 
return G__11161__delegate.call(this,args);};
G__11161.cljs$lang$maxFixedArity = 0;
G__11161.cljs$lang$applyTo = (function (arglist__11163){
var args = cljs.core.seq(arglist__11163);
return G__11161__delegate(args);
});
G__11161.cljs$core$IFn$_invoke$arity$variadic = G__11161__delegate;
return G__11161;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11164__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11165__i = 0, G__11165__a = new Array(arguments.length -  0);
while (G__11165__i < G__11165__a.length) {G__11165__a[G__11165__i] = arguments[G__11165__i + 0]; ++G__11165__i;}
  args = new cljs.core.IndexedSeq(G__11165__a,0);
} 
return G__11164__delegate.call(this,args);};
G__11164.cljs$lang$maxFixedArity = 0;
G__11164.cljs$lang$applyTo = (function (arglist__11166){
var args = cljs.core.seq(arglist__11166);
return G__11164__delegate(args);
});
G__11164.cljs$core$IFn$_invoke$arity$variadic = G__11164__delegate;
return G__11164;
})()
;

return null;
});

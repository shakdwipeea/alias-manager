goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10524__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10525__i = 0, G__10525__a = new Array(arguments.length -  0);
while (G__10525__i < G__10525__a.length) {G__10525__a[G__10525__i] = arguments[G__10525__i + 0]; ++G__10525__i;}
  args = new cljs.core.IndexedSeq(G__10525__a,0);
} 
return G__10524__delegate.call(this,args);};
G__10524.cljs$lang$maxFixedArity = 0;
G__10524.cljs$lang$applyTo = (function (arglist__10526){
var args = cljs.core.seq(arglist__10526);
return G__10524__delegate(args);
});
G__10524.cljs$core$IFn$_invoke$arity$variadic = G__10524__delegate;
return G__10524;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10527__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10528__i = 0, G__10528__a = new Array(arguments.length -  0);
while (G__10528__i < G__10528__a.length) {G__10528__a[G__10528__i] = arguments[G__10528__i + 0]; ++G__10528__i;}
  args = new cljs.core.IndexedSeq(G__10528__a,0);
} 
return G__10527__delegate.call(this,args);};
G__10527.cljs$lang$maxFixedArity = 0;
G__10527.cljs$lang$applyTo = (function (arglist__10529){
var args = cljs.core.seq(arglist__10529);
return G__10527__delegate(args);
});
G__10527.cljs$core$IFn$_invoke$arity$variadic = G__10527__delegate;
return G__10527;
})()
;

return null;
});

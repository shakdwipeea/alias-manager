goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12593__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12594__i = 0, G__12594__a = new Array(arguments.length -  0);
while (G__12594__i < G__12594__a.length) {G__12594__a[G__12594__i] = arguments[G__12594__i + 0]; ++G__12594__i;}
  args = new cljs.core.IndexedSeq(G__12594__a,0);
} 
return G__12593__delegate.call(this,args);};
G__12593.cljs$lang$maxFixedArity = 0;
G__12593.cljs$lang$applyTo = (function (arglist__12595){
var args = cljs.core.seq(arglist__12595);
return G__12593__delegate(args);
});
G__12593.cljs$core$IFn$_invoke$arity$variadic = G__12593__delegate;
return G__12593;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12596__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12597__i = 0, G__12597__a = new Array(arguments.length -  0);
while (G__12597__i < G__12597__a.length) {G__12597__a[G__12597__i] = arguments[G__12597__i + 0]; ++G__12597__i;}
  args = new cljs.core.IndexedSeq(G__12597__a,0);
} 
return G__12596__delegate.call(this,args);};
G__12596.cljs$lang$maxFixedArity = 0;
G__12596.cljs$lang$applyTo = (function (arglist__12598){
var args = cljs.core.seq(arglist__12598);
return G__12596__delegate(args);
});
G__12596.cljs$core$IFn$_invoke$arity$variadic = G__12596__delegate;
return G__12596;
})()
;

return null;
});

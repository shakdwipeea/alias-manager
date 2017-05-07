goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10473__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10474__i = 0, G__10474__a = new Array(arguments.length -  0);
while (G__10474__i < G__10474__a.length) {G__10474__a[G__10474__i] = arguments[G__10474__i + 0]; ++G__10474__i;}
  args = new cljs.core.IndexedSeq(G__10474__a,0);
} 
return G__10473__delegate.call(this,args);};
G__10473.cljs$lang$maxFixedArity = 0;
G__10473.cljs$lang$applyTo = (function (arglist__10475){
var args = cljs.core.seq(arglist__10475);
return G__10473__delegate(args);
});
G__10473.cljs$core$IFn$_invoke$arity$variadic = G__10473__delegate;
return G__10473;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10476__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10477__i = 0, G__10477__a = new Array(arguments.length -  0);
while (G__10477__i < G__10477__a.length) {G__10477__a[G__10477__i] = arguments[G__10477__i + 0]; ++G__10477__i;}
  args = new cljs.core.IndexedSeq(G__10477__a,0);
} 
return G__10476__delegate.call(this,args);};
G__10476.cljs$lang$maxFixedArity = 0;
G__10476.cljs$lang$applyTo = (function (arglist__10478){
var args = cljs.core.seq(arglist__10478);
return G__10476__delegate(args);
});
G__10476.cljs$core$IFn$_invoke$arity$variadic = G__10476__delegate;
return G__10476;
})()
;

return null;
});

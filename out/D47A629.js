goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11222__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11223__i = 0, G__11223__a = new Array(arguments.length -  0);
while (G__11223__i < G__11223__a.length) {G__11223__a[G__11223__i] = arguments[G__11223__i + 0]; ++G__11223__i;}
  args = new cljs.core.IndexedSeq(G__11223__a,0);
} 
return G__11222__delegate.call(this,args);};
G__11222.cljs$lang$maxFixedArity = 0;
G__11222.cljs$lang$applyTo = (function (arglist__11224){
var args = cljs.core.seq(arglist__11224);
return G__11222__delegate(args);
});
G__11222.cljs$core$IFn$_invoke$arity$variadic = G__11222__delegate;
return G__11222;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11225__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11226__i = 0, G__11226__a = new Array(arguments.length -  0);
while (G__11226__i < G__11226__a.length) {G__11226__a[G__11226__i] = arguments[G__11226__i + 0]; ++G__11226__i;}
  args = new cljs.core.IndexedSeq(G__11226__a,0);
} 
return G__11225__delegate.call(this,args);};
G__11225.cljs$lang$maxFixedArity = 0;
G__11225.cljs$lang$applyTo = (function (arglist__11227){
var args = cljs.core.seq(arglist__11227);
return G__11225__delegate(args);
});
G__11225.cljs$core$IFn$_invoke$arity$variadic = G__11225__delegate;
return G__11225;
})()
;

return null;
});

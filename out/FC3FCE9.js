goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8052__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8053__i = 0, G__8053__a = new Array(arguments.length -  0);
while (G__8053__i < G__8053__a.length) {G__8053__a[G__8053__i] = arguments[G__8053__i + 0]; ++G__8053__i;}
  args = new cljs.core.IndexedSeq(G__8053__a,0);
} 
return G__8052__delegate.call(this,args);};
G__8052.cljs$lang$maxFixedArity = 0;
G__8052.cljs$lang$applyTo = (function (arglist__8054){
var args = cljs.core.seq(arglist__8054);
return G__8052__delegate(args);
});
G__8052.cljs$core$IFn$_invoke$arity$variadic = G__8052__delegate;
return G__8052;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8055__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8056__i = 0, G__8056__a = new Array(arguments.length -  0);
while (G__8056__i < G__8056__a.length) {G__8056__a[G__8056__i] = arguments[G__8056__i + 0]; ++G__8056__i;}
  args = new cljs.core.IndexedSeq(G__8056__a,0);
} 
return G__8055__delegate.call(this,args);};
G__8055.cljs$lang$maxFixedArity = 0;
G__8055.cljs$lang$applyTo = (function (arglist__8057){
var args = cljs.core.seq(arglist__8057);
return G__8055__delegate(args);
});
G__8055.cljs$core$IFn$_invoke$arity$variadic = G__8055__delegate;
return G__8055;
})()
;

return null;
});

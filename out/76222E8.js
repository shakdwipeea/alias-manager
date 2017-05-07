goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11795__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11796__i = 0, G__11796__a = new Array(arguments.length -  0);
while (G__11796__i < G__11796__a.length) {G__11796__a[G__11796__i] = arguments[G__11796__i + 0]; ++G__11796__i;}
  args = new cljs.core.IndexedSeq(G__11796__a,0);
} 
return G__11795__delegate.call(this,args);};
G__11795.cljs$lang$maxFixedArity = 0;
G__11795.cljs$lang$applyTo = (function (arglist__11797){
var args = cljs.core.seq(arglist__11797);
return G__11795__delegate(args);
});
G__11795.cljs$core$IFn$_invoke$arity$variadic = G__11795__delegate;
return G__11795;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11798__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11799__i = 0, G__11799__a = new Array(arguments.length -  0);
while (G__11799__i < G__11799__a.length) {G__11799__a[G__11799__i] = arguments[G__11799__i + 0]; ++G__11799__i;}
  args = new cljs.core.IndexedSeq(G__11799__a,0);
} 
return G__11798__delegate.call(this,args);};
G__11798.cljs$lang$maxFixedArity = 0;
G__11798.cljs$lang$applyTo = (function (arglist__11800){
var args = cljs.core.seq(arglist__11800);
return G__11798__delegate(args);
});
G__11798.cljs$core$IFn$_invoke$arity$variadic = G__11798__delegate;
return G__11798;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11101__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11102__i = 0, G__11102__a = new Array(arguments.length -  0);
while (G__11102__i < G__11102__a.length) {G__11102__a[G__11102__i] = arguments[G__11102__i + 0]; ++G__11102__i;}
  args = new cljs.core.IndexedSeq(G__11102__a,0);
} 
return G__11101__delegate.call(this,args);};
G__11101.cljs$lang$maxFixedArity = 0;
G__11101.cljs$lang$applyTo = (function (arglist__11103){
var args = cljs.core.seq(arglist__11103);
return G__11101__delegate(args);
});
G__11101.cljs$core$IFn$_invoke$arity$variadic = G__11101__delegate;
return G__11101;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11104__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11105__i = 0, G__11105__a = new Array(arguments.length -  0);
while (G__11105__i < G__11105__a.length) {G__11105__a[G__11105__i] = arguments[G__11105__i + 0]; ++G__11105__i;}
  args = new cljs.core.IndexedSeq(G__11105__a,0);
} 
return G__11104__delegate.call(this,args);};
G__11104.cljs$lang$maxFixedArity = 0;
G__11104.cljs$lang$applyTo = (function (arglist__11106){
var args = cljs.core.seq(arglist__11106);
return G__11104__delegate(args);
});
G__11104.cljs$core$IFn$_invoke$arity$variadic = G__11104__delegate;
return G__11104;
})()
;

return null;
});

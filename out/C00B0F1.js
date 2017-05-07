goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12729__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12730__i = 0, G__12730__a = new Array(arguments.length -  0);
while (G__12730__i < G__12730__a.length) {G__12730__a[G__12730__i] = arguments[G__12730__i + 0]; ++G__12730__i;}
  args = new cljs.core.IndexedSeq(G__12730__a,0);
} 
return G__12729__delegate.call(this,args);};
G__12729.cljs$lang$maxFixedArity = 0;
G__12729.cljs$lang$applyTo = (function (arglist__12731){
var args = cljs.core.seq(arglist__12731);
return G__12729__delegate(args);
});
G__12729.cljs$core$IFn$_invoke$arity$variadic = G__12729__delegate;
return G__12729;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12732__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12733__i = 0, G__12733__a = new Array(arguments.length -  0);
while (G__12733__i < G__12733__a.length) {G__12733__a[G__12733__i] = arguments[G__12733__i + 0]; ++G__12733__i;}
  args = new cljs.core.IndexedSeq(G__12733__a,0);
} 
return G__12732__delegate.call(this,args);};
G__12732.cljs$lang$maxFixedArity = 0;
G__12732.cljs$lang$applyTo = (function (arglist__12734){
var args = cljs.core.seq(arglist__12734);
return G__12732__delegate(args);
});
G__12732.cljs$core$IFn$_invoke$arity$variadic = G__12732__delegate;
return G__12732;
})()
;

return null;
});

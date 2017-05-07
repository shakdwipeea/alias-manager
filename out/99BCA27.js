goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11576__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11577__i = 0, G__11577__a = new Array(arguments.length -  0);
while (G__11577__i < G__11577__a.length) {G__11577__a[G__11577__i] = arguments[G__11577__i + 0]; ++G__11577__i;}
  args = new cljs.core.IndexedSeq(G__11577__a,0);
} 
return G__11576__delegate.call(this,args);};
G__11576.cljs$lang$maxFixedArity = 0;
G__11576.cljs$lang$applyTo = (function (arglist__11578){
var args = cljs.core.seq(arglist__11578);
return G__11576__delegate(args);
});
G__11576.cljs$core$IFn$_invoke$arity$variadic = G__11576__delegate;
return G__11576;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11579__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11580__i = 0, G__11580__a = new Array(arguments.length -  0);
while (G__11580__i < G__11580__a.length) {G__11580__a[G__11580__i] = arguments[G__11580__i + 0]; ++G__11580__i;}
  args = new cljs.core.IndexedSeq(G__11580__a,0);
} 
return G__11579__delegate.call(this,args);};
G__11579.cljs$lang$maxFixedArity = 0;
G__11579.cljs$lang$applyTo = (function (arglist__11581){
var args = cljs.core.seq(arglist__11581);
return G__11579__delegate(args);
});
G__11579.cljs$core$IFn$_invoke$arity$variadic = G__11579__delegate;
return G__11579;
})()
;

return null;
});

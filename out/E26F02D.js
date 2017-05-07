goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8951__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8952__i = 0, G__8952__a = new Array(arguments.length -  0);
while (G__8952__i < G__8952__a.length) {G__8952__a[G__8952__i] = arguments[G__8952__i + 0]; ++G__8952__i;}
  args = new cljs.core.IndexedSeq(G__8952__a,0);
} 
return G__8951__delegate.call(this,args);};
G__8951.cljs$lang$maxFixedArity = 0;
G__8951.cljs$lang$applyTo = (function (arglist__8953){
var args = cljs.core.seq(arglist__8953);
return G__8951__delegate(args);
});
G__8951.cljs$core$IFn$_invoke$arity$variadic = G__8951__delegate;
return G__8951;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8954__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8955__i = 0, G__8955__a = new Array(arguments.length -  0);
while (G__8955__i < G__8955__a.length) {G__8955__a[G__8955__i] = arguments[G__8955__i + 0]; ++G__8955__i;}
  args = new cljs.core.IndexedSeq(G__8955__a,0);
} 
return G__8954__delegate.call(this,args);};
G__8954.cljs$lang$maxFixedArity = 0;
G__8954.cljs$lang$applyTo = (function (arglist__8956){
var args = cljs.core.seq(arglist__8956);
return G__8954__delegate(args);
});
G__8954.cljs$core$IFn$_invoke$arity$variadic = G__8954__delegate;
return G__8954;
})()
;

return null;
});

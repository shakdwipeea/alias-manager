goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9924__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9925__i = 0, G__9925__a = new Array(arguments.length -  0);
while (G__9925__i < G__9925__a.length) {G__9925__a[G__9925__i] = arguments[G__9925__i + 0]; ++G__9925__i;}
  args = new cljs.core.IndexedSeq(G__9925__a,0);
} 
return G__9924__delegate.call(this,args);};
G__9924.cljs$lang$maxFixedArity = 0;
G__9924.cljs$lang$applyTo = (function (arglist__9926){
var args = cljs.core.seq(arglist__9926);
return G__9924__delegate(args);
});
G__9924.cljs$core$IFn$_invoke$arity$variadic = G__9924__delegate;
return G__9924;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9927__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9928__i = 0, G__9928__a = new Array(arguments.length -  0);
while (G__9928__i < G__9928__a.length) {G__9928__a[G__9928__i] = arguments[G__9928__i + 0]; ++G__9928__i;}
  args = new cljs.core.IndexedSeq(G__9928__a,0);
} 
return G__9927__delegate.call(this,args);};
G__9927.cljs$lang$maxFixedArity = 0;
G__9927.cljs$lang$applyTo = (function (arglist__9929){
var args = cljs.core.seq(arglist__9929);
return G__9927__delegate(args);
});
G__9927.cljs$core$IFn$_invoke$arity$variadic = G__9927__delegate;
return G__9927;
})()
;

return null;
});

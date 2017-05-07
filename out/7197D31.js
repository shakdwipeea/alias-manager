goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9360__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9361__i = 0, G__9361__a = new Array(arguments.length -  0);
while (G__9361__i < G__9361__a.length) {G__9361__a[G__9361__i] = arguments[G__9361__i + 0]; ++G__9361__i;}
  args = new cljs.core.IndexedSeq(G__9361__a,0);
} 
return G__9360__delegate.call(this,args);};
G__9360.cljs$lang$maxFixedArity = 0;
G__9360.cljs$lang$applyTo = (function (arglist__9362){
var args = cljs.core.seq(arglist__9362);
return G__9360__delegate(args);
});
G__9360.cljs$core$IFn$_invoke$arity$variadic = G__9360__delegate;
return G__9360;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9363__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9364__i = 0, G__9364__a = new Array(arguments.length -  0);
while (G__9364__i < G__9364__a.length) {G__9364__a[G__9364__i] = arguments[G__9364__i + 0]; ++G__9364__i;}
  args = new cljs.core.IndexedSeq(G__9364__a,0);
} 
return G__9363__delegate.call(this,args);};
G__9363.cljs$lang$maxFixedArity = 0;
G__9363.cljs$lang$applyTo = (function (arglist__9365){
var args = cljs.core.seq(arglist__9365);
return G__9363__delegate(args);
});
G__9363.cljs$core$IFn$_invoke$arity$variadic = G__9363__delegate;
return G__9363;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8535__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8536__i = 0, G__8536__a = new Array(arguments.length -  0);
while (G__8536__i < G__8536__a.length) {G__8536__a[G__8536__i] = arguments[G__8536__i + 0]; ++G__8536__i;}
  args = new cljs.core.IndexedSeq(G__8536__a,0);
} 
return G__8535__delegate.call(this,args);};
G__8535.cljs$lang$maxFixedArity = 0;
G__8535.cljs$lang$applyTo = (function (arglist__8537){
var args = cljs.core.seq(arglist__8537);
return G__8535__delegate(args);
});
G__8535.cljs$core$IFn$_invoke$arity$variadic = G__8535__delegate;
return G__8535;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8538__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8539__i = 0, G__8539__a = new Array(arguments.length -  0);
while (G__8539__i < G__8539__a.length) {G__8539__a[G__8539__i] = arguments[G__8539__i + 0]; ++G__8539__i;}
  args = new cljs.core.IndexedSeq(G__8539__a,0);
} 
return G__8538__delegate.call(this,args);};
G__8538.cljs$lang$maxFixedArity = 0;
G__8538.cljs$lang$applyTo = (function (arglist__8540){
var args = cljs.core.seq(arglist__8540);
return G__8538__delegate(args);
});
G__8538.cljs$core$IFn$_invoke$arity$variadic = G__8538__delegate;
return G__8538;
})()
;

return null;
});

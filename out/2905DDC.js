goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13049__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13050__i = 0, G__13050__a = new Array(arguments.length -  0);
while (G__13050__i < G__13050__a.length) {G__13050__a[G__13050__i] = arguments[G__13050__i + 0]; ++G__13050__i;}
  args = new cljs.core.IndexedSeq(G__13050__a,0);
} 
return G__13049__delegate.call(this,args);};
G__13049.cljs$lang$maxFixedArity = 0;
G__13049.cljs$lang$applyTo = (function (arglist__13051){
var args = cljs.core.seq(arglist__13051);
return G__13049__delegate(args);
});
G__13049.cljs$core$IFn$_invoke$arity$variadic = G__13049__delegate;
return G__13049;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13052__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13053__i = 0, G__13053__a = new Array(arguments.length -  0);
while (G__13053__i < G__13053__a.length) {G__13053__a[G__13053__i] = arguments[G__13053__i + 0]; ++G__13053__i;}
  args = new cljs.core.IndexedSeq(G__13053__a,0);
} 
return G__13052__delegate.call(this,args);};
G__13052.cljs$lang$maxFixedArity = 0;
G__13052.cljs$lang$applyTo = (function (arglist__13054){
var args = cljs.core.seq(arglist__13054);
return G__13052__delegate(args);
});
G__13052.cljs$core$IFn$_invoke$arity$variadic = G__13052__delegate;
return G__13052;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9503__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9504__i = 0, G__9504__a = new Array(arguments.length -  0);
while (G__9504__i < G__9504__a.length) {G__9504__a[G__9504__i] = arguments[G__9504__i + 0]; ++G__9504__i;}
  args = new cljs.core.IndexedSeq(G__9504__a,0);
} 
return G__9503__delegate.call(this,args);};
G__9503.cljs$lang$maxFixedArity = 0;
G__9503.cljs$lang$applyTo = (function (arglist__9505){
var args = cljs.core.seq(arglist__9505);
return G__9503__delegate(args);
});
G__9503.cljs$core$IFn$_invoke$arity$variadic = G__9503__delegate;
return G__9503;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9506__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9507__i = 0, G__9507__a = new Array(arguments.length -  0);
while (G__9507__i < G__9507__a.length) {G__9507__a[G__9507__i] = arguments[G__9507__i + 0]; ++G__9507__i;}
  args = new cljs.core.IndexedSeq(G__9507__a,0);
} 
return G__9506__delegate.call(this,args);};
G__9506.cljs$lang$maxFixedArity = 0;
G__9506.cljs$lang$applyTo = (function (arglist__9508){
var args = cljs.core.seq(arglist__9508);
return G__9506__delegate(args);
});
G__9506.cljs$core$IFn$_invoke$arity$variadic = G__9506__delegate;
return G__9506;
})()
;

return null;
});

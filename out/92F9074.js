goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9445__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9446__i = 0, G__9446__a = new Array(arguments.length -  0);
while (G__9446__i < G__9446__a.length) {G__9446__a[G__9446__i] = arguments[G__9446__i + 0]; ++G__9446__i;}
  args = new cljs.core.IndexedSeq(G__9446__a,0);
} 
return G__9445__delegate.call(this,args);};
G__9445.cljs$lang$maxFixedArity = 0;
G__9445.cljs$lang$applyTo = (function (arglist__9447){
var args = cljs.core.seq(arglist__9447);
return G__9445__delegate(args);
});
G__9445.cljs$core$IFn$_invoke$arity$variadic = G__9445__delegate;
return G__9445;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9448__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9449__i = 0, G__9449__a = new Array(arguments.length -  0);
while (G__9449__i < G__9449__a.length) {G__9449__a[G__9449__i] = arguments[G__9449__i + 0]; ++G__9449__i;}
  args = new cljs.core.IndexedSeq(G__9449__a,0);
} 
return G__9448__delegate.call(this,args);};
G__9448.cljs$lang$maxFixedArity = 0;
G__9448.cljs$lang$applyTo = (function (arglist__9450){
var args = cljs.core.seq(arglist__9450);
return G__9448__delegate(args);
});
G__9448.cljs$core$IFn$_invoke$arity$variadic = G__9448__delegate;
return G__9448;
})()
;

return null;
});

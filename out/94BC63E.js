goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9456__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9457__i = 0, G__9457__a = new Array(arguments.length -  0);
while (G__9457__i < G__9457__a.length) {G__9457__a[G__9457__i] = arguments[G__9457__i + 0]; ++G__9457__i;}
  args = new cljs.core.IndexedSeq(G__9457__a,0);
} 
return G__9456__delegate.call(this,args);};
G__9456.cljs$lang$maxFixedArity = 0;
G__9456.cljs$lang$applyTo = (function (arglist__9458){
var args = cljs.core.seq(arglist__9458);
return G__9456__delegate(args);
});
G__9456.cljs$core$IFn$_invoke$arity$variadic = G__9456__delegate;
return G__9456;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9459__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9460__i = 0, G__9460__a = new Array(arguments.length -  0);
while (G__9460__i < G__9460__a.length) {G__9460__a[G__9460__i] = arguments[G__9460__i + 0]; ++G__9460__i;}
  args = new cljs.core.IndexedSeq(G__9460__a,0);
} 
return G__9459__delegate.call(this,args);};
G__9459.cljs$lang$maxFixedArity = 0;
G__9459.cljs$lang$applyTo = (function (arglist__9461){
var args = cljs.core.seq(arglist__9461);
return G__9459__delegate(args);
});
G__9459.cljs$core$IFn$_invoke$arity$variadic = G__9459__delegate;
return G__9459;
})()
;

return null;
});

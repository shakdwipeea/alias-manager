goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12790__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12791__i = 0, G__12791__a = new Array(arguments.length -  0);
while (G__12791__i < G__12791__a.length) {G__12791__a[G__12791__i] = arguments[G__12791__i + 0]; ++G__12791__i;}
  args = new cljs.core.IndexedSeq(G__12791__a,0);
} 
return G__12790__delegate.call(this,args);};
G__12790.cljs$lang$maxFixedArity = 0;
G__12790.cljs$lang$applyTo = (function (arglist__12792){
var args = cljs.core.seq(arglist__12792);
return G__12790__delegate(args);
});
G__12790.cljs$core$IFn$_invoke$arity$variadic = G__12790__delegate;
return G__12790;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12793__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12794__i = 0, G__12794__a = new Array(arguments.length -  0);
while (G__12794__i < G__12794__a.length) {G__12794__a[G__12794__i] = arguments[G__12794__i + 0]; ++G__12794__i;}
  args = new cljs.core.IndexedSeq(G__12794__a,0);
} 
return G__12793__delegate.call(this,args);};
G__12793.cljs$lang$maxFixedArity = 0;
G__12793.cljs$lang$applyTo = (function (arglist__12795){
var args = cljs.core.seq(arglist__12795);
return G__12793__delegate(args);
});
G__12793.cljs$core$IFn$_invoke$arity$variadic = G__12793__delegate;
return G__12793;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12999__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13000__i = 0, G__13000__a = new Array(arguments.length -  0);
while (G__13000__i < G__13000__a.length) {G__13000__a[G__13000__i] = arguments[G__13000__i + 0]; ++G__13000__i;}
  args = new cljs.core.IndexedSeq(G__13000__a,0);
} 
return G__12999__delegate.call(this,args);};
G__12999.cljs$lang$maxFixedArity = 0;
G__12999.cljs$lang$applyTo = (function (arglist__13001){
var args = cljs.core.seq(arglist__13001);
return G__12999__delegate(args);
});
G__12999.cljs$core$IFn$_invoke$arity$variadic = G__12999__delegate;
return G__12999;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13002__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13003__i = 0, G__13003__a = new Array(arguments.length -  0);
while (G__13003__i < G__13003__a.length) {G__13003__a[G__13003__i] = arguments[G__13003__i + 0]; ++G__13003__i;}
  args = new cljs.core.IndexedSeq(G__13003__a,0);
} 
return G__13002__delegate.call(this,args);};
G__13002.cljs$lang$maxFixedArity = 0;
G__13002.cljs$lang$applyTo = (function (arglist__13004){
var args = cljs.core.seq(arglist__13004);
return G__13002__delegate(args);
});
G__13002.cljs$core$IFn$_invoke$arity$variadic = G__13002__delegate;
return G__13002;
})()
;

return null;
});

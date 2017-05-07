goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13099__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13100__i = 0, G__13100__a = new Array(arguments.length -  0);
while (G__13100__i < G__13100__a.length) {G__13100__a[G__13100__i] = arguments[G__13100__i + 0]; ++G__13100__i;}
  args = new cljs.core.IndexedSeq(G__13100__a,0);
} 
return G__13099__delegate.call(this,args);};
G__13099.cljs$lang$maxFixedArity = 0;
G__13099.cljs$lang$applyTo = (function (arglist__13101){
var args = cljs.core.seq(arglist__13101);
return G__13099__delegate(args);
});
G__13099.cljs$core$IFn$_invoke$arity$variadic = G__13099__delegate;
return G__13099;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13102__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13103__i = 0, G__13103__a = new Array(arguments.length -  0);
while (G__13103__i < G__13103__a.length) {G__13103__a[G__13103__i] = arguments[G__13103__i + 0]; ++G__13103__i;}
  args = new cljs.core.IndexedSeq(G__13103__a,0);
} 
return G__13102__delegate.call(this,args);};
G__13102.cljs$lang$maxFixedArity = 0;
G__13102.cljs$lang$applyTo = (function (arglist__13104){
var args = cljs.core.seq(arglist__13104);
return G__13102__delegate(args);
});
G__13102.cljs$core$IFn$_invoke$arity$variadic = G__13102__delegate;
return G__13102;
})()
;

return null;
});

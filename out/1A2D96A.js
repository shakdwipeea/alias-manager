goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8395__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8396__i = 0, G__8396__a = new Array(arguments.length -  0);
while (G__8396__i < G__8396__a.length) {G__8396__a[G__8396__i] = arguments[G__8396__i + 0]; ++G__8396__i;}
  args = new cljs.core.IndexedSeq(G__8396__a,0);
} 
return G__8395__delegate.call(this,args);};
G__8395.cljs$lang$maxFixedArity = 0;
G__8395.cljs$lang$applyTo = (function (arglist__8397){
var args = cljs.core.seq(arglist__8397);
return G__8395__delegate(args);
});
G__8395.cljs$core$IFn$_invoke$arity$variadic = G__8395__delegate;
return G__8395;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8398__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8399__i = 0, G__8399__a = new Array(arguments.length -  0);
while (G__8399__i < G__8399__a.length) {G__8399__a[G__8399__i] = arguments[G__8399__i + 0]; ++G__8399__i;}
  args = new cljs.core.IndexedSeq(G__8399__a,0);
} 
return G__8398__delegate.call(this,args);};
G__8398.cljs$lang$maxFixedArity = 0;
G__8398.cljs$lang$applyTo = (function (arglist__8400){
var args = cljs.core.seq(arglist__8400);
return G__8398__delegate(args);
});
G__8398.cljs$core$IFn$_invoke$arity$variadic = G__8398__delegate;
return G__8398;
})()
;

return null;
});

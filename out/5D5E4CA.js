goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8871__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8872__i = 0, G__8872__a = new Array(arguments.length -  0);
while (G__8872__i < G__8872__a.length) {G__8872__a[G__8872__i] = arguments[G__8872__i + 0]; ++G__8872__i;}
  args = new cljs.core.IndexedSeq(G__8872__a,0);
} 
return G__8871__delegate.call(this,args);};
G__8871.cljs$lang$maxFixedArity = 0;
G__8871.cljs$lang$applyTo = (function (arglist__8873){
var args = cljs.core.seq(arglist__8873);
return G__8871__delegate(args);
});
G__8871.cljs$core$IFn$_invoke$arity$variadic = G__8871__delegate;
return G__8871;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8874__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8875__i = 0, G__8875__a = new Array(arguments.length -  0);
while (G__8875__i < G__8875__a.length) {G__8875__a[G__8875__i] = arguments[G__8875__i + 0]; ++G__8875__i;}
  args = new cljs.core.IndexedSeq(G__8875__a,0);
} 
return G__8874__delegate.call(this,args);};
G__8874.cljs$lang$maxFixedArity = 0;
G__8874.cljs$lang$applyTo = (function (arglist__8876){
var args = cljs.core.seq(arglist__8876);
return G__8874__delegate(args);
});
G__8874.cljs$core$IFn$_invoke$arity$variadic = G__8874__delegate;
return G__8874;
})()
;

return null;
});

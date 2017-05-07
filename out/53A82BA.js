goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9680__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9681__i = 0, G__9681__a = new Array(arguments.length -  0);
while (G__9681__i < G__9681__a.length) {G__9681__a[G__9681__i] = arguments[G__9681__i + 0]; ++G__9681__i;}
  args = new cljs.core.IndexedSeq(G__9681__a,0);
} 
return G__9680__delegate.call(this,args);};
G__9680.cljs$lang$maxFixedArity = 0;
G__9680.cljs$lang$applyTo = (function (arglist__9682){
var args = cljs.core.seq(arglist__9682);
return G__9680__delegate(args);
});
G__9680.cljs$core$IFn$_invoke$arity$variadic = G__9680__delegate;
return G__9680;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9683__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9684__i = 0, G__9684__a = new Array(arguments.length -  0);
while (G__9684__i < G__9684__a.length) {G__9684__a[G__9684__i] = arguments[G__9684__i + 0]; ++G__9684__i;}
  args = new cljs.core.IndexedSeq(G__9684__a,0);
} 
return G__9683__delegate.call(this,args);};
G__9683.cljs$lang$maxFixedArity = 0;
G__9683.cljs$lang$applyTo = (function (arglist__9685){
var args = cljs.core.seq(arglist__9685);
return G__9683__delegate(args);
});
G__9683.cljs$core$IFn$_invoke$arity$variadic = G__9683__delegate;
return G__9683;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11624__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11625__i = 0, G__11625__a = new Array(arguments.length -  0);
while (G__11625__i < G__11625__a.length) {G__11625__a[G__11625__i] = arguments[G__11625__i + 0]; ++G__11625__i;}
  args = new cljs.core.IndexedSeq(G__11625__a,0);
} 
return G__11624__delegate.call(this,args);};
G__11624.cljs$lang$maxFixedArity = 0;
G__11624.cljs$lang$applyTo = (function (arglist__11626){
var args = cljs.core.seq(arglist__11626);
return G__11624__delegate(args);
});
G__11624.cljs$core$IFn$_invoke$arity$variadic = G__11624__delegate;
return G__11624;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11627__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11628__i = 0, G__11628__a = new Array(arguments.length -  0);
while (G__11628__i < G__11628__a.length) {G__11628__a[G__11628__i] = arguments[G__11628__i + 0]; ++G__11628__i;}
  args = new cljs.core.IndexedSeq(G__11628__a,0);
} 
return G__11627__delegate.call(this,args);};
G__11627.cljs$lang$maxFixedArity = 0;
G__11627.cljs$lang$applyTo = (function (arglist__11629){
var args = cljs.core.seq(arglist__11629);
return G__11627__delegate(args);
});
G__11627.cljs$core$IFn$_invoke$arity$variadic = G__11627__delegate;
return G__11627;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9629__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9630__i = 0, G__9630__a = new Array(arguments.length -  0);
while (G__9630__i < G__9630__a.length) {G__9630__a[G__9630__i] = arguments[G__9630__i + 0]; ++G__9630__i;}
  args = new cljs.core.IndexedSeq(G__9630__a,0);
} 
return G__9629__delegate.call(this,args);};
G__9629.cljs$lang$maxFixedArity = 0;
G__9629.cljs$lang$applyTo = (function (arglist__9631){
var args = cljs.core.seq(arglist__9631);
return G__9629__delegate(args);
});
G__9629.cljs$core$IFn$_invoke$arity$variadic = G__9629__delegate;
return G__9629;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9632__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9633__i = 0, G__9633__a = new Array(arguments.length -  0);
while (G__9633__i < G__9633__a.length) {G__9633__a[G__9633__i] = arguments[G__9633__i + 0]; ++G__9633__i;}
  args = new cljs.core.IndexedSeq(G__9633__a,0);
} 
return G__9632__delegate.call(this,args);};
G__9632.cljs$lang$maxFixedArity = 0;
G__9632.cljs$lang$applyTo = (function (arglist__9634){
var args = cljs.core.seq(arglist__9634);
return G__9632__delegate(args);
});
G__9632.cljs$core$IFn$_invoke$arity$variadic = G__9632__delegate;
return G__9632;
})()
;

return null;
});

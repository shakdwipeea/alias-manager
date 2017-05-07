goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9643__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9644__i = 0, G__9644__a = new Array(arguments.length -  0);
while (G__9644__i < G__9644__a.length) {G__9644__a[G__9644__i] = arguments[G__9644__i + 0]; ++G__9644__i;}
  args = new cljs.core.IndexedSeq(G__9644__a,0);
} 
return G__9643__delegate.call(this,args);};
G__9643.cljs$lang$maxFixedArity = 0;
G__9643.cljs$lang$applyTo = (function (arglist__9645){
var args = cljs.core.seq(arglist__9645);
return G__9643__delegate(args);
});
G__9643.cljs$core$IFn$_invoke$arity$variadic = G__9643__delegate;
return G__9643;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9646__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9647__i = 0, G__9647__a = new Array(arguments.length -  0);
while (G__9647__i < G__9647__a.length) {G__9647__a[G__9647__i] = arguments[G__9647__i + 0]; ++G__9647__i;}
  args = new cljs.core.IndexedSeq(G__9647__a,0);
} 
return G__9646__delegate.call(this,args);};
G__9646.cljs$lang$maxFixedArity = 0;
G__9646.cljs$lang$applyTo = (function (arglist__9648){
var args = cljs.core.seq(arglist__9648);
return G__9646__delegate(args);
});
G__9646.cljs$core$IFn$_invoke$arity$variadic = G__9646__delegate;
return G__9646;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13395__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13396__i = 0, G__13396__a = new Array(arguments.length -  0);
while (G__13396__i < G__13396__a.length) {G__13396__a[G__13396__i] = arguments[G__13396__i + 0]; ++G__13396__i;}
  args = new cljs.core.IndexedSeq(G__13396__a,0);
} 
return G__13395__delegate.call(this,args);};
G__13395.cljs$lang$maxFixedArity = 0;
G__13395.cljs$lang$applyTo = (function (arglist__13397){
var args = cljs.core.seq(arglist__13397);
return G__13395__delegate(args);
});
G__13395.cljs$core$IFn$_invoke$arity$variadic = G__13395__delegate;
return G__13395;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13398__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13399__i = 0, G__13399__a = new Array(arguments.length -  0);
while (G__13399__i < G__13399__a.length) {G__13399__a[G__13399__i] = arguments[G__13399__i + 0]; ++G__13399__i;}
  args = new cljs.core.IndexedSeq(G__13399__a,0);
} 
return G__13398__delegate.call(this,args);};
G__13398.cljs$lang$maxFixedArity = 0;
G__13398.cljs$lang$applyTo = (function (arglist__13400){
var args = cljs.core.seq(arglist__13400);
return G__13398__delegate(args);
});
G__13398.cljs$core$IFn$_invoke$arity$variadic = G__13398__delegate;
return G__13398;
})()
;

return null;
});

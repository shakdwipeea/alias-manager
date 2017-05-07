goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11473__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11474__i = 0, G__11474__a = new Array(arguments.length -  0);
while (G__11474__i < G__11474__a.length) {G__11474__a[G__11474__i] = arguments[G__11474__i + 0]; ++G__11474__i;}
  args = new cljs.core.IndexedSeq(G__11474__a,0);
} 
return G__11473__delegate.call(this,args);};
G__11473.cljs$lang$maxFixedArity = 0;
G__11473.cljs$lang$applyTo = (function (arglist__11475){
var args = cljs.core.seq(arglist__11475);
return G__11473__delegate(args);
});
G__11473.cljs$core$IFn$_invoke$arity$variadic = G__11473__delegate;
return G__11473;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11476__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11477__i = 0, G__11477__a = new Array(arguments.length -  0);
while (G__11477__i < G__11477__a.length) {G__11477__a[G__11477__i] = arguments[G__11477__i + 0]; ++G__11477__i;}
  args = new cljs.core.IndexedSeq(G__11477__a,0);
} 
return G__11476__delegate.call(this,args);};
G__11476.cljs$lang$maxFixedArity = 0;
G__11476.cljs$lang$applyTo = (function (arglist__11478){
var args = cljs.core.seq(arglist__11478);
return G__11476__delegate(args);
});
G__11476.cljs$core$IFn$_invoke$arity$variadic = G__11476__delegate;
return G__11476;
})()
;

return null;
});

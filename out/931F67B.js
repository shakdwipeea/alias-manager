goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12237__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12238__i = 0, G__12238__a = new Array(arguments.length -  0);
while (G__12238__i < G__12238__a.length) {G__12238__a[G__12238__i] = arguments[G__12238__i + 0]; ++G__12238__i;}
  args = new cljs.core.IndexedSeq(G__12238__a,0);
} 
return G__12237__delegate.call(this,args);};
G__12237.cljs$lang$maxFixedArity = 0;
G__12237.cljs$lang$applyTo = (function (arglist__12239){
var args = cljs.core.seq(arglist__12239);
return G__12237__delegate(args);
});
G__12237.cljs$core$IFn$_invoke$arity$variadic = G__12237__delegate;
return G__12237;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12240__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12240 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12241__i = 0, G__12241__a = new Array(arguments.length -  0);
while (G__12241__i < G__12241__a.length) {G__12241__a[G__12241__i] = arguments[G__12241__i + 0]; ++G__12241__i;}
  args = new cljs.core.IndexedSeq(G__12241__a,0);
} 
return G__12240__delegate.call(this,args);};
G__12240.cljs$lang$maxFixedArity = 0;
G__12240.cljs$lang$applyTo = (function (arglist__12242){
var args = cljs.core.seq(arglist__12242);
return G__12240__delegate(args);
});
G__12240.cljs$core$IFn$_invoke$arity$variadic = G__12240__delegate;
return G__12240;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12366__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12367__i = 0, G__12367__a = new Array(arguments.length -  0);
while (G__12367__i < G__12367__a.length) {G__12367__a[G__12367__i] = arguments[G__12367__i + 0]; ++G__12367__i;}
  args = new cljs.core.IndexedSeq(G__12367__a,0);
} 
return G__12366__delegate.call(this,args);};
G__12366.cljs$lang$maxFixedArity = 0;
G__12366.cljs$lang$applyTo = (function (arglist__12368){
var args = cljs.core.seq(arglist__12368);
return G__12366__delegate(args);
});
G__12366.cljs$core$IFn$_invoke$arity$variadic = G__12366__delegate;
return G__12366;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12369__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12370__i = 0, G__12370__a = new Array(arguments.length -  0);
while (G__12370__i < G__12370__a.length) {G__12370__a[G__12370__i] = arguments[G__12370__i + 0]; ++G__12370__i;}
  args = new cljs.core.IndexedSeq(G__12370__a,0);
} 
return G__12369__delegate.call(this,args);};
G__12369.cljs$lang$maxFixedArity = 0;
G__12369.cljs$lang$applyTo = (function (arglist__12371){
var args = cljs.core.seq(arglist__12371);
return G__12369__delegate(args);
});
G__12369.cljs$core$IFn$_invoke$arity$variadic = G__12369__delegate;
return G__12369;
})()
;

return null;
});

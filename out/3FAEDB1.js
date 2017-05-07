goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10292__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10293__i = 0, G__10293__a = new Array(arguments.length -  0);
while (G__10293__i < G__10293__a.length) {G__10293__a[G__10293__i] = arguments[G__10293__i + 0]; ++G__10293__i;}
  args = new cljs.core.IndexedSeq(G__10293__a,0);
} 
return G__10292__delegate.call(this,args);};
G__10292.cljs$lang$maxFixedArity = 0;
G__10292.cljs$lang$applyTo = (function (arglist__10294){
var args = cljs.core.seq(arglist__10294);
return G__10292__delegate(args);
});
G__10292.cljs$core$IFn$_invoke$arity$variadic = G__10292__delegate;
return G__10292;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10295__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10296__i = 0, G__10296__a = new Array(arguments.length -  0);
while (G__10296__i < G__10296__a.length) {G__10296__a[G__10296__i] = arguments[G__10296__i + 0]; ++G__10296__i;}
  args = new cljs.core.IndexedSeq(G__10296__a,0);
} 
return G__10295__delegate.call(this,args);};
G__10295.cljs$lang$maxFixedArity = 0;
G__10295.cljs$lang$applyTo = (function (arglist__10297){
var args = cljs.core.seq(arglist__10297);
return G__10295__delegate(args);
});
G__10295.cljs$core$IFn$_invoke$arity$variadic = G__10295__delegate;
return G__10295;
})()
;

return null;
});

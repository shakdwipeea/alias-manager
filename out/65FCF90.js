goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8803__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8804__i = 0, G__8804__a = new Array(arguments.length -  0);
while (G__8804__i < G__8804__a.length) {G__8804__a[G__8804__i] = arguments[G__8804__i + 0]; ++G__8804__i;}
  args = new cljs.core.IndexedSeq(G__8804__a,0);
} 
return G__8803__delegate.call(this,args);};
G__8803.cljs$lang$maxFixedArity = 0;
G__8803.cljs$lang$applyTo = (function (arglist__8805){
var args = cljs.core.seq(arglist__8805);
return G__8803__delegate(args);
});
G__8803.cljs$core$IFn$_invoke$arity$variadic = G__8803__delegate;
return G__8803;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8806__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8807__i = 0, G__8807__a = new Array(arguments.length -  0);
while (G__8807__i < G__8807__a.length) {G__8807__a[G__8807__i] = arguments[G__8807__i + 0]; ++G__8807__i;}
  args = new cljs.core.IndexedSeq(G__8807__a,0);
} 
return G__8806__delegate.call(this,args);};
G__8806.cljs$lang$maxFixedArity = 0;
G__8806.cljs$lang$applyTo = (function (arglist__8808){
var args = cljs.core.seq(arglist__8808);
return G__8806__delegate(args);
});
G__8806.cljs$core$IFn$_invoke$arity$variadic = G__8806__delegate;
return G__8806;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10258__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10259__i = 0, G__10259__a = new Array(arguments.length -  0);
while (G__10259__i < G__10259__a.length) {G__10259__a[G__10259__i] = arguments[G__10259__i + 0]; ++G__10259__i;}
  args = new cljs.core.IndexedSeq(G__10259__a,0);
} 
return G__10258__delegate.call(this,args);};
G__10258.cljs$lang$maxFixedArity = 0;
G__10258.cljs$lang$applyTo = (function (arglist__10260){
var args = cljs.core.seq(arglist__10260);
return G__10258__delegate(args);
});
G__10258.cljs$core$IFn$_invoke$arity$variadic = G__10258__delegate;
return G__10258;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10261__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10262__i = 0, G__10262__a = new Array(arguments.length -  0);
while (G__10262__i < G__10262__a.length) {G__10262__a[G__10262__i] = arguments[G__10262__i + 0]; ++G__10262__i;}
  args = new cljs.core.IndexedSeq(G__10262__a,0);
} 
return G__10261__delegate.call(this,args);};
G__10261.cljs$lang$maxFixedArity = 0;
G__10261.cljs$lang$applyTo = (function (arglist__10263){
var args = cljs.core.seq(arglist__10263);
return G__10261__delegate(args);
});
G__10261.cljs$core$IFn$_invoke$arity$variadic = G__10261__delegate;
return G__10261;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13238__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13239__i = 0, G__13239__a = new Array(arguments.length -  0);
while (G__13239__i < G__13239__a.length) {G__13239__a[G__13239__i] = arguments[G__13239__i + 0]; ++G__13239__i;}
  args = new cljs.core.IndexedSeq(G__13239__a,0);
} 
return G__13238__delegate.call(this,args);};
G__13238.cljs$lang$maxFixedArity = 0;
G__13238.cljs$lang$applyTo = (function (arglist__13240){
var args = cljs.core.seq(arglist__13240);
return G__13238__delegate(args);
});
G__13238.cljs$core$IFn$_invoke$arity$variadic = G__13238__delegate;
return G__13238;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13241__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13242__i = 0, G__13242__a = new Array(arguments.length -  0);
while (G__13242__i < G__13242__a.length) {G__13242__a[G__13242__i] = arguments[G__13242__i + 0]; ++G__13242__i;}
  args = new cljs.core.IndexedSeq(G__13242__a,0);
} 
return G__13241__delegate.call(this,args);};
G__13241.cljs$lang$maxFixedArity = 0;
G__13241.cljs$lang$applyTo = (function (arglist__13243){
var args = cljs.core.seq(arglist__13243);
return G__13241__delegate(args);
});
G__13241.cljs$core$IFn$_invoke$arity$variadic = G__13241__delegate;
return G__13241;
})()
;

return null;
});

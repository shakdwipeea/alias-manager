goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9131__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9132__i = 0, G__9132__a = new Array(arguments.length -  0);
while (G__9132__i < G__9132__a.length) {G__9132__a[G__9132__i] = arguments[G__9132__i + 0]; ++G__9132__i;}
  args = new cljs.core.IndexedSeq(G__9132__a,0);
} 
return G__9131__delegate.call(this,args);};
G__9131.cljs$lang$maxFixedArity = 0;
G__9131.cljs$lang$applyTo = (function (arglist__9133){
var args = cljs.core.seq(arglist__9133);
return G__9131__delegate(args);
});
G__9131.cljs$core$IFn$_invoke$arity$variadic = G__9131__delegate;
return G__9131;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9134__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9135__i = 0, G__9135__a = new Array(arguments.length -  0);
while (G__9135__i < G__9135__a.length) {G__9135__a[G__9135__i] = arguments[G__9135__i + 0]; ++G__9135__i;}
  args = new cljs.core.IndexedSeq(G__9135__a,0);
} 
return G__9134__delegate.call(this,args);};
G__9134.cljs$lang$maxFixedArity = 0;
G__9134.cljs$lang$applyTo = (function (arglist__9136){
var args = cljs.core.seq(arglist__9136);
return G__9134__delegate(args);
});
G__9134.cljs$core$IFn$_invoke$arity$variadic = G__9134__delegate;
return G__9134;
})()
;

return null;
});

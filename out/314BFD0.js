goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12248__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12249__i = 0, G__12249__a = new Array(arguments.length -  0);
while (G__12249__i < G__12249__a.length) {G__12249__a[G__12249__i] = arguments[G__12249__i + 0]; ++G__12249__i;}
  args = new cljs.core.IndexedSeq(G__12249__a,0);
} 
return G__12248__delegate.call(this,args);};
G__12248.cljs$lang$maxFixedArity = 0;
G__12248.cljs$lang$applyTo = (function (arglist__12250){
var args = cljs.core.seq(arglist__12250);
return G__12248__delegate(args);
});
G__12248.cljs$core$IFn$_invoke$arity$variadic = G__12248__delegate;
return G__12248;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12251__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12252__i = 0, G__12252__a = new Array(arguments.length -  0);
while (G__12252__i < G__12252__a.length) {G__12252__a[G__12252__i] = arguments[G__12252__i + 0]; ++G__12252__i;}
  args = new cljs.core.IndexedSeq(G__12252__a,0);
} 
return G__12251__delegate.call(this,args);};
G__12251.cljs$lang$maxFixedArity = 0;
G__12251.cljs$lang$applyTo = (function (arglist__12253){
var args = cljs.core.seq(arglist__12253);
return G__12251__delegate(args);
});
G__12251.cljs$core$IFn$_invoke$arity$variadic = G__12251__delegate;
return G__12251;
})()
;

return null;
});

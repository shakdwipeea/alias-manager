goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10714__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10715__i = 0, G__10715__a = new Array(arguments.length -  0);
while (G__10715__i < G__10715__a.length) {G__10715__a[G__10715__i] = arguments[G__10715__i + 0]; ++G__10715__i;}
  args = new cljs.core.IndexedSeq(G__10715__a,0);
} 
return G__10714__delegate.call(this,args);};
G__10714.cljs$lang$maxFixedArity = 0;
G__10714.cljs$lang$applyTo = (function (arglist__10716){
var args = cljs.core.seq(arglist__10716);
return G__10714__delegate(args);
});
G__10714.cljs$core$IFn$_invoke$arity$variadic = G__10714__delegate;
return G__10714;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10717__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10718__i = 0, G__10718__a = new Array(arguments.length -  0);
while (G__10718__i < G__10718__a.length) {G__10718__a[G__10718__i] = arguments[G__10718__i + 0]; ++G__10718__i;}
  args = new cljs.core.IndexedSeq(G__10718__a,0);
} 
return G__10717__delegate.call(this,args);};
G__10717.cljs$lang$maxFixedArity = 0;
G__10717.cljs$lang$applyTo = (function (arglist__10719){
var args = cljs.core.seq(arglist__10719);
return G__10717__delegate(args);
});
G__10717.cljs$core$IFn$_invoke$arity$variadic = G__10717__delegate;
return G__10717;
})()
;

return null;
});

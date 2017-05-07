goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10063__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10064__i = 0, G__10064__a = new Array(arguments.length -  0);
while (G__10064__i < G__10064__a.length) {G__10064__a[G__10064__i] = arguments[G__10064__i + 0]; ++G__10064__i;}
  args = new cljs.core.IndexedSeq(G__10064__a,0);
} 
return G__10063__delegate.call(this,args);};
G__10063.cljs$lang$maxFixedArity = 0;
G__10063.cljs$lang$applyTo = (function (arglist__10065){
var args = cljs.core.seq(arglist__10065);
return G__10063__delegate(args);
});
G__10063.cljs$core$IFn$_invoke$arity$variadic = G__10063__delegate;
return G__10063;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10066__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10067__i = 0, G__10067__a = new Array(arguments.length -  0);
while (G__10067__i < G__10067__a.length) {G__10067__a[G__10067__i] = arguments[G__10067__i + 0]; ++G__10067__i;}
  args = new cljs.core.IndexedSeq(G__10067__a,0);
} 
return G__10066__delegate.call(this,args);};
G__10066.cljs$lang$maxFixedArity = 0;
G__10066.cljs$lang$applyTo = (function (arglist__10068){
var args = cljs.core.seq(arglist__10068);
return G__10066__delegate(args);
});
G__10066.cljs$core$IFn$_invoke$arity$variadic = G__10066__delegate;
return G__10066;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10920__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10921__i = 0, G__10921__a = new Array(arguments.length -  0);
while (G__10921__i < G__10921__a.length) {G__10921__a[G__10921__i] = arguments[G__10921__i + 0]; ++G__10921__i;}
  args = new cljs.core.IndexedSeq(G__10921__a,0);
} 
return G__10920__delegate.call(this,args);};
G__10920.cljs$lang$maxFixedArity = 0;
G__10920.cljs$lang$applyTo = (function (arglist__10922){
var args = cljs.core.seq(arglist__10922);
return G__10920__delegate(args);
});
G__10920.cljs$core$IFn$_invoke$arity$variadic = G__10920__delegate;
return G__10920;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10923__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10924__i = 0, G__10924__a = new Array(arguments.length -  0);
while (G__10924__i < G__10924__a.length) {G__10924__a[G__10924__i] = arguments[G__10924__i + 0]; ++G__10924__i;}
  args = new cljs.core.IndexedSeq(G__10924__a,0);
} 
return G__10923__delegate.call(this,args);};
G__10923.cljs$lang$maxFixedArity = 0;
G__10923.cljs$lang$applyTo = (function (arglist__10925){
var args = cljs.core.seq(arglist__10925);
return G__10923__delegate(args);
});
G__10923.cljs$core$IFn$_invoke$arity$variadic = G__10923__delegate;
return G__10923;
})()
;

return null;
});

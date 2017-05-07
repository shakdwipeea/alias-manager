goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10818__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10819__i = 0, G__10819__a = new Array(arguments.length -  0);
while (G__10819__i < G__10819__a.length) {G__10819__a[G__10819__i] = arguments[G__10819__i + 0]; ++G__10819__i;}
  args = new cljs.core.IndexedSeq(G__10819__a,0);
} 
return G__10818__delegate.call(this,args);};
G__10818.cljs$lang$maxFixedArity = 0;
G__10818.cljs$lang$applyTo = (function (arglist__10820){
var args = cljs.core.seq(arglist__10820);
return G__10818__delegate(args);
});
G__10818.cljs$core$IFn$_invoke$arity$variadic = G__10818__delegate;
return G__10818;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10821__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10822__i = 0, G__10822__a = new Array(arguments.length -  0);
while (G__10822__i < G__10822__a.length) {G__10822__a[G__10822__i] = arguments[G__10822__i + 0]; ++G__10822__i;}
  args = new cljs.core.IndexedSeq(G__10822__a,0);
} 
return G__10821__delegate.call(this,args);};
G__10821.cljs$lang$maxFixedArity = 0;
G__10821.cljs$lang$applyTo = (function (arglist__10823){
var args = cljs.core.seq(arglist__10823);
return G__10821__delegate(args);
});
G__10821.cljs$core$IFn$_invoke$arity$variadic = G__10821__delegate;
return G__10821;
})()
;

return null;
});

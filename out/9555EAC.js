goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10986__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10987__i = 0, G__10987__a = new Array(arguments.length -  0);
while (G__10987__i < G__10987__a.length) {G__10987__a[G__10987__i] = arguments[G__10987__i + 0]; ++G__10987__i;}
  args = new cljs.core.IndexedSeq(G__10987__a,0);
} 
return G__10986__delegate.call(this,args);};
G__10986.cljs$lang$maxFixedArity = 0;
G__10986.cljs$lang$applyTo = (function (arglist__10988){
var args = cljs.core.seq(arglist__10988);
return G__10986__delegate(args);
});
G__10986.cljs$core$IFn$_invoke$arity$variadic = G__10986__delegate;
return G__10986;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10989__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10990__i = 0, G__10990__a = new Array(arguments.length -  0);
while (G__10990__i < G__10990__a.length) {G__10990__a[G__10990__i] = arguments[G__10990__i + 0]; ++G__10990__i;}
  args = new cljs.core.IndexedSeq(G__10990__a,0);
} 
return G__10989__delegate.call(this,args);};
G__10989.cljs$lang$maxFixedArity = 0;
G__10989.cljs$lang$applyTo = (function (arglist__10991){
var args = cljs.core.seq(arglist__10991);
return G__10989__delegate(args);
});
G__10989.cljs$core$IFn$_invoke$arity$variadic = G__10989__delegate;
return G__10989;
})()
;

return null;
});

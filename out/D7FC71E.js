goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8084__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8085__i = 0, G__8085__a = new Array(arguments.length -  0);
while (G__8085__i < G__8085__a.length) {G__8085__a[G__8085__i] = arguments[G__8085__i + 0]; ++G__8085__i;}
  args = new cljs.core.IndexedSeq(G__8085__a,0);
} 
return G__8084__delegate.call(this,args);};
G__8084.cljs$lang$maxFixedArity = 0;
G__8084.cljs$lang$applyTo = (function (arglist__8086){
var args = cljs.core.seq(arglist__8086);
return G__8084__delegate(args);
});
G__8084.cljs$core$IFn$_invoke$arity$variadic = G__8084__delegate;
return G__8084;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8087__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8088__i = 0, G__8088__a = new Array(arguments.length -  0);
while (G__8088__i < G__8088__a.length) {G__8088__a[G__8088__i] = arguments[G__8088__i + 0]; ++G__8088__i;}
  args = new cljs.core.IndexedSeq(G__8088__a,0);
} 
return G__8087__delegate.call(this,args);};
G__8087.cljs$lang$maxFixedArity = 0;
G__8087.cljs$lang$applyTo = (function (arglist__8089){
var args = cljs.core.seq(arglist__8089);
return G__8087__delegate(args);
});
G__8087.cljs$core$IFn$_invoke$arity$variadic = G__8087__delegate;
return G__8087;
})()
;

return null;
});

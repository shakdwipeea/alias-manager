goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9217__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9218__i = 0, G__9218__a = new Array(arguments.length -  0);
while (G__9218__i < G__9218__a.length) {G__9218__a[G__9218__i] = arguments[G__9218__i + 0]; ++G__9218__i;}
  args = new cljs.core.IndexedSeq(G__9218__a,0);
} 
return G__9217__delegate.call(this,args);};
G__9217.cljs$lang$maxFixedArity = 0;
G__9217.cljs$lang$applyTo = (function (arglist__9219){
var args = cljs.core.seq(arglist__9219);
return G__9217__delegate(args);
});
G__9217.cljs$core$IFn$_invoke$arity$variadic = G__9217__delegate;
return G__9217;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9220__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9221__i = 0, G__9221__a = new Array(arguments.length -  0);
while (G__9221__i < G__9221__a.length) {G__9221__a[G__9221__i] = arguments[G__9221__i + 0]; ++G__9221__i;}
  args = new cljs.core.IndexedSeq(G__9221__a,0);
} 
return G__9220__delegate.call(this,args);};
G__9220.cljs$lang$maxFixedArity = 0;
G__9220.cljs$lang$applyTo = (function (arglist__9222){
var args = cljs.core.seq(arglist__9222);
return G__9220__delegate(args);
});
G__9220.cljs$core$IFn$_invoke$arity$variadic = G__9220__delegate;
return G__9220;
})()
;

return null;
});

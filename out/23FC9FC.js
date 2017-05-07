goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9039__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9040__i = 0, G__9040__a = new Array(arguments.length -  0);
while (G__9040__i < G__9040__a.length) {G__9040__a[G__9040__i] = arguments[G__9040__i + 0]; ++G__9040__i;}
  args = new cljs.core.IndexedSeq(G__9040__a,0);
} 
return G__9039__delegate.call(this,args);};
G__9039.cljs$lang$maxFixedArity = 0;
G__9039.cljs$lang$applyTo = (function (arglist__9041){
var args = cljs.core.seq(arglist__9041);
return G__9039__delegate(args);
});
G__9039.cljs$core$IFn$_invoke$arity$variadic = G__9039__delegate;
return G__9039;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9042__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9043__i = 0, G__9043__a = new Array(arguments.length -  0);
while (G__9043__i < G__9043__a.length) {G__9043__a[G__9043__i] = arguments[G__9043__i + 0]; ++G__9043__i;}
  args = new cljs.core.IndexedSeq(G__9043__a,0);
} 
return G__9042__delegate.call(this,args);};
G__9042.cljs$lang$maxFixedArity = 0;
G__9042.cljs$lang$applyTo = (function (arglist__9044){
var args = cljs.core.seq(arglist__9044);
return G__9042__delegate(args);
});
G__9042.cljs$core$IFn$_invoke$arity$variadic = G__9042__delegate;
return G__9042;
})()
;

return null;
});

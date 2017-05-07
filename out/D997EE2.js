goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9873__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9874__i = 0, G__9874__a = new Array(arguments.length -  0);
while (G__9874__i < G__9874__a.length) {G__9874__a[G__9874__i] = arguments[G__9874__i + 0]; ++G__9874__i;}
  args = new cljs.core.IndexedSeq(G__9874__a,0);
} 
return G__9873__delegate.call(this,args);};
G__9873.cljs$lang$maxFixedArity = 0;
G__9873.cljs$lang$applyTo = (function (arglist__9875){
var args = cljs.core.seq(arglist__9875);
return G__9873__delegate(args);
});
G__9873.cljs$core$IFn$_invoke$arity$variadic = G__9873__delegate;
return G__9873;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9876__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9877__i = 0, G__9877__a = new Array(arguments.length -  0);
while (G__9877__i < G__9877__a.length) {G__9877__a[G__9877__i] = arguments[G__9877__i + 0]; ++G__9877__i;}
  args = new cljs.core.IndexedSeq(G__9877__a,0);
} 
return G__9876__delegate.call(this,args);};
G__9876.cljs$lang$maxFixedArity = 0;
G__9876.cljs$lang$applyTo = (function (arglist__9878){
var args = cljs.core.seq(arglist__9878);
return G__9876__delegate(args);
});
G__9876.cljs$core$IFn$_invoke$arity$variadic = G__9876__delegate;
return G__9876;
})()
;

return null;
});

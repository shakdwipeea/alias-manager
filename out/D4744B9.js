goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11907__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11908__i = 0, G__11908__a = new Array(arguments.length -  0);
while (G__11908__i < G__11908__a.length) {G__11908__a[G__11908__i] = arguments[G__11908__i + 0]; ++G__11908__i;}
  args = new cljs.core.IndexedSeq(G__11908__a,0);
} 
return G__11907__delegate.call(this,args);};
G__11907.cljs$lang$maxFixedArity = 0;
G__11907.cljs$lang$applyTo = (function (arglist__11909){
var args = cljs.core.seq(arglist__11909);
return G__11907__delegate(args);
});
G__11907.cljs$core$IFn$_invoke$arity$variadic = G__11907__delegate;
return G__11907;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11910__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11911__i = 0, G__11911__a = new Array(arguments.length -  0);
while (G__11911__i < G__11911__a.length) {G__11911__a[G__11911__i] = arguments[G__11911__i + 0]; ++G__11911__i;}
  args = new cljs.core.IndexedSeq(G__11911__a,0);
} 
return G__11910__delegate.call(this,args);};
G__11910.cljs$lang$maxFixedArity = 0;
G__11910.cljs$lang$applyTo = (function (arglist__11912){
var args = cljs.core.seq(arglist__11912);
return G__11910__delegate(args);
});
G__11910.cljs$core$IFn$_invoke$arity$variadic = G__11910__delegate;
return G__11910;
})()
;

return null;
});

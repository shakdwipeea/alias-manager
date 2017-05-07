goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8860__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8861__i = 0, G__8861__a = new Array(arguments.length -  0);
while (G__8861__i < G__8861__a.length) {G__8861__a[G__8861__i] = arguments[G__8861__i + 0]; ++G__8861__i;}
  args = new cljs.core.IndexedSeq(G__8861__a,0);
} 
return G__8860__delegate.call(this,args);};
G__8860.cljs$lang$maxFixedArity = 0;
G__8860.cljs$lang$applyTo = (function (arglist__8862){
var args = cljs.core.seq(arglist__8862);
return G__8860__delegate(args);
});
G__8860.cljs$core$IFn$_invoke$arity$variadic = G__8860__delegate;
return G__8860;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8863__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8864__i = 0, G__8864__a = new Array(arguments.length -  0);
while (G__8864__i < G__8864__a.length) {G__8864__a[G__8864__i] = arguments[G__8864__i + 0]; ++G__8864__i;}
  args = new cljs.core.IndexedSeq(G__8864__a,0);
} 
return G__8863__delegate.call(this,args);};
G__8863.cljs$lang$maxFixedArity = 0;
G__8863.cljs$lang$applyTo = (function (arglist__8865){
var args = cljs.core.seq(arglist__8865);
return G__8863__delegate(args);
});
G__8863.cljs$core$IFn$_invoke$arity$variadic = G__8863__delegate;
return G__8863;
})()
;

return null;
});

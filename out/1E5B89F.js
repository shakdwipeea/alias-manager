goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11200__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11201__i = 0, G__11201__a = new Array(arguments.length -  0);
while (G__11201__i < G__11201__a.length) {G__11201__a[G__11201__i] = arguments[G__11201__i + 0]; ++G__11201__i;}
  args = new cljs.core.IndexedSeq(G__11201__a,0);
} 
return G__11200__delegate.call(this,args);};
G__11200.cljs$lang$maxFixedArity = 0;
G__11200.cljs$lang$applyTo = (function (arglist__11202){
var args = cljs.core.seq(arglist__11202);
return G__11200__delegate(args);
});
G__11200.cljs$core$IFn$_invoke$arity$variadic = G__11200__delegate;
return G__11200;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11203__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11204__i = 0, G__11204__a = new Array(arguments.length -  0);
while (G__11204__i < G__11204__a.length) {G__11204__a[G__11204__i] = arguments[G__11204__i + 0]; ++G__11204__i;}
  args = new cljs.core.IndexedSeq(G__11204__a,0);
} 
return G__11203__delegate.call(this,args);};
G__11203.cljs$lang$maxFixedArity = 0;
G__11203.cljs$lang$applyTo = (function (arglist__11205){
var args = cljs.core.seq(arglist__11205);
return G__11203__delegate(args);
});
G__11203.cljs$core$IFn$_invoke$arity$variadic = G__11203__delegate;
return G__11203;
})()
;

return null;
});

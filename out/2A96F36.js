goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9251__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9252__i = 0, G__9252__a = new Array(arguments.length -  0);
while (G__9252__i < G__9252__a.length) {G__9252__a[G__9252__i] = arguments[G__9252__i + 0]; ++G__9252__i;}
  args = new cljs.core.IndexedSeq(G__9252__a,0);
} 
return G__9251__delegate.call(this,args);};
G__9251.cljs$lang$maxFixedArity = 0;
G__9251.cljs$lang$applyTo = (function (arglist__9253){
var args = cljs.core.seq(arglist__9253);
return G__9251__delegate(args);
});
G__9251.cljs$core$IFn$_invoke$arity$variadic = G__9251__delegate;
return G__9251;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9254__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9255__i = 0, G__9255__a = new Array(arguments.length -  0);
while (G__9255__i < G__9255__a.length) {G__9255__a[G__9255__i] = arguments[G__9255__i + 0]; ++G__9255__i;}
  args = new cljs.core.IndexedSeq(G__9255__a,0);
} 
return G__9254__delegate.call(this,args);};
G__9254.cljs$lang$maxFixedArity = 0;
G__9254.cljs$lang$applyTo = (function (arglist__9256){
var args = cljs.core.seq(arglist__9256);
return G__9254__delegate(args);
});
G__9254.cljs$core$IFn$_invoke$arity$variadic = G__9254__delegate;
return G__9254;
})()
;

return null;
});

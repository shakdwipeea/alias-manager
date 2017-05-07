goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12858__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12859__i = 0, G__12859__a = new Array(arguments.length -  0);
while (G__12859__i < G__12859__a.length) {G__12859__a[G__12859__i] = arguments[G__12859__i + 0]; ++G__12859__i;}
  args = new cljs.core.IndexedSeq(G__12859__a,0);
} 
return G__12858__delegate.call(this,args);};
G__12858.cljs$lang$maxFixedArity = 0;
G__12858.cljs$lang$applyTo = (function (arglist__12860){
var args = cljs.core.seq(arglist__12860);
return G__12858__delegate(args);
});
G__12858.cljs$core$IFn$_invoke$arity$variadic = G__12858__delegate;
return G__12858;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12861__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12862__i = 0, G__12862__a = new Array(arguments.length -  0);
while (G__12862__i < G__12862__a.length) {G__12862__a[G__12862__i] = arguments[G__12862__i + 0]; ++G__12862__i;}
  args = new cljs.core.IndexedSeq(G__12862__a,0);
} 
return G__12861__delegate.call(this,args);};
G__12861.cljs$lang$maxFixedArity = 0;
G__12861.cljs$lang$applyTo = (function (arglist__12863){
var args = cljs.core.seq(arglist__12863);
return G__12861__delegate(args);
});
G__12861.cljs$core$IFn$_invoke$arity$variadic = G__12861__delegate;
return G__12861;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13374__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13375__i = 0, G__13375__a = new Array(arguments.length -  0);
while (G__13375__i < G__13375__a.length) {G__13375__a[G__13375__i] = arguments[G__13375__i + 0]; ++G__13375__i;}
  args = new cljs.core.IndexedSeq(G__13375__a,0);
} 
return G__13374__delegate.call(this,args);};
G__13374.cljs$lang$maxFixedArity = 0;
G__13374.cljs$lang$applyTo = (function (arglist__13376){
var args = cljs.core.seq(arglist__13376);
return G__13374__delegate(args);
});
G__13374.cljs$core$IFn$_invoke$arity$variadic = G__13374__delegate;
return G__13374;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13377__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13378__i = 0, G__13378__a = new Array(arguments.length -  0);
while (G__13378__i < G__13378__a.length) {G__13378__a[G__13378__i] = arguments[G__13378__i + 0]; ++G__13378__i;}
  args = new cljs.core.IndexedSeq(G__13378__a,0);
} 
return G__13377__delegate.call(this,args);};
G__13377.cljs$lang$maxFixedArity = 0;
G__13377.cljs$lang$applyTo = (function (arglist__13379){
var args = cljs.core.seq(arglist__13379);
return G__13377__delegate(args);
});
G__13377.cljs$core$IFn$_invoke$arity$variadic = G__13377__delegate;
return G__13377;
})()
;

return null;
});

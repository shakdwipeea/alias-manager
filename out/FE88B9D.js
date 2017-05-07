goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9961__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9962__i = 0, G__9962__a = new Array(arguments.length -  0);
while (G__9962__i < G__9962__a.length) {G__9962__a[G__9962__i] = arguments[G__9962__i + 0]; ++G__9962__i;}
  args = new cljs.core.IndexedSeq(G__9962__a,0);
} 
return G__9961__delegate.call(this,args);};
G__9961.cljs$lang$maxFixedArity = 0;
G__9961.cljs$lang$applyTo = (function (arglist__9963){
var args = cljs.core.seq(arglist__9963);
return G__9961__delegate(args);
});
G__9961.cljs$core$IFn$_invoke$arity$variadic = G__9961__delegate;
return G__9961;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9964__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9965__i = 0, G__9965__a = new Array(arguments.length -  0);
while (G__9965__i < G__9965__a.length) {G__9965__a[G__9965__i] = arguments[G__9965__i + 0]; ++G__9965__i;}
  args = new cljs.core.IndexedSeq(G__9965__a,0);
} 
return G__9964__delegate.call(this,args);};
G__9964.cljs$lang$maxFixedArity = 0;
G__9964.cljs$lang$applyTo = (function (arglist__9966){
var args = cljs.core.seq(arglist__9966);
return G__9964__delegate(args);
});
G__9964.cljs$core$IFn$_invoke$arity$variadic = G__9964__delegate;
return G__9964;
})()
;

return null;
});

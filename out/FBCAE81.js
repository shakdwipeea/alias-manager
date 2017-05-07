goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11652__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11653__i = 0, G__11653__a = new Array(arguments.length -  0);
while (G__11653__i < G__11653__a.length) {G__11653__a[G__11653__i] = arguments[G__11653__i + 0]; ++G__11653__i;}
  args = new cljs.core.IndexedSeq(G__11653__a,0);
} 
return G__11652__delegate.call(this,args);};
G__11652.cljs$lang$maxFixedArity = 0;
G__11652.cljs$lang$applyTo = (function (arglist__11654){
var args = cljs.core.seq(arglist__11654);
return G__11652__delegate(args);
});
G__11652.cljs$core$IFn$_invoke$arity$variadic = G__11652__delegate;
return G__11652;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11655__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11656__i = 0, G__11656__a = new Array(arguments.length -  0);
while (G__11656__i < G__11656__a.length) {G__11656__a[G__11656__i] = arguments[G__11656__i + 0]; ++G__11656__i;}
  args = new cljs.core.IndexedSeq(G__11656__a,0);
} 
return G__11655__delegate.call(this,args);};
G__11655.cljs$lang$maxFixedArity = 0;
G__11655.cljs$lang$applyTo = (function (arglist__11657){
var args = cljs.core.seq(arglist__11657);
return G__11655__delegate(args);
});
G__11655.cljs$core$IFn$_invoke$arity$variadic = G__11655__delegate;
return G__11655;
})()
;

return null;
});

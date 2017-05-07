goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10510__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10511__i = 0, G__10511__a = new Array(arguments.length -  0);
while (G__10511__i < G__10511__a.length) {G__10511__a[G__10511__i] = arguments[G__10511__i + 0]; ++G__10511__i;}
  args = new cljs.core.IndexedSeq(G__10511__a,0);
} 
return G__10510__delegate.call(this,args);};
G__10510.cljs$lang$maxFixedArity = 0;
G__10510.cljs$lang$applyTo = (function (arglist__10512){
var args = cljs.core.seq(arglist__10512);
return G__10510__delegate(args);
});
G__10510.cljs$core$IFn$_invoke$arity$variadic = G__10510__delegate;
return G__10510;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10513__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10514__i = 0, G__10514__a = new Array(arguments.length -  0);
while (G__10514__i < G__10514__a.length) {G__10514__a[G__10514__i] = arguments[G__10514__i + 0]; ++G__10514__i;}
  args = new cljs.core.IndexedSeq(G__10514__a,0);
} 
return G__10513__delegate.call(this,args);};
G__10513.cljs$lang$maxFixedArity = 0;
G__10513.cljs$lang$applyTo = (function (arglist__10515){
var args = cljs.core.seq(arglist__10515);
return G__10513__delegate(args);
});
G__10513.cljs$core$IFn$_invoke$arity$variadic = G__10513__delegate;
return G__10513;
})()
;

return null;
});

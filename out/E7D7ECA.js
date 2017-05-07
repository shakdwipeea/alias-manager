goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10408__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10408 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10409__i = 0, G__10409__a = new Array(arguments.length -  0);
while (G__10409__i < G__10409__a.length) {G__10409__a[G__10409__i] = arguments[G__10409__i + 0]; ++G__10409__i;}
  args = new cljs.core.IndexedSeq(G__10409__a,0);
} 
return G__10408__delegate.call(this,args);};
G__10408.cljs$lang$maxFixedArity = 0;
G__10408.cljs$lang$applyTo = (function (arglist__10410){
var args = cljs.core.seq(arglist__10410);
return G__10408__delegate(args);
});
G__10408.cljs$core$IFn$_invoke$arity$variadic = G__10408__delegate;
return G__10408;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10411__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10412__i = 0, G__10412__a = new Array(arguments.length -  0);
while (G__10412__i < G__10412__a.length) {G__10412__a[G__10412__i] = arguments[G__10412__i + 0]; ++G__10412__i;}
  args = new cljs.core.IndexedSeq(G__10412__a,0);
} 
return G__10411__delegate.call(this,args);};
G__10411.cljs$lang$maxFixedArity = 0;
G__10411.cljs$lang$applyTo = (function (arglist__10413){
var args = cljs.core.seq(arglist__10413);
return G__10411__delegate(args);
});
G__10411.cljs$core$IFn$_invoke$arity$variadic = G__10411__delegate;
return G__10411;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9326__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9327__i = 0, G__9327__a = new Array(arguments.length -  0);
while (G__9327__i < G__9327__a.length) {G__9327__a[G__9327__i] = arguments[G__9327__i + 0]; ++G__9327__i;}
  args = new cljs.core.IndexedSeq(G__9327__a,0);
} 
return G__9326__delegate.call(this,args);};
G__9326.cljs$lang$maxFixedArity = 0;
G__9326.cljs$lang$applyTo = (function (arglist__9328){
var args = cljs.core.seq(arglist__9328);
return G__9326__delegate(args);
});
G__9326.cljs$core$IFn$_invoke$arity$variadic = G__9326__delegate;
return G__9326;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9329__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9330__i = 0, G__9330__a = new Array(arguments.length -  0);
while (G__9330__i < G__9330__a.length) {G__9330__a[G__9330__i] = arguments[G__9330__i + 0]; ++G__9330__i;}
  args = new cljs.core.IndexedSeq(G__9330__a,0);
} 
return G__9329__delegate.call(this,args);};
G__9329.cljs$lang$maxFixedArity = 0;
G__9329.cljs$lang$applyTo = (function (arglist__9331){
var args = cljs.core.seq(arglist__9331);
return G__9329__delegate(args);
});
G__9329.cljs$core$IFn$_invoke$arity$variadic = G__9329__delegate;
return G__9329;
})()
;

return null;
});

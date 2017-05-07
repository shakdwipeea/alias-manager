goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13455__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13456__i = 0, G__13456__a = new Array(arguments.length -  0);
while (G__13456__i < G__13456__a.length) {G__13456__a[G__13456__i] = arguments[G__13456__i + 0]; ++G__13456__i;}
  args = new cljs.core.IndexedSeq(G__13456__a,0);
} 
return G__13455__delegate.call(this,args);};
G__13455.cljs$lang$maxFixedArity = 0;
G__13455.cljs$lang$applyTo = (function (arglist__13457){
var args = cljs.core.seq(arglist__13457);
return G__13455__delegate(args);
});
G__13455.cljs$core$IFn$_invoke$arity$variadic = G__13455__delegate;
return G__13455;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13458__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13459__i = 0, G__13459__a = new Array(arguments.length -  0);
while (G__13459__i < G__13459__a.length) {G__13459__a[G__13459__i] = arguments[G__13459__i + 0]; ++G__13459__i;}
  args = new cljs.core.IndexedSeq(G__13459__a,0);
} 
return G__13458__delegate.call(this,args);};
G__13458.cljs$lang$maxFixedArity = 0;
G__13458.cljs$lang$applyTo = (function (arglist__13460){
var args = cljs.core.seq(arglist__13460);
return G__13458__delegate(args);
});
G__13458.cljs$core$IFn$_invoke$arity$variadic = G__13458__delegate;
return G__13458;
})()
;

return null;
});

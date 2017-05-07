goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12403__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12404__i = 0, G__12404__a = new Array(arguments.length -  0);
while (G__12404__i < G__12404__a.length) {G__12404__a[G__12404__i] = arguments[G__12404__i + 0]; ++G__12404__i;}
  args = new cljs.core.IndexedSeq(G__12404__a,0);
} 
return G__12403__delegate.call(this,args);};
G__12403.cljs$lang$maxFixedArity = 0;
G__12403.cljs$lang$applyTo = (function (arglist__12405){
var args = cljs.core.seq(arglist__12405);
return G__12403__delegate(args);
});
G__12403.cljs$core$IFn$_invoke$arity$variadic = G__12403__delegate;
return G__12403;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12406__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12407__i = 0, G__12407__a = new Array(arguments.length -  0);
while (G__12407__i < G__12407__a.length) {G__12407__a[G__12407__i] = arguments[G__12407__i + 0]; ++G__12407__i;}
  args = new cljs.core.IndexedSeq(G__12407__a,0);
} 
return G__12406__delegate.call(this,args);};
G__12406.cljs$lang$maxFixedArity = 0;
G__12406.cljs$lang$applyTo = (function (arglist__12408){
var args = cljs.core.seq(arglist__12408);
return G__12406__delegate(args);
});
G__12406.cljs$core$IFn$_invoke$arity$variadic = G__12406__delegate;
return G__12406;
})()
;

return null;
});

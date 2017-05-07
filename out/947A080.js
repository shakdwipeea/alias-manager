goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11587__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11588__i = 0, G__11588__a = new Array(arguments.length -  0);
while (G__11588__i < G__11588__a.length) {G__11588__a[G__11588__i] = arguments[G__11588__i + 0]; ++G__11588__i;}
  args = new cljs.core.IndexedSeq(G__11588__a,0);
} 
return G__11587__delegate.call(this,args);};
G__11587.cljs$lang$maxFixedArity = 0;
G__11587.cljs$lang$applyTo = (function (arglist__11589){
var args = cljs.core.seq(arglist__11589);
return G__11587__delegate(args);
});
G__11587.cljs$core$IFn$_invoke$arity$variadic = G__11587__delegate;
return G__11587;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11590__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11591__i = 0, G__11591__a = new Array(arguments.length -  0);
while (G__11591__i < G__11591__a.length) {G__11591__a[G__11591__i] = arguments[G__11591__i + 0]; ++G__11591__i;}
  args = new cljs.core.IndexedSeq(G__11591__a,0);
} 
return G__11590__delegate.call(this,args);};
G__11590.cljs$lang$maxFixedArity = 0;
G__11590.cljs$lang$applyTo = (function (arglist__11592){
var args = cljs.core.seq(arglist__11592);
return G__11590__delegate(args);
});
G__11590.cljs$core$IFn$_invoke$arity$variadic = G__11590__delegate;
return G__11590;
})()
;

return null;
});

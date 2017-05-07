goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12136__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12137__i = 0, G__12137__a = new Array(arguments.length -  0);
while (G__12137__i < G__12137__a.length) {G__12137__a[G__12137__i] = arguments[G__12137__i + 0]; ++G__12137__i;}
  args = new cljs.core.IndexedSeq(G__12137__a,0);
} 
return G__12136__delegate.call(this,args);};
G__12136.cljs$lang$maxFixedArity = 0;
G__12136.cljs$lang$applyTo = (function (arglist__12138){
var args = cljs.core.seq(arglist__12138);
return G__12136__delegate(args);
});
G__12136.cljs$core$IFn$_invoke$arity$variadic = G__12136__delegate;
return G__12136;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12139__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12140__i = 0, G__12140__a = new Array(arguments.length -  0);
while (G__12140__i < G__12140__a.length) {G__12140__a[G__12140__i] = arguments[G__12140__i + 0]; ++G__12140__i;}
  args = new cljs.core.IndexedSeq(G__12140__a,0);
} 
return G__12139__delegate.call(this,args);};
G__12139.cljs$lang$maxFixedArity = 0;
G__12139.cljs$lang$applyTo = (function (arglist__12141){
var args = cljs.core.seq(arglist__12141);
return G__12139__delegate(args);
});
G__12139.cljs$core$IFn$_invoke$arity$variadic = G__12139__delegate;
return G__12139;
})()
;

return null;
});

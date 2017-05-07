goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12960__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12961__i = 0, G__12961__a = new Array(arguments.length -  0);
while (G__12961__i < G__12961__a.length) {G__12961__a[G__12961__i] = arguments[G__12961__i + 0]; ++G__12961__i;}
  args = new cljs.core.IndexedSeq(G__12961__a,0);
} 
return G__12960__delegate.call(this,args);};
G__12960.cljs$lang$maxFixedArity = 0;
G__12960.cljs$lang$applyTo = (function (arglist__12962){
var args = cljs.core.seq(arglist__12962);
return G__12960__delegate(args);
});
G__12960.cljs$core$IFn$_invoke$arity$variadic = G__12960__delegate;
return G__12960;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12963__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12964__i = 0, G__12964__a = new Array(arguments.length -  0);
while (G__12964__i < G__12964__a.length) {G__12964__a[G__12964__i] = arguments[G__12964__i + 0]; ++G__12964__i;}
  args = new cljs.core.IndexedSeq(G__12964__a,0);
} 
return G__12963__delegate.call(this,args);};
G__12963.cljs$lang$maxFixedArity = 0;
G__12963.cljs$lang$applyTo = (function (arglist__12965){
var args = cljs.core.seq(arglist__12965);
return G__12963__delegate(args);
});
G__12963.cljs$core$IFn$_invoke$arity$variadic = G__12963__delegate;
return G__12963;
})()
;

return null;
});

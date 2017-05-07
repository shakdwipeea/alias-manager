goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10871__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10872__i = 0, G__10872__a = new Array(arguments.length -  0);
while (G__10872__i < G__10872__a.length) {G__10872__a[G__10872__i] = arguments[G__10872__i + 0]; ++G__10872__i;}
  args = new cljs.core.IndexedSeq(G__10872__a,0);
} 
return G__10871__delegate.call(this,args);};
G__10871.cljs$lang$maxFixedArity = 0;
G__10871.cljs$lang$applyTo = (function (arglist__10873){
var args = cljs.core.seq(arglist__10873);
return G__10871__delegate(args);
});
G__10871.cljs$core$IFn$_invoke$arity$variadic = G__10871__delegate;
return G__10871;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10874__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10875__i = 0, G__10875__a = new Array(arguments.length -  0);
while (G__10875__i < G__10875__a.length) {G__10875__a[G__10875__i] = arguments[G__10875__i + 0]; ++G__10875__i;}
  args = new cljs.core.IndexedSeq(G__10875__a,0);
} 
return G__10874__delegate.call(this,args);};
G__10874.cljs$lang$maxFixedArity = 0;
G__10874.cljs$lang$applyTo = (function (arglist__10876){
var args = cljs.core.seq(arglist__10876);
return G__10874__delegate(args);
});
G__10874.cljs$core$IFn$_invoke$arity$variadic = G__10874__delegate;
return G__10874;
})()
;

return null;
});

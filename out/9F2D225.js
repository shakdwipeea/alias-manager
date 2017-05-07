goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12414__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12415__i = 0, G__12415__a = new Array(arguments.length -  0);
while (G__12415__i < G__12415__a.length) {G__12415__a[G__12415__i] = arguments[G__12415__i + 0]; ++G__12415__i;}
  args = new cljs.core.IndexedSeq(G__12415__a,0);
} 
return G__12414__delegate.call(this,args);};
G__12414.cljs$lang$maxFixedArity = 0;
G__12414.cljs$lang$applyTo = (function (arglist__12416){
var args = cljs.core.seq(arglist__12416);
return G__12414__delegate(args);
});
G__12414.cljs$core$IFn$_invoke$arity$variadic = G__12414__delegate;
return G__12414;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12417__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12417 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12418__i = 0, G__12418__a = new Array(arguments.length -  0);
while (G__12418__i < G__12418__a.length) {G__12418__a[G__12418__i] = arguments[G__12418__i + 0]; ++G__12418__i;}
  args = new cljs.core.IndexedSeq(G__12418__a,0);
} 
return G__12417__delegate.call(this,args);};
G__12417.cljs$lang$maxFixedArity = 0;
G__12417.cljs$lang$applyTo = (function (arglist__12419){
var args = cljs.core.seq(arglist__12419);
return G__12417__delegate(args);
});
G__12417.cljs$core$IFn$_invoke$arity$variadic = G__12417__delegate;
return G__12417;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11168__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11169__i = 0, G__11169__a = new Array(arguments.length -  0);
while (G__11169__i < G__11169__a.length) {G__11169__a[G__11169__i] = arguments[G__11169__i + 0]; ++G__11169__i;}
  args = new cljs.core.IndexedSeq(G__11169__a,0);
} 
return G__11168__delegate.call(this,args);};
G__11168.cljs$lang$maxFixedArity = 0;
G__11168.cljs$lang$applyTo = (function (arglist__11170){
var args = cljs.core.seq(arglist__11170);
return G__11168__delegate(args);
});
G__11168.cljs$core$IFn$_invoke$arity$variadic = G__11168__delegate;
return G__11168;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11171__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11172__i = 0, G__11172__a = new Array(arguments.length -  0);
while (G__11172__i < G__11172__a.length) {G__11172__a[G__11172__i] = arguments[G__11172__i + 0]; ++G__11172__i;}
  args = new cljs.core.IndexedSeq(G__11172__a,0);
} 
return G__11171__delegate.call(this,args);};
G__11171.cljs$lang$maxFixedArity = 0;
G__11171.cljs$lang$applyTo = (function (arglist__11173){
var args = cljs.core.seq(arglist__11173);
return G__11171__delegate(args);
});
G__11171.cljs$core$IFn$_invoke$arity$variadic = G__11171__delegate;
return G__11171;
})()
;

return null;
});

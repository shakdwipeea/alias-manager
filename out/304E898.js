goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13199__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13200__i = 0, G__13200__a = new Array(arguments.length -  0);
while (G__13200__i < G__13200__a.length) {G__13200__a[G__13200__i] = arguments[G__13200__i + 0]; ++G__13200__i;}
  args = new cljs.core.IndexedSeq(G__13200__a,0);
} 
return G__13199__delegate.call(this,args);};
G__13199.cljs$lang$maxFixedArity = 0;
G__13199.cljs$lang$applyTo = (function (arglist__13201){
var args = cljs.core.seq(arglist__13201);
return G__13199__delegate(args);
});
G__13199.cljs$core$IFn$_invoke$arity$variadic = G__13199__delegate;
return G__13199;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13202__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13203__i = 0, G__13203__a = new Array(arguments.length -  0);
while (G__13203__i < G__13203__a.length) {G__13203__a[G__13203__i] = arguments[G__13203__i + 0]; ++G__13203__i;}
  args = new cljs.core.IndexedSeq(G__13203__a,0);
} 
return G__13202__delegate.call(this,args);};
G__13202.cljs$lang$maxFixedArity = 0;
G__13202.cljs$lang$applyTo = (function (arglist__13204){
var args = cljs.core.seq(arglist__13204);
return G__13202__delegate(args);
});
G__13202.cljs$core$IFn$_invoke$arity$variadic = G__13202__delegate;
return G__13202;
})()
;

return null;
});

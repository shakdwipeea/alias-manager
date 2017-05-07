goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13010__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13011__i = 0, G__13011__a = new Array(arguments.length -  0);
while (G__13011__i < G__13011__a.length) {G__13011__a[G__13011__i] = arguments[G__13011__i + 0]; ++G__13011__i;}
  args = new cljs.core.IndexedSeq(G__13011__a,0);
} 
return G__13010__delegate.call(this,args);};
G__13010.cljs$lang$maxFixedArity = 0;
G__13010.cljs$lang$applyTo = (function (arglist__13012){
var args = cljs.core.seq(arglist__13012);
return G__13010__delegate(args);
});
G__13010.cljs$core$IFn$_invoke$arity$variadic = G__13010__delegate;
return G__13010;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13013__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13014__i = 0, G__13014__a = new Array(arguments.length -  0);
while (G__13014__i < G__13014__a.length) {G__13014__a[G__13014__i] = arguments[G__13014__i + 0]; ++G__13014__i;}
  args = new cljs.core.IndexedSeq(G__13014__a,0);
} 
return G__13013__delegate.call(this,args);};
G__13013.cljs$lang$maxFixedArity = 0;
G__13013.cljs$lang$applyTo = (function (arglist__13015){
var args = cljs.core.seq(arglist__13015);
return G__13013__delegate(args);
});
G__13013.cljs$core$IFn$_invoke$arity$variadic = G__13013__delegate;
return G__13013;
})()
;

return null;
});

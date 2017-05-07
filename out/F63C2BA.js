goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9071__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9072__i = 0, G__9072__a = new Array(arguments.length -  0);
while (G__9072__i < G__9072__a.length) {G__9072__a[G__9072__i] = arguments[G__9072__i + 0]; ++G__9072__i;}
  args = new cljs.core.IndexedSeq(G__9072__a,0);
} 
return G__9071__delegate.call(this,args);};
G__9071.cljs$lang$maxFixedArity = 0;
G__9071.cljs$lang$applyTo = (function (arglist__9073){
var args = cljs.core.seq(arglist__9073);
return G__9071__delegate(args);
});
G__9071.cljs$core$IFn$_invoke$arity$variadic = G__9071__delegate;
return G__9071;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9074__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9075__i = 0, G__9075__a = new Array(arguments.length -  0);
while (G__9075__i < G__9075__a.length) {G__9075__a[G__9075__i] = arguments[G__9075__i + 0]; ++G__9075__i;}
  args = new cljs.core.IndexedSeq(G__9075__a,0);
} 
return G__9074__delegate.call(this,args);};
G__9074.cljs$lang$maxFixedArity = 0;
G__9074.cljs$lang$applyTo = (function (arglist__9076){
var args = cljs.core.seq(arglist__9076);
return G__9074__delegate(args);
});
G__9074.cljs$core$IFn$_invoke$arity$variadic = G__9074__delegate;
return G__9074;
})()
;

return null;
});

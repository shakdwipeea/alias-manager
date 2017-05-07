goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9409__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9410__i = 0, G__9410__a = new Array(arguments.length -  0);
while (G__9410__i < G__9410__a.length) {G__9410__a[G__9410__i] = arguments[G__9410__i + 0]; ++G__9410__i;}
  args = new cljs.core.IndexedSeq(G__9410__a,0);
} 
return G__9409__delegate.call(this,args);};
G__9409.cljs$lang$maxFixedArity = 0;
G__9409.cljs$lang$applyTo = (function (arglist__9411){
var args = cljs.core.seq(arglist__9411);
return G__9409__delegate(args);
});
G__9409.cljs$core$IFn$_invoke$arity$variadic = G__9409__delegate;
return G__9409;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9412__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9413__i = 0, G__9413__a = new Array(arguments.length -  0);
while (G__9413__i < G__9413__a.length) {G__9413__a[G__9413__i] = arguments[G__9413__i + 0]; ++G__9413__i;}
  args = new cljs.core.IndexedSeq(G__9413__a,0);
} 
return G__9412__delegate.call(this,args);};
G__9412.cljs$lang$maxFixedArity = 0;
G__9412.cljs$lang$applyTo = (function (arglist__9414){
var args = cljs.core.seq(arglist__9414);
return G__9412__delegate(args);
});
G__9412.cljs$core$IFn$_invoke$arity$variadic = G__9412__delegate;
return G__9412;
})()
;

return null;
});

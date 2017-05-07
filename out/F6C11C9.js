goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9694__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9695__i = 0, G__9695__a = new Array(arguments.length -  0);
while (G__9695__i < G__9695__a.length) {G__9695__a[G__9695__i] = arguments[G__9695__i + 0]; ++G__9695__i;}
  args = new cljs.core.IndexedSeq(G__9695__a,0);
} 
return G__9694__delegate.call(this,args);};
G__9694.cljs$lang$maxFixedArity = 0;
G__9694.cljs$lang$applyTo = (function (arglist__9696){
var args = cljs.core.seq(arglist__9696);
return G__9694__delegate(args);
});
G__9694.cljs$core$IFn$_invoke$arity$variadic = G__9694__delegate;
return G__9694;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9697__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9698__i = 0, G__9698__a = new Array(arguments.length -  0);
while (G__9698__i < G__9698__a.length) {G__9698__a[G__9698__i] = arguments[G__9698__i + 0]; ++G__9698__i;}
  args = new cljs.core.IndexedSeq(G__9698__a,0);
} 
return G__9697__delegate.call(this,args);};
G__9697.cljs$lang$maxFixedArity = 0;
G__9697.cljs$lang$applyTo = (function (arglist__9699){
var args = cljs.core.seq(arglist__9699);
return G__9697__delegate(args);
});
G__9697.cljs$core$IFn$_invoke$arity$variadic = G__9697__delegate;
return G__9697;
})()
;

return null;
});

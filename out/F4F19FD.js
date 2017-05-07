goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12451__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12452__i = 0, G__12452__a = new Array(arguments.length -  0);
while (G__12452__i < G__12452__a.length) {G__12452__a[G__12452__i] = arguments[G__12452__i + 0]; ++G__12452__i;}
  args = new cljs.core.IndexedSeq(G__12452__a,0);
} 
return G__12451__delegate.call(this,args);};
G__12451.cljs$lang$maxFixedArity = 0;
G__12451.cljs$lang$applyTo = (function (arglist__12453){
var args = cljs.core.seq(arglist__12453);
return G__12451__delegate(args);
});
G__12451.cljs$core$IFn$_invoke$arity$variadic = G__12451__delegate;
return G__12451;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12454__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12455__i = 0, G__12455__a = new Array(arguments.length -  0);
while (G__12455__i < G__12455__a.length) {G__12455__a[G__12455__i] = arguments[G__12455__i + 0]; ++G__12455__i;}
  args = new cljs.core.IndexedSeq(G__12455__a,0);
} 
return G__12454__delegate.call(this,args);};
G__12454.cljs$lang$maxFixedArity = 0;
G__12454.cljs$lang$applyTo = (function (arglist__12456){
var args = cljs.core.seq(arglist__12456);
return G__12454__delegate(args);
});
G__12454.cljs$core$IFn$_invoke$arity$variadic = G__12454__delegate;
return G__12454;
})()
;

return null;
});

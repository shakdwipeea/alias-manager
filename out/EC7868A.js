goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12312__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12313__i = 0, G__12313__a = new Array(arguments.length -  0);
while (G__12313__i < G__12313__a.length) {G__12313__a[G__12313__i] = arguments[G__12313__i + 0]; ++G__12313__i;}
  args = new cljs.core.IndexedSeq(G__12313__a,0);
} 
return G__12312__delegate.call(this,args);};
G__12312.cljs$lang$maxFixedArity = 0;
G__12312.cljs$lang$applyTo = (function (arglist__12314){
var args = cljs.core.seq(arglist__12314);
return G__12312__delegate(args);
});
G__12312.cljs$core$IFn$_invoke$arity$variadic = G__12312__delegate;
return G__12312;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12315__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12316__i = 0, G__12316__a = new Array(arguments.length -  0);
while (G__12316__i < G__12316__a.length) {G__12316__a[G__12316__i] = arguments[G__12316__i + 0]; ++G__12316__i;}
  args = new cljs.core.IndexedSeq(G__12316__a,0);
} 
return G__12315__delegate.call(this,args);};
G__12315.cljs$lang$maxFixedArity = 0;
G__12315.cljs$lang$applyTo = (function (arglist__12317){
var args = cljs.core.seq(arglist__12317);
return G__12315__delegate(args);
});
G__12315.cljs$core$IFn$_invoke$arity$variadic = G__12315__delegate;
return G__12315;
})()
;

return null;
});

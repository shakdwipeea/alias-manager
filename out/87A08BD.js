goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9492__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9493__i = 0, G__9493__a = new Array(arguments.length -  0);
while (G__9493__i < G__9493__a.length) {G__9493__a[G__9493__i] = arguments[G__9493__i + 0]; ++G__9493__i;}
  args = new cljs.core.IndexedSeq(G__9493__a,0);
} 
return G__9492__delegate.call(this,args);};
G__9492.cljs$lang$maxFixedArity = 0;
G__9492.cljs$lang$applyTo = (function (arglist__9494){
var args = cljs.core.seq(arglist__9494);
return G__9492__delegate(args);
});
G__9492.cljs$core$IFn$_invoke$arity$variadic = G__9492__delegate;
return G__9492;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9495__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9496__i = 0, G__9496__a = new Array(arguments.length -  0);
while (G__9496__i < G__9496__a.length) {G__9496__a[G__9496__i] = arguments[G__9496__i + 0]; ++G__9496__i;}
  args = new cljs.core.IndexedSeq(G__9496__a,0);
} 
return G__9495__delegate.call(this,args);};
G__9495.cljs$lang$maxFixedArity = 0;
G__9495.cljs$lang$applyTo = (function (arglist__9497){
var args = cljs.core.seq(arglist__9497);
return G__9495__delegate(args);
});
G__9495.cljs$core$IFn$_invoke$arity$variadic = G__9495__delegate;
return G__9495;
})()
;

return null;
});

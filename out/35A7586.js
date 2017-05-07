goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10151__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10152__i = 0, G__10152__a = new Array(arguments.length -  0);
while (G__10152__i < G__10152__a.length) {G__10152__a[G__10152__i] = arguments[G__10152__i + 0]; ++G__10152__i;}
  args = new cljs.core.IndexedSeq(G__10152__a,0);
} 
return G__10151__delegate.call(this,args);};
G__10151.cljs$lang$maxFixedArity = 0;
G__10151.cljs$lang$applyTo = (function (arglist__10153){
var args = cljs.core.seq(arglist__10153);
return G__10151__delegate(args);
});
G__10151.cljs$core$IFn$_invoke$arity$variadic = G__10151__delegate;
return G__10151;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10154__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10155__i = 0, G__10155__a = new Array(arguments.length -  0);
while (G__10155__i < G__10155__a.length) {G__10155__a[G__10155__i] = arguments[G__10155__i + 0]; ++G__10155__i;}
  args = new cljs.core.IndexedSeq(G__10155__a,0);
} 
return G__10154__delegate.call(this,args);};
G__10154.cljs$lang$maxFixedArity = 0;
G__10154.cljs$lang$applyTo = (function (arglist__10156){
var args = cljs.core.seq(arglist__10156);
return G__10154__delegate(args);
});
G__10154.cljs$core$IFn$_invoke$arity$variadic = G__10154__delegate;
return G__10154;
})()
;

return null;
});

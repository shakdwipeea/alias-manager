goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11896__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11897__i = 0, G__11897__a = new Array(arguments.length -  0);
while (G__11897__i < G__11897__a.length) {G__11897__a[G__11897__i] = arguments[G__11897__i + 0]; ++G__11897__i;}
  args = new cljs.core.IndexedSeq(G__11897__a,0);
} 
return G__11896__delegate.call(this,args);};
G__11896.cljs$lang$maxFixedArity = 0;
G__11896.cljs$lang$applyTo = (function (arglist__11898){
var args = cljs.core.seq(arglist__11898);
return G__11896__delegate(args);
});
G__11896.cljs$core$IFn$_invoke$arity$variadic = G__11896__delegate;
return G__11896;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11899__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11900__i = 0, G__11900__a = new Array(arguments.length -  0);
while (G__11900__i < G__11900__a.length) {G__11900__a[G__11900__i] = arguments[G__11900__i + 0]; ++G__11900__i;}
  args = new cljs.core.IndexedSeq(G__11900__a,0);
} 
return G__11899__delegate.call(this,args);};
G__11899.cljs$lang$maxFixedArity = 0;
G__11899.cljs$lang$applyTo = (function (arglist__11901){
var args = cljs.core.seq(arglist__11901);
return G__11899__delegate(args);
});
G__11899.cljs$core$IFn$_invoke$arity$variadic = G__11899__delegate;
return G__11899;
})()
;

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12109__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12110__i = 0, G__12110__a = new Array(arguments.length -  0);
while (G__12110__i < G__12110__a.length) {G__12110__a[G__12110__i] = arguments[G__12110__i + 0]; ++G__12110__i;}
  args = new cljs.core.IndexedSeq(G__12110__a,0);
} 
return G__12109__delegate.call(this,args);};
G__12109.cljs$lang$maxFixedArity = 0;
G__12109.cljs$lang$applyTo = (function (arglist__12111){
var args = cljs.core.seq(arglist__12111);
return G__12109__delegate(args);
});
G__12109.cljs$core$IFn$_invoke$arity$variadic = G__12109__delegate;
return G__12109;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12112__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12113__i = 0, G__12113__a = new Array(arguments.length -  0);
while (G__12113__i < G__12113__a.length) {G__12113__a[G__12113__i] = arguments[G__12113__i + 0]; ++G__12113__i;}
  args = new cljs.core.IndexedSeq(G__12113__a,0);
} 
return G__12112__delegate.call(this,args);};
G__12112.cljs$lang$maxFixedArity = 0;
G__12112.cljs$lang$applyTo = (function (arglist__12114){
var args = cljs.core.seq(arglist__12114);
return G__12112__delegate(args);
});
G__12112.cljs$core$IFn$_invoke$arity$variadic = G__12112__delegate;
return G__12112;
})()
;

return null;
});

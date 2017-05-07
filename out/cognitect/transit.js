// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__8118_8122 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__8119_8123 = null;
var count__8120_8124 = (0);
var i__8121_8125 = (0);
while(true){
if((i__8121_8125 < count__8120_8124)){
var k_8126 = cljs.core._nth.call(null,chunk__8119_8123,i__8121_8125);
var v_8127 = (b[k_8126]);
(a[k_8126] = v_8127);

var G__8128 = seq__8118_8122;
var G__8129 = chunk__8119_8123;
var G__8130 = count__8120_8124;
var G__8131 = (i__8121_8125 + (1));
seq__8118_8122 = G__8128;
chunk__8119_8123 = G__8129;
count__8120_8124 = G__8130;
i__8121_8125 = G__8131;
continue;
} else {
var temp__4425__auto___8132 = cljs.core.seq.call(null,seq__8118_8122);
if(temp__4425__auto___8132){
var seq__8118_8133__$1 = temp__4425__auto___8132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8118_8133__$1)){
var c__5276__auto___8134 = cljs.core.chunk_first.call(null,seq__8118_8133__$1);
var G__8135 = cljs.core.chunk_rest.call(null,seq__8118_8133__$1);
var G__8136 = c__5276__auto___8134;
var G__8137 = cljs.core.count.call(null,c__5276__auto___8134);
var G__8138 = (0);
seq__8118_8122 = G__8135;
chunk__8119_8123 = G__8136;
count__8120_8124 = G__8137;
i__8121_8125 = G__8138;
continue;
} else {
var k_8139 = cljs.core.first.call(null,seq__8118_8133__$1);
var v_8140 = (b[k_8139]);
(a[k_8139] = v_8140);

var G__8141 = cljs.core.next.call(null,seq__8118_8133__$1);
var G__8142 = null;
var G__8143 = (0);
var G__8144 = (0);
seq__8118_8122 = G__8141;
chunk__8119_8123 = G__8142;
count__8120_8124 = G__8143;
i__8121_8125 = G__8144;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args8145 = [];
var len__5531__auto___8148 = arguments.length;
var i__5532__auto___8149 = (0);
while(true){
if((i__5532__auto___8149 < len__5531__auto___8148)){
args8145.push((arguments[i__5532__auto___8149]));

var G__8150 = (i__5532__auto___8149 + (1));
i__5532__auto___8149 = G__8150;
continue;
} else {
}
break;
}

var G__8147 = args8145.length;
switch (G__8147) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8145.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__8152 = (i + (2));
var G__8153 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__8152;
ret = G__8153;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8154_8158 = cljs.core.seq.call(null,v);
var chunk__8155_8159 = null;
var count__8156_8160 = (0);
var i__8157_8161 = (0);
while(true){
if((i__8157_8161 < count__8156_8160)){
var x_8162 = cljs.core._nth.call(null,chunk__8155_8159,i__8157_8161);
ret.push(x_8162);

var G__8163 = seq__8154_8158;
var G__8164 = chunk__8155_8159;
var G__8165 = count__8156_8160;
var G__8166 = (i__8157_8161 + (1));
seq__8154_8158 = G__8163;
chunk__8155_8159 = G__8164;
count__8156_8160 = G__8165;
i__8157_8161 = G__8166;
continue;
} else {
var temp__4425__auto___8167 = cljs.core.seq.call(null,seq__8154_8158);
if(temp__4425__auto___8167){
var seq__8154_8168__$1 = temp__4425__auto___8167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8154_8168__$1)){
var c__5276__auto___8169 = cljs.core.chunk_first.call(null,seq__8154_8168__$1);
var G__8170 = cljs.core.chunk_rest.call(null,seq__8154_8168__$1);
var G__8171 = c__5276__auto___8169;
var G__8172 = cljs.core.count.call(null,c__5276__auto___8169);
var G__8173 = (0);
seq__8154_8158 = G__8170;
chunk__8155_8159 = G__8171;
count__8156_8160 = G__8172;
i__8157_8161 = G__8173;
continue;
} else {
var x_8174 = cljs.core.first.call(null,seq__8154_8168__$1);
ret.push(x_8174);

var G__8175 = cljs.core.next.call(null,seq__8154_8168__$1);
var G__8176 = null;
var G__8177 = (0);
var G__8178 = (0);
seq__8154_8158 = G__8175;
chunk__8155_8159 = G__8176;
count__8156_8160 = G__8177;
i__8157_8161 = G__8178;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8179_8183 = cljs.core.seq.call(null,v);
var chunk__8180_8184 = null;
var count__8181_8185 = (0);
var i__8182_8186 = (0);
while(true){
if((i__8182_8186 < count__8181_8185)){
var x_8187 = cljs.core._nth.call(null,chunk__8180_8184,i__8182_8186);
ret.push(x_8187);

var G__8188 = seq__8179_8183;
var G__8189 = chunk__8180_8184;
var G__8190 = count__8181_8185;
var G__8191 = (i__8182_8186 + (1));
seq__8179_8183 = G__8188;
chunk__8180_8184 = G__8189;
count__8181_8185 = G__8190;
i__8182_8186 = G__8191;
continue;
} else {
var temp__4425__auto___8192 = cljs.core.seq.call(null,seq__8179_8183);
if(temp__4425__auto___8192){
var seq__8179_8193__$1 = temp__4425__auto___8192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8179_8193__$1)){
var c__5276__auto___8194 = cljs.core.chunk_first.call(null,seq__8179_8193__$1);
var G__8195 = cljs.core.chunk_rest.call(null,seq__8179_8193__$1);
var G__8196 = c__5276__auto___8194;
var G__8197 = cljs.core.count.call(null,c__5276__auto___8194);
var G__8198 = (0);
seq__8179_8183 = G__8195;
chunk__8180_8184 = G__8196;
count__8181_8185 = G__8197;
i__8182_8186 = G__8198;
continue;
} else {
var x_8199 = cljs.core.first.call(null,seq__8179_8193__$1);
ret.push(x_8199);

var G__8200 = cljs.core.next.call(null,seq__8179_8193__$1);
var G__8201 = null;
var G__8202 = (0);
var G__8203 = (0);
seq__8179_8183 = G__8200;
chunk__8180_8184 = G__8201;
count__8181_8185 = G__8202;
i__8182_8186 = G__8203;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8204_8208 = cljs.core.seq.call(null,v);
var chunk__8205_8209 = null;
var count__8206_8210 = (0);
var i__8207_8211 = (0);
while(true){
if((i__8207_8211 < count__8206_8210)){
var x_8212 = cljs.core._nth.call(null,chunk__8205_8209,i__8207_8211);
ret.push(x_8212);

var G__8213 = seq__8204_8208;
var G__8214 = chunk__8205_8209;
var G__8215 = count__8206_8210;
var G__8216 = (i__8207_8211 + (1));
seq__8204_8208 = G__8213;
chunk__8205_8209 = G__8214;
count__8206_8210 = G__8215;
i__8207_8211 = G__8216;
continue;
} else {
var temp__4425__auto___8217 = cljs.core.seq.call(null,seq__8204_8208);
if(temp__4425__auto___8217){
var seq__8204_8218__$1 = temp__4425__auto___8217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8204_8218__$1)){
var c__5276__auto___8219 = cljs.core.chunk_first.call(null,seq__8204_8218__$1);
var G__8220 = cljs.core.chunk_rest.call(null,seq__8204_8218__$1);
var G__8221 = c__5276__auto___8219;
var G__8222 = cljs.core.count.call(null,c__5276__auto___8219);
var G__8223 = (0);
seq__8204_8208 = G__8220;
chunk__8205_8209 = G__8221;
count__8206_8210 = G__8222;
i__8207_8211 = G__8223;
continue;
} else {
var x_8224 = cljs.core.first.call(null,seq__8204_8218__$1);
ret.push(x_8224);

var G__8225 = cljs.core.next.call(null,seq__8204_8218__$1);
var G__8226 = null;
var G__8227 = (0);
var G__8228 = (0);
seq__8204_8208 = G__8225;
chunk__8205_8209 = G__8226;
count__8206_8210 = G__8227;
i__8207_8211 = G__8228;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args8229 = [];
var len__5531__auto___8240 = arguments.length;
var i__5532__auto___8241 = (0);
while(true){
if((i__5532__auto___8241 < len__5531__auto___8240)){
args8229.push((arguments[i__5532__auto___8241]));

var G__8242 = (i__5532__auto___8241 + (1));
i__5532__auto___8241 = G__8242;
continue;
} else {
}
break;
}

var G__8231 = args8229.length;
switch (G__8231) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8229.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__8232 = obj;
G__8232.push(kfn.call(null,k),vfn.call(null,v));

return G__8232;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x8233 = cljs.core.clone.call(null,handlers);
x8233.forEach = ((function (x8233,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__8234 = cljs.core.seq.call(null,coll);
var chunk__8235 = null;
var count__8236 = (0);
var i__8237 = (0);
while(true){
if((i__8237 < count__8236)){
var vec__8238 = cljs.core._nth.call(null,chunk__8235,i__8237);
var k = cljs.core.nth.call(null,vec__8238,(0),null);
var v = cljs.core.nth.call(null,vec__8238,(1),null);
f.call(null,v,k);

var G__8244 = seq__8234;
var G__8245 = chunk__8235;
var G__8246 = count__8236;
var G__8247 = (i__8237 + (1));
seq__8234 = G__8244;
chunk__8235 = G__8245;
count__8236 = G__8246;
i__8237 = G__8247;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8234);
if(temp__4425__auto__){
var seq__8234__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8234__$1)){
var c__5276__auto__ = cljs.core.chunk_first.call(null,seq__8234__$1);
var G__8248 = cljs.core.chunk_rest.call(null,seq__8234__$1);
var G__8249 = c__5276__auto__;
var G__8250 = cljs.core.count.call(null,c__5276__auto__);
var G__8251 = (0);
seq__8234 = G__8248;
chunk__8235 = G__8249;
count__8236 = G__8250;
i__8237 = G__8251;
continue;
} else {
var vec__8239 = cljs.core.first.call(null,seq__8234__$1);
var k = cljs.core.nth.call(null,vec__8239,(0),null);
var v = cljs.core.nth.call(null,vec__8239,(1),null);
f.call(null,v,k);

var G__8252 = cljs.core.next.call(null,seq__8234__$1);
var G__8253 = null;
var G__8254 = (0);
var G__8255 = (0);
seq__8234 = G__8252;
chunk__8235 = G__8253;
count__8236 = G__8254;
i__8237 = G__8255;
continue;
}
} else {
return null;
}
}
break;
}
});})(x8233,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x8233;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args8256 = [];
var len__5531__auto___8262 = arguments.length;
var i__5532__auto___8263 = (0);
while(true){
if((i__5532__auto___8263 < len__5531__auto___8262)){
args8256.push((arguments[i__5532__auto___8263]));

var G__8264 = (i__5532__auto___8263 + (1));
i__5532__auto___8263 = G__8264;
continue;
} else {
}
break;
}

var G__8258 = args8256.length;
switch (G__8258) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8256.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit8259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit8259 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta8260){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta8260 = meta8260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit8259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8261,meta8260__$1){
var self__ = this;
var _8261__$1 = this;
return (new cognitect.transit.t_cognitect$transit8259(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta8260__$1));
});

cognitect.transit.t_cognitect$transit8259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8261){
var self__ = this;
var _8261__$1 = this;
return self__.meta8260;
});

cognitect.transit.t_cognitect$transit8259.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8259.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8259.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8259.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta8260","meta8260",-605296868,null)], null);
});

cognitect.transit.t_cognitect$transit8259.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit8259.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit8259";

cognitect.transit.t_cognitect$transit8259.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"cognitect.transit/t_cognitect$transit8259");
});

cognitect.transit.__GT_t_cognitect$transit8259 = (function cognitect$transit$__GT_t_cognitect$transit8259(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8260){
return (new cognitect.transit.t_cognitect$transit8259(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8260));
});

}

return (new cognitect.transit.t_cognitect$transit8259(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__4473__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map
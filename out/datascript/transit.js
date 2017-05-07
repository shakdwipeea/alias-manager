// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('datascript.transit');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.db');
goog.require('datascript.btset');
goog.require('cognitect.transit');
datascript.transit.read_handlers = new cljs.core.PersistentArrayMap(null, 3, ["u",cljs.core.uuid,"datascript/DB",datascript.db.db_from_reader,"datascript/Datom",datascript.db.datom_from_reader], null);
datascript.transit.write_handlers = cljs.core.PersistentArrayMap.fromArray([datascript.db.DB,cognitect.transit.write_handler.call(null,cljs.core.constantly.call(null,"datascript/DB"),(function (db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(db)], null);
})),datascript.db.Datom,cognitect.transit.write_handler.call(null,cljs.core.constantly.call(null,"datascript/Datom"),(function (d){
if(cljs.core.truth_(d.added)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx,false], null);
}
})),datascript.btset.BTSet,(new cognitect.transit.ListHandler())], true, false);
datascript.transit.read_transit_str = (function datascript$transit$read_transit_str(s){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),datascript.transit.read_handlers], null)),s);
});
datascript.transit.write_transit_str = (function datascript$transit$write_transit_str(o){
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),datascript.transit.write_handlers], null)),o);
});

//# sourceMappingURL=transit.js.map
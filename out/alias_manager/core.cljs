(ns alias-manager.core
  (:require [datascript.core :as d]
            [cljs.nodejs :as nodejs]
            [datascript.transit :as dt]
            [alias-manager.shell :as sh]))

(def fs (nodejs/require "fs"))

(def data-file "/home/akash/workspace/alias-manager/a.data")

(defn write-file [content]
  (.writeFileSync fs data-file content))

(defn read-file []
  (.readFileSync fs data-file (clj->js {:encoding "utf8"})))

;(in-ns 'alias-manager.core)

(nodejs/enable-util-print!)

(def schema {:alias/name {:db/unique :db.unique/identity}
             :alias/value {:db/type :db.type/string}})

(defonce conn (d/create-conn schema))

(defn get-alias [name]
  (:alias/value (d/entity @conn [:alias/name name])))

(defn new-alias [name command]
  (if-let [value (get-alias name)]
    (println "Key already exists")
    (d/transact! conn [{:db/id -1
                        :alias/name name
                        :alias/value command}])))

(defn app [opt1 opt2 opt3]
  (cond
    (and (= opt1 "-n") opt2 opt3) (new-alias opt2 opt3)
    (= opt1 "-c") (reset! conn (d/empty-db schema))
    :else (some-> opt1 get-alias sh/exec)))

(defn get-db []
  (try
    (dt/read-transit-str (read-file))
    (catch js/Object e nil)))

(defn -main [opt1 opt2 opt3]
  (if-let [db (get-db)]
    (reset! conn db))
  (app opt1 opt2 opt3)
  (write-file (dt/write-transit-str (d/db conn))))

(set! *main-cli-fn* -main)


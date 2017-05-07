(ns alias-manager.shell
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn exec [command]
  (let [child-ps (nodejs/require "child_process")]
    (.exec child-ps command (fn [error stdout stderr]
                              (println (if (empty? stdout) stderr stdout))))))




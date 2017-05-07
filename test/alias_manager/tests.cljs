(ns alias-manager.tests
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [alias-manager.core :as am]))

(defmethod cljs.test/report [:cljs.test/default :end-run-tests] [m]
  (if (cljs.test/successful? m)
    (println "Success!")
    (println "FAIL")))

(enable-console-print!)

(deftest test-alias-persistence
  (let [name "name"
        value "value"]
    (am/new-alias name value)
    (is (= (am/get-alias name) value))))

(deftest app-test
  (let [name "l"
        value "pwd"]
    (am/-main "-c" nil nil)
    (am/-main "-n" name value)
    (is (complement (nil? (am/-main name nil nil))))))

;(deftest persistence-test
;  (let [data "Zlatan"]
;    (am/write-file data)
;    (is (= data (am/read-file)))))

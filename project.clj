(defproject alias-manager "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :min-lein-version "2.5.3"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/tools.cli "0.3.5"]
                 [datascript "0.16.1"]
                 [datascript-transit "0.2.2"]]


  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-2"]
            [lein-doo "0.1.7"]]

  :source-paths ["src"]

  :clean-targets ["server.js"
                  "target"]


  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {
                                   :main alias-manager.core
                                   :output-to "target/server_dev/alias_manager.js"
                                   :output-dir "target/server_dev"
                                   :target :nodejs
                                   :optimizations :none
                                   :source-map true}}
                       {:id "test"
                        :source-paths ["src" "test"]
                        :compiler {:output-to "target/server_test/alias.js"
                                   :main alias-manager.runner
                                   :target :nodejs
                                   :optimizations :none}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "am"
                                   :output-dir "target/server_prod"
                                   :target :nodejs
                                   :optimizations :simple}}]}
  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.0-1"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [lein-doo "0.1.7"]]
                                 :source-paths ["cljs_src"]}}

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]} <-- Note)

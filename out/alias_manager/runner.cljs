(ns alias-manager.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [alias-manager.tests]))

(doo-tests 'alias-manager.tests)

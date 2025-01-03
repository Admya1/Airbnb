# Pin npm packages by running ./bin/importmap
# config/importmap.rb
pin "swiper", to: "https://ga.jspm.io/npm:swiper@11.0.5/swiper.mjs"
pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "swapper" # @1.1.6

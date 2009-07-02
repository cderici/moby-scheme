;; The first three lines of this file were inserted by DrScheme. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname maps-mashup) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
;; mashup example.
;;
;; Google maps mashup: the map that's displayed and the latitude/longitude coordinates shown
;; should match up.


;; The world is a latitude/longitude.
(define-struct loc (lat long))


(define google-map-div
  (js-div (list (list "id" "google-div"))))

;; draw: world -> (sexpof dom)
(define (draw w)
  (local [(define lat-text (js-text (number->string (loc-lat w))))
          (define long-text (js-text (number->string (loc-long w))))]
    (list (js-div)
          (list (js-div)
                (list lat-text)
                (list (js-text " "))
                (list long-text))
          (list google-map-div (list (js-text "fill me in")))
          (list (js-text "map")))))


;; draw-css: world -> (sexpof css)
(define (draw-css w)
  (list (list "google-div"
               (list "width" "500px")
               (list "height" "300px")
               (list "color" "black")
               (list "border-width" "5")
               (list "border-style" "solid"))))


(define (update-loc w name vals)
  (local [(define latitude (first vals))
          (define longitude (second vals))]
    (make-world latitude longitude)))
    


(define load-script-effect
  (make-effect:js-load-script "http://www.google.com/jsapi?key=ABQIAAAA8ZT9Mxsh6JZ0SL4OykinsxQWOJEcslnYca7MAn
tWMY1b3Vu10BTf4mPDHeeY6Yy4oWNI9NyJiJCC8Q"))
                    

(define maps-startup-effect
  (make-effect:js-exec-string "
    (function() {
        function phase2() {
            if (typeof google != 'undefined') {
                google.load('search', '1', {callback: function() {}});
                google.load('maps', '2.x', {callback: function() {
                                                var map = new google.maps.Map2(document.getElementById('google-div'));
                                                map.setUIToDefault();
                                                map.setCenter(new google.maps.LatLng(37.4419, -122.1419));
                                                GEvent.addListener(map, 'dblclick',
                                                                   function() {
                                                                       var latitude = plt.types.Rational.makeInstance(this.latlng.lat(), 1);
                                                                       var longitude = plt.types.Rational.makeInstance(this.latlng.lng(), 1);

                                                                       plt.world.announce('map:dblclick', 
                                                                                          [latitude, longitude]);
                                                                   });
                                           }})
            } else {
                setTimeout(phase2, 0);
            }
        }
        phase2();
    })();"))


  
(js-big-bang (make-loc 0 0)
             '()
             (on-draw draw draw-css)
             (on-announce update-loc)
             (initial-effect 
              (list load-script-effect
                    maps-startup-effect
                    )))
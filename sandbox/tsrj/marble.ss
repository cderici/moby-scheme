;; The first three lines of this file were inserted by DrScheme. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname marble) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
;; Marble rolling program.  Tilting the phone
;; will cause the marble to roll in that
;; direction.

(define WIDTH 320)
(define HEIGHT 480)

(define MARBLE-WIDTH 20)
(define MARBLE-HEIGHT 20)

;; A world is a posn and a vel.
(define-struct world (posn vel))

;; A velocity has an x and y component.
(define-struct vel (x y))

;; The initial world has the marble centered
;; with no velocity.
(define initial-world 
  (make-world (make-posn (quotient WIDTH 2)
                         (quotient HEIGHT 2))
              (make-vel 0 0)))


;; tick: world -> world
;; Every tick moves the ball by its velocity.
(define (tick w)
  (make-world (posn+vel (world-posn w) 
                        (world-vel w))
              (world-vel w)))


;; tilt: world number number number -> world
;; Adjusts velocity based on the pitch and roll
;; of the phone.
(define (tilt w azimuth pitch roll)
  (make-world (world-posn w)
              (make-vel roll (- pitch))))


;; draw: world -> dom-sexp
;; We draw a single marble on screen on
;; top of the background.
(define (draw w)
  (list (js-div '(("id" "backgroundDiv")))
        (list (js-div '(("id" "marble"))))))
        

;; draw-css: world -> css-sexp
;; The marble is styled to be at a position and
;; a certain color.
(define (draw-css w)
  (list 
   (cons "marble" 
         (marble-styling (world-posn w)))
        
   (list "backgroundDiv"
         (list "background-color" "white")
         (list "width" 
               (number->px WIDTH))
         (list "height"
               (number->px HEIGHT)))))


;; marble-styling: posn -> (listof css-style)
;; Styles a marble with a color, a size, and a position.
(define (marble-styling a-posn)
  (list 
   (list "background-color" "red")
   (list "position" "absolute")
   (list "width" (number->px MARBLE-WIDTH))
   (list "height" (number->px MARBLE-HEIGHT))
   (list "top" (number->px (posn-y a-posn)))
   (list "left" (number->px (posn-x a-posn)))))

;; number->px: number -> string
;; Turns a number into a px string for css.
(define (number->px a-num)
  (string-append (number->string a-num)
                 "px"))
                    

;; posn+vel: posn velocity -> posn
;; Adds a position to a velocity.
(define (posn+vel a-posn a-vel)
  (make-posn (+ (posn-x a-posn) 
                (vel-x a-vel))                    
             (+ (posn-y a-posn) 
                (vel-y a-vel))))


(js-big-bang initial-world
             '()
             (on-draw draw draw-css)
             (on-tick 1/20 tick)
             (on-tilt tilt))
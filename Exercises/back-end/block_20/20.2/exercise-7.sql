USE sakila;

SELECT * FROM film;

SELECT title, release_year, rating FROM film;

SELECT DISTINCT last_name FROM actor;

SELECT COUNT(*) FROM film;

SELECT COUNT(*) FROM customer;

SELECT COUNT(DISTINCT category_id) FROM film_category;

SELECT COUNT(country) FROM country;

SELECT * FROM language LIMIT 5 OFFSET 1;

SELECT title, release_year, rental_duration, rating, replacement_cost FROM film ORDER BY rental_duration DESC, replacement_cost LIMIT 20;
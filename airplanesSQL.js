// 1. What are the names and locations of all airports in Portugal? (name, city)

// SELECT name, city FROM airport;

//  Sa Carneiro     
//  Portela         
//  Faro            
//  Madeira          
//  Ponta Delgada    
//  Orly             
//  Charles de Gaule 
//  Heathrow         
//  Gatwick 

// 2. What are the names of all planes of the DC-10 version? (name)

//SELECT make FROM model WHERE version = 'DC-10';

//Douglas

// 3. How many engines does each plane have? (plane_name, number)

//SELECT make, engines FROM model;
//  Douglas |       3
//  Boeing  |       2
//  Boeing  |       4
//  Airbus  |       2
//  Airbus  |       4


// 4. How many flights with a 2 or 3 hour duration are there in the database? (number)

// SELECT COUNT( duration) FROM flight WHERE duration = 2 OR duration = 3;

// 7

// 5. What plane models have a version starting with A3? (modelcod, version)

// SELECT modelcod, version FROM model WHERE version LIKE 'A3%';

// 4
// 5

// 6. What is the code and duration of all flights. Sort the answer from longest to shortest flight. If two flights have the same duration, sort them by flight code from smallest to largest (flightcod, duration).

// SELECT flightcod, duration FROM flight ORDER BY duration DESC, flightcod ASC;

// flightcod | duration 
// -----------+----------
//       1004 |        3
//       1008 |        3
//       1010 |        3
//       1001 |        2
//       1003 |        2
//       1005 |        2
//       1111 |        2
//       1002 |        1
//       1006 |        1
//       1007 |        1
//       1009 |        1

// 7. Knowing that there are no direct flights from airport 1 (Porto) to airport 12 (London), which 2 legged flights can we use to travel between those airports? (flightcod1, flightcod2, intermediate_airport_code) Note: Use the airports codes (1 and 12) instead of the airport names in your query.

// SELECT * FROM flight WHERE fromairportcod = 1;
// SELECT * FROM flight WHERE toairportcod = 12;

// 8. How many airports are there in each country? Sort the answer in ascending order. (country, number)?


// postgres=# SELECT country, COUNT(airportcod) FROM airport GROUP BY country ORDER BY COUNT(airportcod) ASC;
    
//     country     | count 
// ----------------+-------
//  France         |     2
//  United Kingdom |     2
//  Portugal       |     5


// 9. What is the flight code, origin city and destination city of all flights in the database? Sort the answer by flight code. (flightcod, origin, destination)

// SELECT * FROM flight JOIN airport ON flight.fromairportcod = airport.airportcod ORDER BY flightcod ASC;



// 10. What are the flight codes of all flights from Porto to Lisboa. (flightcod)? Note: Your query should use the city names, not the airport codes.

// SELECT flightcod FROM flight WHERE fromairportcod = 1 AND toairportcod = 3;

// SELECT flightcod, airport.name FROM flight JOIN airport ON flightcode = airportcod WHERE flightcod = 1001;


// 11. How many airports are there in each country? (country, number); show only countries with more than 2 airports.

// SELECT country, COUNT(airportcod) FROM airport GROUP BY country HAVING COUNT(airportcod) > 2 ORDER BY COUNT(airportcod);
 
// country  | count 
// ----------+-------
//  Portugal |     5

// 12. What country, or countries, has more airports and how many? (country, number)

// SELECT country, COUNT(airportcod) FROM airport GROUP BY country HAVING COUNT(airportcod) > 5 ORDER BY COUNT(airportcod);

// 0

// 13. How many actual planes are there for each plane model. Sort the result so that least frequent models appear last (make, version, number). Note: You do not need to show models that do not have planes.

// SELECT model.version, COUNT(version) FROM plane JOIN model ON plane.modelcod = model.modelcod GROUP BY model.version ORDER BY COUNT(version) DESC;

// version | count 
// ---------+-------
//  747     |     3
//  DC-10   |     3
//  A300    |     2
//  A340    |     1

// 14. How many actual planes are there for each plane model. Sort the result so that least frequent models appear last (make, version, number). Note: Also show models that do not have planes.


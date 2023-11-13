SUM AND COUNT

1.  SELECT SUM(population) FROM world

2.  SELECT DISTINCT continent FROM world 

3.  SELECT SUM(gdp) FROM world 
    WHERE continent = 'Africa'

4.  SELECT COUNT(*) FROM world
    WHERE area > 1000000

5.  SELECT SUM(population) FROM world
    WHERE name IN ('Estonia', 'Latvia', 'Lithuania')

6.  SELECT continent, COUNT(name) FROM world 
    GROUP BY continent

7.  SELECT continent, COUNT(*) FROM world
    WHERE population >= 10000000
    GROUP BY continent

8.  SELECT continent FROM world
    WHERE population > 100000000
    GROUP BY continent


JOIN

1.  SELECT matchid, player FROM goal 
    WHERE teamid = 'GER'
 
2.  SELECT id,stadium,team1,team2 FROM game
    WHERE id = 1012

3.  SELECT player, teamid, stadium, mdate FROM game 
    JOIN goal ON id = matchid
    WHERE teamid = 'GER'

4.  SELECT team1, team2, goal.player FROM game
    JOIN goal ON id = matchid
    WHERE player LIKE '%Mario%'

5.  SELECT player, teamid, coach, gtime FROM goal 
    JOIN eteam ON teamid = id
    WHERE gtime <= 10

6.  SELECT mdate, teamname FROM game
    JOIN eteam ON game.id = eteam.id
    WHERE coach = 'Fernando Santos'

    (answer on shows the column names, why?)

7.  SELECT player FROM goal
    JOIN game ON matchid = id
    WHERE stadium = 'National Stadium, Warsaw'

8.  SELECT DISTINCT player FROM goal
    JOIN game ON matchid = id
    WHERE (team1 = 'GER' OR team2 = 'GER') AND teamid != 'GER'

9.  SELECT teamname, COUNT(player) FROM eteam 
    JOIN goal ON id = teamid
    GROUP BY teamname

10. SELECT stadium, COUNT(player) FROM game
    JOIN goal ON id = matchid
    GROUP BY stadium

11. SELECT matchid, mdate, COUNT(player) FROM game 
    JOIN goal ON matchid = id 
    WHERE (team1 = 'POL' OR team2 = 'POL')
    GROUP BY matchid

12. SELECT matchid, mdate, COUNT(player) FROM game
    JOIN goal ON id = matchid
    WHERE teamid = 'GER'
    GROUP BY matchid

13. SELECT mdate,team1,
    SUM(CASE WHEN teamid = team1 THEN 1 ELSE 0 END) AS score1,team2,
    SUM(CASE WHEN teamid = team2 THEN 1 ELSE 0 END) AS score2
    FROM game
    LEFT JOIN goal ON id = matchid
    GROUP BY mdate, id, team1, team2





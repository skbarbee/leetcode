#Write an SQL query to fix the names so that only the first character is uppercase and the rest are lowercase.

#Return the result table ordered by user_id.
# Write your MySQL query statement below

Select Users.user_id, CONCAT(UPPER(SUBSTR(Users.name,1,1)),LOWER(SUBSTR(Users.name,2))) as name FROM Users
ORDER BY
Users.user_id;

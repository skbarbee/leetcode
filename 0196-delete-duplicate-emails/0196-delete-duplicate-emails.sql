#Write an SQL query to delete all the duplicate emails, keeping only one unique email with #the smallest id. Note that you are supposed to write a DELETE statement and not a SELECT #one.

#After running your script, the answer shown is the Person table. The driver will first #compile and run your piece of code and then show the Person table. The final order of the #Person table does not matter.
# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below

Delete from Person Where Id NOT IN
    (SELECT * from (
    Select Min(Id) FROM Person GROUP BY Email) as p)
Insert into photos (url, user_id) values ('some_url', NULL);

update photos set user_id = 1 where user_id IS NULL;

DELETE from photos where id = 42;

-- insert into photos (url) values ('some url')
-- For each comment, show the contents of the comment and the username of the user who wrote the comment
SELECT p.id as photo_id, p.url, u.username, u.id AS user_id from users AS u LEFT JOIN photos AS p on u.id = p.user_id;

-- insert into users (username) values ('bobby');
select url, username from photos join users on users.id = photos.user_id;

select user_id from comments group by user_id;

select * from comments;
select count(DISTINCT user_id) from comments; -- or min, count, sum, avg


-- 44 photos total
select * from photos; 

-- what will be the difference between these 2 queries
select count(user_id) from photos;
select count(*) from photos;

-- find number of comments for each photo
select * from comments;
select photo_id, count(*) from comments group by photo_id;

-- find number of comments for each photo greater than or equal to 20
select photo_id, count(*) from comments group by photo_id having count(*) >= 20;
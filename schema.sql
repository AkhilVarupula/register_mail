CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY, created_at TIMESTAMP DEFAULT NOW()
);
select count(email), MONTHNAME(created_at) 
from users GROUP BY MONTHNAME(created_at) ;

select count(email) from users where email like '%yahoo%';
SELECT 
    CASE
        WHEN email LIKE '%yahoo%' THEN 'yahoo'
        WHEN email LIKE '%gmail%' THEN 'gmail'
        WHEN email LIKE '%hotmail%' THEN 'hotmail'
        ELSE 'other'
    END as provider, 
    COUNT(*) as total_users
FROM users GROUP BY provider ORDER BY total_users;
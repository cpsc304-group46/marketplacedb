# marketplacedb
Source control for marketplace database

Setup Guide for MYSQL: 
mysql -u root -p
;; enter password when prompted

show databases
;; will output list of databases on your computer

create database MarketDB
use MarketDB;

source /Users/path/to/sqlfile.sql;
;; creates database and loads tables onto database

show tables
;; shows table in db

describe tablename
;; shows details on table


Setup for Node.js (use template.js as reference)
;; to run node file 
node index.js || node filename.js


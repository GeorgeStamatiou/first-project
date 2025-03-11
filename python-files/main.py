import mysql.connector

# Opening the connection to access the database at the start of program.

db = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="M0b1l1ty!",
  database="testdatabase"
)
# Just storing the different databases to work with here as reference

# testdatabase
# parks_and_recreation

cursor = db.cursor()

# CREATING DATA BASES AND TABLES

# cursor.execute(''
# 'create database testdatabase')


# This is creating a table in out database

# cursor.execute(''
# 'create table person '
# '('
# 'name VARCHAR(50), '
# 'age smallint unsigned, '
# 'person_id int primary key auto_increment'
# ')')


# ADDING DATA

# name = 'Joe'
# age = 23


# cursor.execute(""
# "insert into person (name, age) "
# "values (%s, %s)", (name, age)
# )

# db.commit()

# When adding or deleting from a database, this is called DML:
# Data Manipulation Language.
# We have to commit these manually everytime to make sure it saves.

# When creating databases and tables, these are examples of DDL:
# Data Definition Language
# These auto-commit and there is no need to do it manually.

cursor.execute(""
"select *"
"from person")

# So at this point above is where we can make queries to get the data we want.

row_all = cursor.fetchall()

# Fetchall loads all the rows onto memory at once. Fast but heavy on memory.

row_one = cursor.fetchone()

# Fetchone loads each row one by one. Takes longer but memory efficient.

for x in row_all:
  print(x[0])



db.close()

# We close the connection at the end of the program to save memory.





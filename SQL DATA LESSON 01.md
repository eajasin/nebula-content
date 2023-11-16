Let's create a very simple database with two tables: `Author` and `Book`. Each author can have multiple books, but each book has only one author. This relationship is a classic one-to-many relationship.

### Table 1: Author
This table will store authors with a unique ID for each author.

- `Author_Id` (Primary Key)
- `Author_Name`

Here's the SQL to create the `Author` table:

```sql
CREATE TABLE Author (
    Author_Id INT PRIMARY KEY,
    Author_Name VARCHAR(100)
);
```

### Table 2: Book
This table will store books, and each book will reference an author from the `Author` table.

- `Book_Id` (Primary Key)
- `Book_Title`
- `Author_Id` (Foreign Key)

Here's the SQL to create the `Book` table:

```sql
CREATE TABLE Book (
    Book_Id INT PRIMARY KEY,
    Book_Title VARCHAR(100),
    Author_Id INT,
    FOREIGN KEY (Author_Id) REFERENCES Author(Author_Id)
);
```

In this simple database structure, `Author_Id` in the `Book` table is a foreign key that references `Author_Id` in the `Author` table. This establishes a direct link between each book and its author, allowing you to join these tables together in queries to get combined information about books and their authors. 

For instance, if you want to find out the name of the author of a particular book, you would perform a SQL join operation like this:

```sql
SELECT 
    Book.Book_Title,
    Author.Author_Name
FROM 
    Book
INNER JOIN 
    Author ON Book.Author_Id = Author.Author_Id;
```

This query would give you a list of book titles along with the names of their authors.
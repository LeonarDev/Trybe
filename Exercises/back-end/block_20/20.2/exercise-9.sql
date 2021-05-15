USE PiecesProviders;

SELECT Code, Name FROM Providers ORDER BY Name DESC LIMIT 1;

SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;

SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 3;

SELECT CONCAT( 
	'A peça mais cara é a ', 
    (SELECT Piece FROM Provides ORDER BY Price DESC LIMIT 1),
    ', provida pela empresa ',
    (SELECT Provider FROM Provides ORDER BY Price DESC LIMIT 1),
    ' e custa R$ ',
    (SELECT Price FROM Provides ORDER BY Price DESC LIMIT 1),
    ',00.'
);
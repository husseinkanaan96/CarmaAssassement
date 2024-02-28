Name: Hussein Mohammad Ali Kanaan

Email: husseinkanaan1996@gmail.com

Phone Number: +96171674174

Position Applying For: Full Stack Software Developer


This README file contains the requested steps for the creation of the project mentioned in the assessment sheet

1) I created a folder using the "mkdir" command through CMD

2) I navigated to the folder I created using the "CD" command

3) I typed the command "code ." to open the folder in the Visual Studio Code

4) I opened the terminal and created a new package,JSON file in the folder using the command "npm init -y" <-- version used: 20.11.1 -->

5) I added Express.JS to the project using the command "npm i --save" in the terminal <-- version used: 4.18.2 -->

6) I added the connection to the PostgreSQL through the command "npm i pg" in the terminal <-- version used: 8.11.3 -->

7) I created the server.js file through the command "touch" in the terminal

8) For database migration, I used knex.js since it supports majority of database architectures using "npm install knex pg" <-- version used: 3.1.0 -->

9) Created and configured my knexfiles.js folder for database connectivity and migration

10) Prepared my files to create using the following migration commands
10.1) npx knex migrate:make create_creditcard_info <-- Used to created my table creditcard_info -->
10.2) npx knex migrate:latest <-- Used to commit migration prepared to the database -->
10.3) In the migration file, I added an ID(number PK) that is always incremented by 1 on each insert, a name(for the Cardholder Name, string 50 characters not nullable), card number(for the credit card number, String 100 characters), CVV(for the CVV field, String 100 characters), expiration date(String). In addition, I added the timestamps created_at and updated_at by making them true

11) Created my public folder that contains my frontend files (index.html, style.css)

12) Created a new form inside index.html to be used in my post request

13) Added a style.css file in order to style the form to make it in the middle of the page
13.1) I added the Carma logo above the form

14) For the requested pop-up, I added the sweet alert library by the syntax "<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>" in the HTML page

15) I gave the sweet alert Two alerts to return to the user according to the status of the input submitted: success and error
15.1) If the status is success, the notification will show "Data Insertred Successfully"
15.2) If the status is error, the notification will show "Something Went Wrong!"

16) I put a limit to the Card Number field so that it cannot be greater than 16 characters and it also be specifically 16 characters.

17) I put a limit to the CVV field so that it cannot be greater than 3 characters and it also be specifically 3 characters.

18) If the form is empty, the pop up will show an error based on the criteria left behind
18.1) If the card holder name is missing, it will notify the user that it is required
18.2) If the card number is missing, it will notify the user that it is required. In addition, if the card number is not 16 characters, it will notify the user that there is an error in the input
18.3) If the the CVV is missing, it will notify the user that it is required. In addition, if the CVV is not 3 characterss, it will notify the user that there is an error in the input
18.4) If the expiration date is missing, it will notify the user that it is missing. In addition, if the expiration date is less than the SYSDATE, it will notify the user that there is an error in the input.

19) For the encryption of the card number and CVV in the database, I run the command "npm install bcrypt" in the terminal
19.1) I added the require('bcrypt') in the server.js file
19.2) I added a const that passes through all of the parameters required and hashes the card number and CVV 
19.3) If the criteria of the POST method works, all data will be inserted to the database and a status of 'success' will appear in the URL. If not, an error will be catched and a pop-up notification will show that it did not work. Finally, after the process is done regardless of the outcome, the database session will be destroyed

20) Luhn Algorithm: a formula know as Modulus 10 Algorithm, it was named after its creator, Hans Peter Luhn
20.1) This algorithm is used to validate a variety of identification numbers such as credit card number and social security numbers
20.2) To start with a Luhn Algorithm, I must have a 16 digit credit card number. For example, take the credit card number 4417123456789113. Take each digit in that number and multiply it by 2
20.3) The result of doubling the numbers are the following: 8 2 2 6 10 14 18 2
20.4) If the result of the doubling ends with a two digits number, add those two digits together
20.5) After that, add all of the numbers together. If the result of the added numbers is divisible by 10, the number is valid or not fake. Otherwise, the number is invalid or fake
20.6) The approach requested for applying the Luhn algorithm was done by firstly parsing the String entered by the user to an integer after iterating the the length of the entered number through a for loop. Then, if the value of the iterated variable modulated by 2 i strictly equals to 1, the parsed integer is incremented by multiplication by 2. Furthermore, if the new digit is greater than 9, a decrement by 1 ,ust  be done. Finally, the sum that is initiated as zero is incremented by newly acquired digit and then it is modulated by 10 and returned. Same goes to the CVV. 


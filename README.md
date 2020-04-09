# Infinitys-Hotel-and-Homes
 * A web application where user can browse for hotels in specific cities. 
User can filter the search based on checkin-checkout dates, no. of rooms, price etc.
User can also check details of any selected hotel, book hotels - 
for which I am using test mode of stripe API for payments which in future can be deployed with paid services.
User can even check for their booking history (name of the hotel, rooms booked, date etc).
* *Technologies* : Reactjs, Nodejs, Mongodb, Express, Rest API .

## Project Overview :
>**Front-End** - ``Reactjs``

*"hotel_website" is the folder which includes front-end part.*


>**Back-End** - ``Node.js``

*Folders other than "hotel_website" are backend part.*

***APIs:***
* ``Booking.com`` (from rapidapi.com)- to render the content of hotels based on search queries and filters offered.

* ``Stripe API`` - for card payments.


***Database Used*** : ``Mongodb``

*Models* :- 
- Users Model : to store information of the registration details of the users.
- Bookings Model : to store the booking information of the users.

**Password Hashing** is done using bcryptjs.

**Authentication** is done using Express Session Cookie.

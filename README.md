## BidsOnMe

BidsOnMe is a contractor bidding app that allows homeowners or landloards to post a variety of home improvement projects (plumbing, roofing, electrical, renovations, etc.) with a starting bid price, which contractors can view and assess. Contractors then begin bidding down from the price initially set by the homeowner, with the lowest bidder being awarded the contract for the project.

# Prerequisites

Users will need the following NPM packages:

-Node
-Nodemon
-Express
-Express-handlebars
-MongoDB
-Mongoose
-Passport

# Usage

Both homeowners and contractors sign up with an email account and password. This information is stored in our database, which is used for validation.

Once logged in, homeowners can post details about their project, such as the address, job type, initial bidding price, a bid closing date, job description, as well as a photo link.

After submitting the job, the homeowners' job information will be posted on the contractors' page. Contractors will be able to view this information, along with the current lowest bid for the project. Project contracts are awarded to the contractor with the lowest bid at the time of closing set by the homeowner.

See "screenshots" directory for examples of use.

# Developers

-Garrett Collinson
-Ryan McKenzie
-Hristo Nikolov
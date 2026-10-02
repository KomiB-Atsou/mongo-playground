// Lab: Using MongoDB Aggregation Stages with Python: $sort and $project

"""
Aggregation with PyMongo
In this activity, you will use PyMongo to aggregate data. Specifically, you'll:

Find all checking accounts with a balance greater than $1500,
Sort the results from highest balance to lowest, and
Return only the original balance, the balance in Great British Pounds (GBP), and the account type.
Before you begin, please note that you are now connected to an Atlas cluster and the bank database. Use the accounts collection for this lab.

Lab Instructions
You will use the accounts collection within the bank database for this lab. The accounts collection is stored in the accounts_collection variable.

Open the aggregation.py file in the editor tab by clicking the file name in the file explorer to the left.

Write an aggregation stage that selects the checking accounts with balances of more than $1,500. Assign this stage to a variable named select_accounts. Write this code below the comment marked 'TODO 1'. (Forgot the command? Check the hints below!)

Write an aggregation stage that organizes the documents in order from highest balance to lowest. Assign this stage to a variable named organize_by_original_balance. Write this code below the comment marked 'TODO 2'.

Write an aggregation stage that returns only the account type & balance fields, plus a new field, named "gbp_balance", containing the balance converted to Great British Pounds (GBP). (To convert a balance to GBP, divide the balance by the conversion rate. The conversion rate is stored in the variable conversion_rate_usd_to_gbp.) Assign this stage to a variable named return_specified_fields. Write this code below the comment marked 'TODO 3'.

Create an aggregation pipeline containing the three stages created above. Assign the pipeline to a variable named pipeline. Write this code below the comment marked 'TODO 4'.

Perform an aggregation on pipeline. Assign the results of the aggregation to a variable named results. Write this code below the comment marked 'TODO 5'.

After you edit the code, it will be autosaved. You can also use the keyboard commands such as ⌘+S or Ctrl+S to save explicitly. Then, navigate to the terminal tab at the top of the screen and run the following command:
"""


import os
import pprint

from dotenv import load_dotenv
from pymongo import MongoClient

# Load config from .env file
load_dotenv()
MONGODB_URI = os.environ["MONGODB_URI"]

# Connect to MongoDB cluster with MongoClient
client = MongoClient(MONGODB_URI)

# Get reference to 'bank' database
db = client.bank

# Get a reference to the 'accounts' collection
accounts_collection = db.accounts

# Return the account type, original balance, and balance converted to Great British Pounds (GBP) of all checking accounts with an original balance of greater than $1,500 US dollars, in order from highest original balance to lowest.

# To calculate the balance in GBP, divide the original balance by the conversion rate.
conversion_rate_usd_to_gbp = 1.3

# TODO 1: Select checking accounts with balances of more than $1,500.


# TODO 2: Organize documents in order from highest balance to lowest.


# TODO 3: Return only the account type & balance fields, plus a new field containing balance in Great British Pounds (GBP). Name the new field "gbp_balance"


# TODO 4: Create an aggegation pipeline containing the three stages created above


# TODO 5: Perform an aggregation on 'pipeline'.


print(
    "Account type, original balance and balance in GDP of checking accounts with original balance greater than $1,500, in order from highest original balance to lowest: "
)

for item in results:
    pprint.pprint(item)

client.close()


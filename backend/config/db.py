from pymongo import MongoClient

mongo=None

def connection(connection):
    global mongo
    try:
        mongo_url = "mongodb+srv://solankineha297:prismport@cluster0.vauaqjy.mongodb.net/prism?retryWrites=true&w=majority"
        mongo=MongoClient(mongo_url)
        print("connected to db")
    except Exception as e:
        print("Error connecting to db")    


from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Bruno374@localhost:5432/hackthon'
db = SQLAlchemy(app)
# db.init_app(app)

class Data(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    firstName = db.Column(db.String(120), unique = False)
    lastName = db.Column(db.String(120), unique = False)
    emailAddress = db.Column(db.String(220), unique = False)
    cardNumber = db.Column(db.Integer, unique = False)
    pointsQty = db.Column(db.Integer, unique = False)
    milesQty = db.Column(db.Integer, unique = False)
    originCity = db.Column(db.String(120), unique = False)
    destinationCity = db.Column(db.String(120), unique = False)
    startDate = db.Column(db.String(120), unique = False)
    endDate = db.Column(db.String(120), unique = False)

    def __init__(self, firstName, lastName, emailAddress, cardNumber, pointsQty, milesQty, originCity, destinationCity, startDate, endDate):
        self.firstName = firstName
        self.lastName = lastName
        self.emailAddress = emailAddress
        self.cardNumber = cardNumber
        self.pointsQty = pointsQty
        self.milesQty = milesQty
        self.originCity = originCity
        self.destinationCity = destinationCity
        self.startDate = startDate
        self.endDate = endDate

if __name__ == '__main__':
    db.create_all()

# -*- coding: utf-8 -*-
import json
import watson_developer_cloud
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify
from flask import request
from model import Data
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://dev_daniel:Monument00@localhost:5432/test'
db = SQLAlchemy(app)

@app.route("/")
def hello():
    return "Hello World!"
    
if __name__ == "__main__":
    app.run()

viajes = [
    {'firstName':'Daniel', 'lastName':'Carrillo', 'emailAddress':'daniel@hotmail.com', 'cardNumber':'123456', 'pointsQty':'1000', 'milesQty':'2000', 'originCity': 'Bogotá', 'destinationCity':'Cartagena', 'startDate': '23/12/2018', 'endDate': '24/01/20178'},
    {'firstName':'Daniel', 'lastName':'Carrillo', 'emailAddress':'daniel@hotmail.com', 'cardNumber':'123456', 'pointsQty':'1000', 'milesQty':'2000', 'originCity': 'Bogotá', 'destinationCity':'Medellín', 'startDate': '23/01/2018', 'endDate': '24/02/20178'},
    {'firstName':'Daniel', 'lastName':'Carrillo', 'emailAddress':'daniel@hotmail.com', 'cardNumber':'123456', 'pointsQty':'1000', 'milesQty':'2000', 'originCity': 'Bogotá', 'destinationCity':'Bogotá', 'startDate': '23/02/2018', 'endDate': '24/03/20178'},
    {'firstName':'Daniel', 'lastName':'Carrillo', 'emailAddress':'daniel@hotmail.com', 'cardNumber':'123456', 'pointsQty':'1000', 'milesQty':'2000', 'originCity': 'Bogotá', 'destinationCity':'Cali', 'startDate': '23/04/2018', 'endDate': '24/05/20178'},
    {'firstName':'Daniel', 'lastName':'Carrillo', 'emailAddress':'daniel@hotmail.com', 'cardNumber':'123456', 'pointsQty':'1000', 'milesQty':'2000', 'originCity': 'Bogotá', 'destinationCity':'Cartagena', 'startDate': '23/06/2018', 'endDate': '24/07/20178'},
    {'firstName':'Daniel', 'lastName':'Carrillo', 'emailAddress':'daniel@hotmail.com', 'cardNumber':'123456', 'pointsQty':'1000', 'milesQty':'2000', 'originCity': 'Bogotá', 'destinationCity':'Santa Marta', 'startDate': '23/08/2018', 'endDate': '24/09/20178'},
    {'firstName':'Daniel', 'lastName':'Carrillo', 'emailAddress':'daniel@hotmail.com', 'cardNumber':'123456', 'pointsQty':'1000', 'milesQty':'2000', 'originCity': 'Bogotá', 'destinationCity':'Cartagena', 'startDate': '23/09/2018', 'endDate': '24/10/20178'},
    {'firstName':'Daniel', 'lastName':'Carrillo', 'emailAddress':'daniel@hotmail.com', 'cardNumber':'123456', 'pointsQty':'1000', 'milesQty':'2000', 'originCity': 'Bogotá', 'destinationCity':'Amazonas', 'startDate': '23/03/2018', 'endDate': '24/04/20178'},
    {'firstName':'Daniel', 'lastName':'Carrillo', 'emailAddress':'daniel@hotmail.com', 'cardNumber':'123456', 'pointsQty':'1000', 'milesQty':'2000', 'originCity': 'Bogotá', 'destinationCity':'Cartagena', 'startDate': '23/10/2018', 'endDate': '24/11/20178'},
    {'firstName':'Daniel', 'lastName':'Carrillo', 'emailAddress':'daniel@hotmail.com', 'cardNumber':'123456', 'pointsQty':'1000', 'milesQty':'2000', 'originCity': 'Bogotá', 'destinationCity':'San Andres', 'startDate': '23/01/2018', 'endDate': '24/02/20178'},
    {'firstName':'Daniel', 'lastName':'Carrillo', 'emailAddress':'daniel@hotmail.com', 'cardNumber':'123456', 'pointsQty':'1000', 'milesQty':'2000', 'originCity': 'Bogotá', 'destinationCity':'Cartagena', 'startDate': '23/05/2018', 'endDate': '24/06/20178'}
]

@app.route('/viajes', methods=['GET','POST'])
def get_all_viajes():
    if request.method == 'POST':
        new_data = Data(request.json['firstName'], request.json['lastName'], request.json['emailAddress'], int(request.json['cardNumber']), int(request.json['pointsQty']), int(request.json['milesQty']), request.json['originCity'], request.json['destinationCity'], request.json['startDate'], request.json['endDate'])
        db.session.add(new_data)
        db.session.commit()
        return 'registro insertado exitosamente'
    else:
        return jsonify({'viajes':viajes})

@app.route('/watsongreet', methods=['GET'])
def get_watsonbot_greet():
    assistant = watson_developer_cloud.AssistantV1(
    version='2017-10-16',
    username='e3316173-a689-4cf2-9481-307d316ee1df',
    password='CJpBaGKpbbjW',
    url='https://gateway.watsonplatform.net/assistant/api'
    )
    response = assistant.message(
        workspace_id='6e65b7c7-9b60-40b1-a01e-03704ac13391'
    ).get_result()
    jsonResp = json.loads(json.dumps(response, indent=2))
    resp = ''.join(jsonResp['output']['text'])
    return resp

@app.route('/watsonresp', methods=['POST'])
def get_watsonbot_resp():
    msg = request.json['msg']
    assistant = watson_developer_cloud.AssistantV1(
    version='2017-10-16',
    username='e3316173-a689-4cf2-9481-307d316ee1df',
    password='CJpBaGKpbbjW',
    url='https://gateway.watsonplatform.net/assistant/api'
    )
    response = assistant.message(
        workspace_id='6e65b7c7-9b60-40b1-a01e-03704ac13391',
        input={
            'text': msg
        }
    ).get_result()
    jsonResp = json.loads(json.dumps(response, indent=2))
    resp = ''.join(jsonResp['output']['text'])
    return resp
from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
import json
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from joblib import dump, load
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)
api = Api(app)

#model = RandomForestClassifier()

RFmodel_path = 'RFClassiferextrasmall.joblib.pkl'
with open(RFmodel_path, 'rb') as f:
    model = load(f)

tfIDV_vectorizer_path = 'Transformer.joblib.pkl'
with open(tfIDV_vectorizer_path, 'rb') as f:
    tfidf_transformer = load(f)
    
count_vectorizer = 'word_count_vector.joblib.pkl'
with open(count_vectorizer, 'rb') as f:
    cv = load(f)
# argument parsing
parser = reqparse.RequestParser()
parser.add_argument('query')

class PredictSentiment(Resource):
    def get(self):
        # use parser and find the user's query
        args = parser.parse_args()
        user_query = args['query']
        inputvector = []
        inputvector.append(user_query)
        countvector = cv.transform(inputvector)
        tf_idf_vector=tfidf_transformer.transform(countvector)

        output= model.predict(tf_idf_vector )
        df=pd.DataFrame(output)
        # create JSON object
        response = {'prediction': df.to_json()}
        return response


# Setup the Api resource routing here
# Route the URL to the resource
api.add_resource(PredictSentiment, '/')


if __name__ == '__main__':
    app.run(debug=True)
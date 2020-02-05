# Torre application

## Machine Learning
This is the github with my application for torre. 
I have created a machine learning algorithm that predicts relevant skills based on a job description. This could be used to give suggestions to a employer that is writing a job proposal. How I've done this is described in the jupyter notebook found here:

https://github.com/RoytenBerge/TorreApplication/blob/master/Torre%20ML%20Skill%20Predict.ipynb

## Front-end
I have build a small resume website that shows I am capable of creating a web app. I only designed the front-page due to a lack of time (only for laptop). This is just made to show I can do it. The website is hosted on:

http://www.Roytenberge.com

The source code is found here:

https://github.com/RoytenBerge/TorreApplication/tree/master/Website

## Back-end
I have created a small restfull api file that can be hosted anywhere. The API is very small. The only endpoint in it is the root http://flask-env.xhrwxkncvd.us-east-2.elasticbeanstalk.com/ and by adding a string behind it, it can be queried. On www.roytenberge.com/torre the api can be tested with a simple GUI. The network is not working very well because this is a smaller version (the bigger one needed a bigger aws instance and that would have cost me too much). 

https://github.com/RoytenBerge/TorreApplication/blob/master/API/

## Disclaimer
My planning was to run the ML algorithms in the cloud on a restful API, but the algorithmfiles were too big to compute on a free server and I did not found the time to upload the entire API. In my previous android application I did setup a serverless restfull API on AWS. The app can be found here and if you want some insights in how the API works, I can give you access to my AWS account (via pm):

https://play.google.com/store/apps/details?id=com.marketwizard.marketwizard

## Log
| Time  | Work done | 
|---|---|
|  22/01 9:00-12:00 | Tested API calls and gathered data for ML algorithm training  | 
|  22/01 13:00-16:00 |  Trained 2 models (Random Forest and KNN multiclass) |
|  23/01 9:00-11:00 | Created small resume website  | 
|  23/01 11:00-12:00 | Setup api locally. Tested in Jupiter notebook to work properly  | 
|  23/01 12:00-13:00 | Tried uploading api, The trained NN was 4 gb this would be very expensive to host on the cloud inc CPU time  |
|  01/02 9:00-11:00 | Uploaded a smaller version of my network as an elastic beanstalk API to AWS http://flask-env.xhrwxkncvd.us-east-2.elasticbeanstalk.com/  |
|  02/02 9:00-11:00 | Created a Torre page on www.roytenberge.com where the api can be called with a job description textfield  |


# Final_Project
## Overview
- Selected topic
	- [Stroke Prediction Dataset](https://github.com/nvuono625/Final_Project/blob/NVuono_Square/Resources/healthcare-dataset-stroke-data-update.csv)
	- [Google Slides](https://docs.google.com/presentation/d/1Lf6xTJPvfWeE9aqnDYtFyqe7-ScPtTFNq3beuKu3Z6A/edit#slide=id.g11e19c5e411_0_15)
	- [Interactive Element](https://nvuono625.github.io/Final_Project/website-main/)

- Reason they selected the topic
	- The reason we selected this topic is because it is something that our team was interested in. According to the World Health Organization, 11% of total deaths globally are caused by strokes and it would be a benefit to the public to be able to predict the likelihood based on personal traits, ie. gender, age, various diseases, smoking status, etc.

- Description of the source of data
	- The dataset is a CSV (Comma Separated Values) file that includes patient's personal information. Each line/row of the dataset includes relevant imformation to each patient in a certain sequence separated by commas so that the information can be opened in a application like excel or as a charted dataset. The sequence is as follows:
        id, gender, hypertension, heart_disease, work_type, Residence_type, avg_glucose_level, bmi, smoking_status, stroke
	- A CSV file is however able to be parsed and set up into an array so that you can work with the data in other languages.

- Questions they hope to answer with the data
	- With this data, we hope to answer the likelihood of a stroke based on a patient's personal health. 

- Description of the communication protocols 
	- Our communication occurs over zoom and in slack to send updates to each other. The success of our project depends on our ability to collaborate as a team.
_____
## Machine Learning Results 
- Decision Tree- Decision trees use multiple algorithms to decide to split a node into two or more sub-nodes. The creation of sub-nodes increases the homogeneity of resultant sub-nodes. In other words, we can say that the purity of the node increases with respect to the target variable. The decision tree splits the nodes on all available variables and then selects the split which results in most homogeneous sub-nodes.
- <img width="189" alt="Accurary of Decision Tree" src="https://user-images.githubusercontent.com/91567484/159597253-f5452b6a-ebe3-45c0-ad21-eee46a42e747.png">

- Logistic Regression- Logistic regression uses an equation as the representation, very much like linear regression. - Input values (x) are combined linearly using weights or coefficient values (referred to as the Greek capital letter Beta) to predict an output value (y). A key difference from linear regression is that the output value being modeled is a binary values (0 or 1) rather than a numeric value.
- <img width="209" alt="Accuracy of Logistic Regression" src="https://user-images.githubusercontent.com/91567484/159597283-07dc4c90-ea4c-48e7-891e-b727510cac25.png">

- KNN Classifier- The KNN algorithm assumes that similar things exist in close proximity. In other words, similar things are near to each other. The KNN algorithm hinges on this assumption being true enough for the algorithm to be useful. KNN captures the idea of similarity (sometimes called distance, proximity, or closeness) with some mathematics we might have learned in our childhood— calculating the distance between points on a graph.
- <img width="177" alt="Accuracy of KNN" src="https://user-images.githubusercontent.com/91567484/159597302-121c3f56-a879-4cab-85ea-8683d95d4f5a.png">

- Random Forest- Random forest is a Supervised Machine Learning Algorithm that is used widely in Classification and Regression problems. It builds decision trees on different samples and takes their majority vote for classification and average in case of regression.
- <img width="199" alt="Accuracy of Random Forest" src="https://user-images.githubusercontent.com/91567484/159597345-25168e40-4aa1-459c-a42f-bf81b14bf561.png">

- Accuracy Results through Machine Learning- 
- <img width="364" alt="Accuracy Bar Graph" src="https://user-images.githubusercontent.com/91567484/159597363-20cf0c96-74cc-4526-9de3-f5433f9c6f23.png">

-Decision Tree feature importance- 
- ![Decision_Tree_feature_importances](https://user-images.githubusercontent.com/91567484/159597740-2fdc12b6-c248-4f5e-bb40-a0f4f3f720a2.png)

-Random Forest feature importance- 
- ![RF_feature_importances](https://user-images.githubusercontent.com/91567484/159597849-f4f2217b-bbed-4ae9-ac69-f2d69071e7f7.png)

_____
## Results

By using different program learning tools, we were able to analyze the data to determine different risk results. Tools that were used were: SQL, supervised machine learning, Pandas, MatPlotLib, Seaborn, SKLearn, HTML, JavaScript, CSS, & Tableau public. 

People throughout their lives are always looking for ways to prevent strokes or hearth attacks later in life. Living a stressfree lifestyle is going to put the least amount of stress on the heart and arteries. Due to differnet living situations in every person, this is not always an option. This analysis of different factors that can cause a stroke was a way for us to determin if there were other factors that can help a person prevent this risks in life. 

There are stroke risk factors in every catagory that we analized. While some resulted in higher stroke rates, the biggest factor affecting a persons risk of Stroke was being married. Specificly increase for females. 
<img width="700" alt="DB 2 " src="https://user-images.githubusercontent.com/91567484/159600093-8be9f633-bf6e-42ea-ad78-e41bf2026b0d.png">

Another catagory that is preventable or at least controllable, was the patient's BMI. People in the yellow and orange section of the chart below were the leading stroke patients. Surprisingly, heart desease and hypertension did not have a change in a person having a stroke or not. More people without heart disease had stroke then with. 
<img width="634" alt="DB 1 " src="https://user-images.githubusercontent.com/91567484/159600113-912c4aed-0659-4fff-9400-29c13d9b0e8b.png">

-![BMI Chart ](https://user-images.githubusercontent.com/91567484/159599865-efde805c-7d08-4abe-904f-8b399c12013f.png)

_____
## Summary!
Nothing is ever 100%. Every person every day is at risk of having a stroke. No one can know exactly what is going on inside the body at any time. As we see throughout life, strokes can effect any age, gender or health fanatic. 

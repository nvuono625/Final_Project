# Final_Project
## Overview
- Selected topic
	- [Stroke Prediction Dataset](https://github.com/nvuono625/Final_Project/blob/NVuono_Square/Resources/healthcare-dataset-stroke-data-update.csv)
	- Google Slides: https://docs.google.com/presentation/d/1Lf6xTJPvfWeE9aqnDYtFyqe7-ScPtTFNq3beuKu3Z6A/edit#slide=id.g11e19c5e411_0_15

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
- https://github.com/nvuono625/Final_Project/blob/main/ML%20Images/Accurary%20of%20Decision%20Tree.png?raw=true![image](https://user-images.githubusercontent.com/91567484/159596335-b727e115-a124-4d22-9837-0b13e96d5ef9.png)

- Logistic Regression- Logistic regression uses an equation as the representation, very much like linear regression. - Input values (x) are combined linearly using weights or coefficient values (referred to as the Greek capital letter Beta) to predict an output value (y). A key difference from linear regression is that the output value being modeled is a binary values (0 or 1) rather than a numeric value.
- https://github.com/nvuono625/Final_Project/blob/main/ML%20Images/Accuracy%20of%20Logistic%20Regression.png?raw=true![image](https://user-images.githubusercontent.com/91567484/159597071-0821959a-db3d-444f-9c63-86c0161ff1d0.png)

- KNN Classifier- The KNN algorithm assumes that similar things exist in close proximity. In other words, similar things are near to each other. The KNN algorithm hinges on this assumption being true enough for the algorithm to be useful. KNN captures the idea of similarity (sometimes called distance, proximity, or closeness) with some mathematics we might have learned in our childhood— calculating the distance between points on a graph.
- https://github.com/nvuono625/Final_Project/blob/main/ML%20Images/Accuracy%20of%20KNN.png?raw=true![image](https://user-images.githubusercontent.com/91567484/159597049-a87c1a81-7cc1-4946-8e91-3bbf36c66e0a.png)

- Random Forest- Random forest is a Supervised Machine Learning Algorithm that is used widely in Classification and Regression problems. It builds decision trees on different samples and takes their majority vote for classification and average in case of regression.
- https://github.com/nvuono625/Final_Project/blob/main/ML%20Images/Accuracy%20of%20Random%20Forest.png?raw=true![image](https://user-images.githubusercontent.com/91567484/159597031-433bea99-4f5b-4eed-ae30-3feedbb74344.png)

- Accuracy Results through Machine Learning- https://github.com/nvuono625/Final_Project/blob/main/ML%20Images/Accuracy%20Bar%20Graph.png?raw=true![image](https://user-images.githubusercontent.com/91567484/159597008-f82f5c41-4e75-4cfd-953d-2b545b970a82.png)

_____
## Results

By using different program learning tools, we were able to analyze the data to determine different risk results. Tools that were used were: SQL, supervised machine learning, Pandas, MatPlotLib, Seaborn, SKLearn, HTML, JavaScript, CSS, & Tableau public. 

People throughout their lives are always looking for ways to prevent strokes or hearth attacks later in life. Living a stressfree lifestyle is going to put the least amount of stress on the heart and arteries. Due to differnet living situations in every person, this is not always an option. This analysis of different factors that can cause a stroke was a way for us to determin if there were other factors that can help a person prevent this risks in life. 

There are stroke risk factors in every catagory that we analized. While some resulted in higher stroke rates, the biggest factor affecting a persons risk of Stroke was being married. Specificly increase for females. 

Another catagory that is preventable or at least controllable, was the patient's BMI. People in the yellow and orange section of the chart below were the leading stroke patients. Surprisingly, heart desease and hypertension did not have a change in a person having a stroke or not. More people without heart disease had stroke then with. 

[bmi-chart](https://user-images.githubusercontent.com/91567484/159176329-e6d9863a-49b1-4b1b-9c91-8b824cccee16.png)
_____
## Summary!
Nothing is ever 100%. Every person every day is at risk of having a stroke. No one can know exactly what is going on inside the body at any time. As we see throughout life, strokes can effect any age, gender or health fanatic. 

Create Table Stroke (
 	id integer NOT NULL,
 	gender text NOT NULL,
 	age float NOT NULL,
 	hypertension integer NOT NULL,
 	heart_disease integer NOT NULL,
	ever_married text NOT NULL,
 	work_type text NOT NULL,
 	residence_type text NOT NULL,
	avg_glucose_level float,
 	bmi float,
 	smoking_status text,
 	stroke integer,
	PRIMARY KEY (id)
	); 

Create table Patients (
 	id integer NOT NULL,
 	gender text NOT NULL,
 	age float NOT NULL,
 	hypertension integer NOT NULL,
 	heart_disease integer NOT NULL,
	ever_married text NOT NULL,
 	work_type text NOT NULL,
 	residence_type text NOT NULL,
	PRIMARY KEY (id)
 	);
	
	




Create Table Health (
	id integer,
	avg_glucose_level float,
 	bmi float,
 	smoking_status text,
 	stroke integer 
);

	Select*
From Stroke 
	Select* 
From patients
	Select*
From Health 

Select patient.id, 
	patient.hypertension, 
	patient.heart_disease,
	patient.ever_married, 
	patient.work_type, 
	results.stroke
	
INTO Stroke_risk
from patients AS patient
	INNER JOIN health AS results
	ON (results.id = patient.id)
WHERE ( stroke between '0' AND '1')
ORDER BY id ASC;

SELECT * from stroke_risk 

Select patient.id, 
	patient.hypertension, 
	patient.heart_disease,
	results.avg_glucose_level,
	results.bmi,
	results.smoking_status,
	results.stroke
	
INTO Health_risk
from patients AS patient
	INNER JOIN health AS results
	ON (results.id = patient.id)
WHERE ( stroke between '0' AND '1')
ORDER BY id ASC;

SELECT * from Health_risk 


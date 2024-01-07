const edith = {
  firstName: {
      text: 'First Name: ',
      defaultOption: 'Michael',
  },
  lastName: {
      text: 'Last Name: ',
      defaultOption: 'Brown',
  },
  dateOfBirth: {
      text: 'Birth Date: ',
      defaultOption: '1984-06-17',
  },
  gender: {
    text: 'Gender: ',
    defaultOption: 'Male', // Setting 'Male' as the default option
    options: [
      'Male', 'Female',
    ]
  },
  nationality: {
    text: 'Nationality: ',
    defaultOption: 'British', // Setting 'British' as the default option
      options: [
        // Add nationality options here
        'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian',
        'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian', 'Belgian',
        'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bruneian', 'Bulgarian', 'Burkinabe',
        'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese',
        'Colombian', 'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican',
        'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian',
        'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan',
        'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian', 'Icelander', 'Indian', 'Indonesian',
        'Iranian', 'Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan',
        'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian',
        'Luxembourger', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivan', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian',
        'Mauritian', 'Mexican', 'Micronesian', 'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 'Mosotho', 'Motswana', 'Mozambican',
        'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 'Ni-Vanuatu', 'Nicaraguan', 'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish',
        'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Polish', 'Portuguese',
        'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi',
        'Scottish', 'Senegalese', 'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean', 'Slovakian', 'Slovenian', 'Solomon Islander',
        'Somali', 'South African', 'South Korean', 'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamer', 'Swazi', 'Swedish', 'Swiss',
        'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian or Tobagonian', 'Tunisian', 'Turkish',
        'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbekistani', 'Venezuelan', 'Vietnamese', 'Welsh', 'Yemenite', 'Zambian', 'Zimbabwean'
      ]
  },
  ethnicity: {
    text: 'Ethnicity: ',
    defaultOption: 'Black',
    options: [
      'Asian', 'Black', 'White', 'Hispanic', 'Native American', 'Middle Eastern', 'Mixed'
    ]
  },
  languagesSpoken: {
    text: 'Languages Spoken: ',
    defaultOption: ['English'],  // Corrected the spelling of 'default'
    options: [
      'English', 'French', 'Spanish', 'Mandarin Chinese', 'Hindi', 'Arabic', 'Bengali', 'Portuguese', 'Russian',
      'Japanese', 'German', 'Javanese', 'Punjabi', 'Korean', 'Turkish', 'Tamil', 'Italian', 'Urdu',
      'Persian (Farsi)', 'Dutch', 'Greek', 'Thai', 'Polish', 'Romanian', 'Hungarian',
      'Swedish', 'Vietnamese', 'Czech', 'Hebrew', 'Finnish', 'Danish', 'Norwegian', 'Swahili',
      'Malay/Indonesian', 'Filipino (Tagalog)', 'Amharic', 'Nepali', 'Ukrainian', 'Serbian', 'Bulgarian'
    ]
  },
  exerciseFrequency: {
      text: 'Exercise Frequency: ',
      defaultOption: 'High', // Setting 'High' as the default option
      options: [
        'None', 'Low', 'Moderate', 'High'
      ]
  },
  diet: {
    text: 'Diet: ',
    defaultOption: 'Balanced', // Setting 'Balanced' as the default option
    options: [
      'Balanced', 'Vegetarian', 'Vegan', 'Pescetarian', 'Keto', 'Paleo', 'Low-Carb', 'Gluten-Free', 'Dairy-Free', 'Halal', 'Kosher', 'Other'
    ]
  },
  sleepPatterns: {
    text: 'Sleep Patterns: ',
    defaultOption: 'Regular', // Setting 'Regular' as the default option
    options: [
      'Regular', 'Irregular', 'Variable'
    ]
  },
  alcoholConsumption: {
      text: 'Alcohol Consumption: ',
      defaultOption: 'Low', // Setting 'Low' as the default option
      options: [
        'None', 'Low', 'Moderate', 'High'
      ]
  },
  smokingHabits: {
      text: 'Smoking Habits: ',
      defaultOption: 'Non-smoker', // Setting 'Non-smoker' as the default option
      options: [
        'Non-smoker', 'Former smoker', 'Current smoker'
      ]
  },
  knownConditions: {
      text: 'Known Conditions: ',
        defaultOption: 'None', // Setting 'None' as the default option
        options: [
          'None', 'Diabetes', 'Hypertension', 'Heart Disease', 'Asthma', 'Arthritis', 'Depression', 'Anxiety', 'Other'
          // Add more conditions as needed
        ]
  },
  allergies: {
      text: 'Allergies: ',
      defaultOption: 'None', // Setting 'None' as the default option
      options: [
        'None', 'Pollen', 'Dust', 'Food (e.g., Nuts, Dairy)', 'Insect Stings', 'Animal Dander', 'Medications', 'Other'
        // Add more allergies as needed
      ]
  },
  medications: {
      text: 'Medications: ',
      defaultOption: 'None', // Setting 'None' as the default option
      options: [
        'None', 'Antihistamines', 'Pain Relievers', 'Antibiotics', 'Blood Pressure Medication', 'Insulin', 'Antidepressants', 'Other'
        // Add more medications as needed
      ]
  },
  vaccinationStatus: {
      text: 'Vaccination Status: ',
    defaultOption: 'Up-to-date', // Setting 'Up-to-date' as the default option
    options: [
      'Up-to-date', 'Pending', 'Not vaccinated'
    ]
  },
  workStressLevel: {
      text: 'Work Stress Level: ',
      defaultOption: 'Low', // Setting 'Low' as the default option
      options: [
        'None', 'Low', 'Medium', 'High'
      ]
  },
  personalStressLevel: {
      text: 'Personal Stress Level: ',
      defaultOption: 'Low', // Setting 'Low' as the default option
      options: [
        'None', 'Low', 'Medium', 'High'
      ]
  },
  financialStressLevel: {
      text: 'Financial Stress Level: ',
    defaultOption: 'High', // Setting 'High' as the default option
    options: [
      'None', 'Low', 'Medium', 'High'
    ]
  },
  familyStructure: {
      text: 'Family Structure: ',
      defaultOption: 'Married', // Setting 'Married' as the default option
      options: [
        'Single', 'Married', 'Divorced', 'Widowed', 'Partnership', 'Other'
      ]
  },
  workEnvironment: {
      text: 'Work Enviorment: ',
      defaultOption: 'Hybrid', // Setting 'Hybrid' as the default option
      options: [
        'Remote', 'Office', 'Hybrid', 'Field Work', 'Other'
      ]
  },
  relationshipStatus: {
      text: 'Relationship Status: ',
    defaultOption: 'Married', // Setting 'Married' as the default option
    options: [
      'Single', 'In a relationship', 'Married', 'Divorced', 'Widowed', 'Separated', 'Other'
    ]
  },
  socialSupport: {
      text: 'Social Support: ',
      defaultOption: 'Strong', // Setting 'Strong' as the default option
      options: [
        'Strong', 'Moderate', 'Low', 'None'
      ]
  },
  communityEngagement: {
      text: 'Community Engagement: ',
      defaultOption: 'Active', // Setting 'Active' as the default option
      options: [
        'Active', 'Moderate', 'Low', 'None'
      ]
  },
  therapyHistory: {
      text: 'Therapy History: ',
    defaultOption: 'No', // Setting 'No' as the default option
    options: [
      'No', 'Yes', 'Currently in therapy'
    ]
  },
  majorLifeEvents: {
      text: 'Major Life Events: ',
      defaultOption: 'None', // Assuming 'None' as a default option
      options: [
        'None', 'Recently became a parent', 'Bought a house', 'Got married', 'Changed jobs', 'Moved to a new city', 'Lost a loved one', 'Other significant event'
        // Add more major life events as needed
      ]
  },
  emotionalWellBeing: {
      text: 'Emotional Well Being: ',
      defaultOption: 'Stable', // Setting 'Stable' as the default option
      options: [
        'Stable', 'Variable', 'Unstable'
      ]
  },
};

export {
    edith,
}

function fetchQuestions(){

let questions={
    1:{q:"Great, Can we get your full name?",m:""},
    2:{q:"And what's your email address?",m:"We will use this to reach you and schedule themeet up if shortlisted"},
    3:{q:"Tell us a little more about your startup? (100 words)",m:"Best elevator pitches starts with a name, the problemyour startup aims to solve and how....."},
    4:{q:"What's your 5 year plan in terms of growth and revenue?(200 words) ",m:""},
    5:{q:"A quick challenge for you!! Suppose the demand for a product is doubling in next 30days, how will you cope up with the scalability issues to manage this sudden demand? (200 words)",m:""},
    6:{q:"Just one step away!! Please share your phone number ",m:"",c:"number"},
}
return questions
}
export {fetchQuestions};
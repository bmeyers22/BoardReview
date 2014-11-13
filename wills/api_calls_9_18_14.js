// API test calls document
//[[SubCategory::Neurology]][[MainCategory::Anatomy||Behavioral Science/Psychiatry||Biochemistry||Embryology||Ethics||Genetics||Histology||Immunology||Microbiology||Pathology||Pathophysiology||Pharmacology||Physiology]][[ExamType::USMLE Step 1]]
// Generic exam call

var api = new mw.Api();
api.get({
    action: 'exams',
    username: 'Briantmeyers',
    format: 'json'
})
    .done(function(data) {
        console.log(data);
    });


//CountQuestions call
//Fake data version
var api = new mw.Api();
api.get({
    action: 'questions',
    subAction: 'getCount',
    questions: JSON.stringify({
        semantic: {
            MainCategory: ["Anatomy", "Behavioral Science/Psychiatry", "Biochemistry", "Biostatistics/Epidemiology", "Embryology", "Ethics", "Genetics", "Histology", "Immunology", "Microbiology", "Pathology", "Pathophysiology", "Pharmacology", "Physiology"],
            SubCategory: "Neurology",
            ExamType: "USMLE Step 1"
        },
        hasSeen: false
    }),
    format: 'json'
})
    .done(function(data) {
        console.log(data);
        console.log(data.count)
    });

//I'm having some trouble getting the real API call to work, here's an example you can try that gives an error. When the number of results gets too high, the result never returns.
var api = new mw.Api();
api.get({
    action: 'questions',
    subAction: 'getCount',
    questions: JSON.stringify({
        semantic: {
            MainCategory: ["Anatomy", "Behavioral Science/Psychiatry", "Biochemistry", "Embryology", "Ethics", "Genetics", "Histology", "Immunology", "Microbiology", "Pathology", "Pathophysiology", "Pharmacology", "Physiology"],
            SubCategory: "Neurology",
            ExamType: "USMLE Step 1"
        },
        hasSeen: false
    }),
    format: 'json'
})
    .done(function(data) {
        console.log(data);
        console.log(data.count)
    });
//Real API call
var api = new mw.Api();
api.get({
    action: 'questions',
    subAction: 'getCount',
    questions: JSON.stringify({
        semantic: {
            MainCategory: window.exam.mainCat,
            SubCategory: window.exam.subCat,
            ExamType: window.exam.examtype
        },
        hasSeen: false
    }),
    format: 'json'
})
    .done(function(data) {
        console.log(data);
        console.log(data.count)
    });


//GetQuestions call
//Fake data version
var api = new mw.Api();
api.get({
    action: 'questions',
    questions: JSON.stringify({
        semantic: {
            MainCategory: "Anatomy",
            SubCategory: "Neurology",
            ExamType: "USMLE Step 1"
        },
        hasSeen: false,
        count: 5
    }),
    format: 'json'
})
    .done(function(data) {
        console.log(data);
    });

//Real API call
var api = new mw.Api();
api.get({
    action: 'questions',
    questions: JSON.stringify({
        semantic: {
            MainCategory: window.exam.mainCat,
            SubCategory: window.exam.subCat,
            ExamType: window.exam.examtype
        },
        hasSeen: false,
        count: 5
    }),
    format: 'json'
})
    .done(function(data) {
        console.log(data);
        window.exam.examQuestionsReturned = data
        window.exam.examQuestions = [];
        var i = 0;
        window.exam.currentQuestion = 0;
        $.each(data.questions, function(key, element) {
            element.PageName = key;
            window.exam.examQuestions[i] = element;
            i++;
        });
    });

//Real API call
api.get({
    action: 'questions',
    questions: JSON.stringify({
        semantic: {
            MainCategory: window.exam.mainCat,
            SubCategory: window.exam.subCat,
            ExamType: window.exam.examtype,
        },
        hasSeen: !$('.hasSeen-checkbox')[0].checked,
        count: window.exam.numQuestion
    }),
    format: 'json'
})
    .done(function(data) {
        console.log(data);
    });




// Notes for retreiving an exam that has been started
get an exam:

action: exams
sub action: ‘get’
exam: JSON.stringify({
    id: exam_id
})

will send full exam object with questions as one of its properties.


status: 1 = created but not started
status: 2 = in progress
status: 3 = done

no need to send end time
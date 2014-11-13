BR.AppModel = Backbone.Model.extend({
    examTypes: [{
        id: 'MCAT',
        text: 'MCAT'
    }, {
        id: 'USMLE Step 1',
        text: "1"
    }, {
        id: 'USMLE Step 2 CK',
        text: "2"
    }, {
        id: 'USMLE Step 3',
        text: "3"
    }, {
        id: 'Board Review',
        text: 'ABIM'
    }]
})

BR.Question = Backbone.Model.extend({
    PageName: null,
    PageAuthor: null,
    Prompt: null,
    RightAnswer: ' ',
    AnswerA: null,
    AnswerB: null,
    AnswerC: null,
    AnswerD: null,
    AnswerE: null,
    AnswerAExp: null,
    AnswerBExp: null,
    AnswerCExp: null,
    AnswerDExp: null,
    AnswerEExp: null,
    selectedAnswer: 'F',
    lastParsed: 0,
    creditReceived: false
});
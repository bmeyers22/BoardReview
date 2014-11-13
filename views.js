BR.AppView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    options: {
        examtype: null,
        timer: null,
        qbank: null,
        searchMethod: null,
        timer: null,
        examType: '',
        timeAmt: 0,
        questionListAll: new Array(),
        numQuestion: null,
        currentQuestion: 0,
        examQuestions: new Array(),
        isParsed: 0,
        answeredRight: 0,
        Question: {
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
        }
    },
    selectExamOptions: function() {

    },
    listenForEvents: function() {
        this.$el.find('.Curric').on('click', this.options, selectExamOptions);
    },
    render: function() {
        // Compile the template using underscore
        var template = Handlebars.compile($("#application-template").html());
        // Load the compiled HTML into the Backbone "el"
        this.$el.html(template(this));
        this.listenForEvents();
    }
});